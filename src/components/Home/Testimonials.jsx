import React, { useRef } from 'react';

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const testimonials = [
    { name: "Rahul Mehta", role: "LalSweets", text: "FutureDesks delivered our e-commerce site in record time. Outstanding attention to detail!", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=80&h=80&fit=crop", stars: 5 },
    { name: "Priya Sharma", role: "Kirtilals", text: "The luxury website they built is stunning. Perfectly reflects our premium brand.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop", stars: 5 },
    { name: "Arjun Kapoor", role: "Tradescribe", text: "Complex trading platform made simple. FutureDesks exceeded our expectations!", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop", stars: 5 },
    { name: "Vikram Singh", role: "UrbanNest", text: "Amazing team! They understood our requirements perfectly and delivered ahead of schedule.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop", stars: 5 },
    { name: "Neha Gupta", role: "FitFuel", text: "Best decision we made! Our online sales increased by 200% after the new website.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop", stars: 5 },
    { name: "Amit Patel", role: "PetPals", text: "Professional, responsive, and highly skilled. Highly recommended for any web project!", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop", stars: 5 }
  ];

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
        ref={scrollRef}
        style={{
          overflowX: 'auto',
          overflowY: 'hidden',
          display: 'flex',
          gap: '24px',
          scrollBehavior: 'smooth',
          cursor: isDragging ? 'grabbing' : 'grab',
          paddingBottom: '10px',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
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
            style={{
              background: '#fff',
              border: '1px solid var(--gray-100)',
              borderRadius: '14px',
              padding: '28px',
              minWidth: '300px',
              maxWidth: '350px',
              flex: '0 0 auto',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}
          >
            <div style={{ color: '#f59e0b', fontSize: '14px', marginBottom: '12px', letterSpacing: '2px' }}>
              {'★'.repeat(t.stars)}
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--gray-600)', marginBottom: '20px' }}>
              "{t.text}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img src={t.img} alt={t.name} style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '14px', fontWeight: 700 }}>{t.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--gray-600)' }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .testimonials-scroll::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 700px) {
          .testimonials-scroll > div {
            min-width: calc(100% - 40px);
            max-width: calc(100% - 40px);
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;