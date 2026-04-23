import React, { useState, useEffect, useRef, useCallback } from 'react';

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  const testimonials = [
    { name: "Rahul Mehta", role: "LalSweets", text: "FutureDesks delivered our e-commerce site in record time. Outstanding attention to detail!", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=80&h=80&fit=crop", stars: 5 },
    { name: "Priya Sharma", role: "Kirtilals", text: "The luxury website they built is stunning. Perfectly reflects our premium brand.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop", stars: 5 },
    { name: "Arjun Kapoor", role: "Tradescribe", text: "Complex trading platform made simple. FutureDesks exceeded our expectations!", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop", stars: 5 },
    { name: "Vikram Singh", role: "UrbanNest", text: "Amazing team! They understood our requirements perfectly and delivered ahead of schedule.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop", stars: 5 },
    { name: "Neha Gupta", role: "FitFuel", text: "Best decision we made! Our online sales increased by 200% after the new website.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop", stars: 5 },
    { name: "Amit Patel", role: "PetPals", text: "Professional, responsive, and highly skilled. Highly recommended for any web project!", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop", stars: 5 }
  ];

  const getCardsPerPage = useCallback(() => {
    if (!containerRef.current) return 3;
    const w = containerRef.current.offsetWidth;
    if (w <= 700) return 1;
    if (w <= 1000) return 2;
    return 3;
  }, []);

  const totalPages = useCallback(() => {
    return Math.ceil(testimonials.length / getCardsPerPage());
  }, [getCardsPerPage]);

  const scrollToPage = useCallback((page) => {
    if (!scrollRef.current) return;
    const pp = getCardsPerPage();
    const cards = document.querySelectorAll('.testi-card');
    if (cards.length > 0) {
      const cardWidth = cards[0].offsetWidth;
      const gap = 24;
      const scrollAmount = page * pp * (cardWidth + gap);
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [getCardsPerPage]);

  const handleDotClick = (page) => {
    setCurrentPage(page);
    scrollToPage(page);
  };

  // Update current page based on scroll position
  const updateCurrentPage = useCallback(() => {
    if (!scrollRef.current) return;
    const pp = getCardsPerPage();
    const cards = document.querySelectorAll('.testi-card');
    if (cards.length > 0) {
      const cardWidth = cards[0].offsetWidth;
      const gap = 24;
      const scrollPosition = scrollRef.current.scrollLeft;
      const pageWidth = pp * (cardWidth + gap);
      const newPage = Math.round(scrollPosition / pageWidth);
      setCurrentPage(Math.min(newPage, totalPages() - 1));
    }
  }, [getCardsPerPage, totalPages]);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', updateCurrentPage);
      return () => scrollElement.removeEventListener('scroll', updateCurrentPage);
    }
  }, [updateCurrentPage]);

  useEffect(() => {
    scrollToPage(currentPage);
  }, [currentPage, scrollToPage]);

  // Mouse Drag Events
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch Events
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="sec">
      <div className="section-label">Testimonials</div>
      <div className="section-title">
        Happy Clients<br /><span className="muted">What They Say</span>
      </div>
      
      <div 
        ref={containerRef}
        style={{ width: '100%' }}
      >
        <div 
          ref={scrollRef}
          style={{
            overflowX: 'auto',
            overflowY: 'hidden',
            display: 'flex',
            gap: '24px',
            scrollBehavior: 'smooth',
            cursor: isDragging ? 'grabbing' : 'grab',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          className="hide-scrollbar"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="testi-card"
              style={{
                background: '#fff',
                border: '1px solid var(--gray-100)',
                borderRadius: '14px',
                padding: '28px',
                minWidth: '300px',
                maxWidth: '350px',
                flex: '0 0 auto'
              }}
            >
              <div className="testi-stars">{'★'.repeat(t.stars)}</div>
              <p className="testi-text">"{t.text}"</p>
              <div className="testi-author">
                <img src={t.img} alt={t.name} />
                <div>
                  <div className="name">{t.name}</div>
                  <div className="role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="dot-nav">
        {[...Array(totalPages())].map((_, idx) => (
          <button 
            key={idx} 
            className={`dot ${currentPage === idx ? 'active' : ''}`} 
            onClick={() => handleDotClick(idx)}
          ></button>
        ))}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .testi-card {
          flex: 0 0 auto;
        }
        @media (max-width: 700px) {
          .testi-card {
            min-width: calc(100% - 32px);
            max-width: calc(100% - 32px);
          }
        }
        @media (min-width: 701px) and (max-width: 1000px) {
          .testi-card {
            min-width: calc(50% - 40px);
            max-width: calc(50% - 40px);
          }
        }
        @media (min-width: 1001px) {
          .testi-card {
            min-width: calc(33.333% - 40px);
            max-width: calc(33.333% - 40px);
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;