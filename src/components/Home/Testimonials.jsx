// import React, { useState, useEffect, useRef } from 'react';

// const Testimonials = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const trackRef = useRef(null);
//   const containerRef = useRef(null);

//   const testimonials = [
//     { name: "Rahul Mehta", role: "LalSweets", text: "FutureDesks delivered our e-commerce site in record time. Outstanding attention to detail!", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=80&h=80&fit=crop", stars: 5 },
//     { name: "Priya Sharma", role: "Kirtilals", text: "The luxury website they built is stunning. Perfectly reflects our premium brand.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop", stars: 5 },
//     { name: "Arjun Kapoor", role: "Tradescribe", text: "Complex trading platform made simple. FutureDesks exceeded our expectations!", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop", stars: 5 },
//     { name: "Vikram Singh", role: "UrbanNest", text: "Amazing team! They understood our requirements perfectly and delivered ahead of schedule.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop", stars: 5 },
//     { name: "Neha Gupta", role: "FitFuel", text: "Best decision we made! Our online sales increased by 200% after the new website.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop", stars: 5 },
//     { name: "Amit Patel", role: "PetPals", text: "Professional, responsive, and highly skilled. Highly recommended for any web project!", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop", stars: 5 }
//   ];

//   const getCardsPerPage = () => {
//     if (!containerRef.current) return 3;
//     const w = containerRef.current.offsetWidth;
//     if (w <= 700) return 1;
//     if (w <= 1000) return 2;
//     return 3;
//   };

//   const totalPages = () => Math.ceil(testimonials.length / getCardsPerPage());

//   const updateTrack = () => {
//     if (!trackRef.current || !containerRef.current) return;
//     const pp = getCardsPerPage();
//     const gap = pp === 1 ? 16 : 24;
//     const cardW = (containerRef.current.offsetWidth - gap * (pp - 1)) / pp;
//     trackRef.current.style.transform = `translateX(-${currentPage * pp * (cardW + gap)}px)`;
//   };

//   useEffect(() => {
//     updateTrack();
//     window.addEventListener('resize', updateTrack);
//     return () => window.removeEventListener('resize', updateTrack);
//   }, [currentPage]);

//   const goToPage = (idx) => {
//     setCurrentPage(Math.max(0, Math.min(idx, totalPages() - 1)));
//   };

//   return (
//     <div className="sec">
//       <div className="section-label">Testimonials</div>
//       <div className="section-title">
//         Happy Clients<br /><span className="muted">What They Say</span>
//       </div>
//       <div className="testi-viewport" ref={containerRef}>
//         <div className="testi-track" ref={trackRef}>
//           {testimonials.map((t, idx) => (
//             <div className="testi-card" key={idx}>
//               <div className="testi-stars">{'★'.repeat(t.stars)}</div>
//               <p className="testi-text">"{t.text}"</p>
//               <div className="testi-author">
//                 <img src={t.img} alt={t.name} />
//                 <div>
//                   <div className="name">{t.name}</div>
//                   <div className="role">{t.role}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="dot-nav">
//         {[...Array(totalPages())].map((_, idx) => (
//           <div key={idx} className={`dot ${currentPage === idx ? 'active' : ''}`} onClick={() => goToPage(idx)}></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
import React, { useState, useEffect, useRef, useCallback } from 'react';

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const trackRef = useRef(null);
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
  }, [getCardsPerPage, testimonials.length]);

  const updateTrack = useCallback(() => {
    if (!trackRef.current || !containerRef.current) return;
    const pp = getCardsPerPage();
    const gap = pp === 1 ? 16 : 24;
    const cardW = (containerRef.current.offsetWidth - gap * (pp - 1)) / pp;
    trackRef.current.style.transform = `translateX(-${currentPage * pp * (cardW + gap)}px)`;
  }, [currentPage, getCardsPerPage]);

  useEffect(() => {
    updateTrack();
    window.addEventListener('resize', updateTrack);
    return () => window.removeEventListener('resize', updateTrack);
  }, [updateTrack]);

  const goToPage = (idx) => {
    setCurrentPage(Math.max(0, Math.min(idx, totalPages() - 1)));
  };

  return (
    <div className="sec">
      <div className="section-label">Testimonials</div>
      <div className="section-title">
        Happy Clients<br /><span className="muted">What They Say</span>
      </div>
      <div className="testi-viewport" ref={containerRef}>
        <div className="testi-track" ref={trackRef}>
          {testimonials.map((t, idx) => (
            <div className="testi-card" key={idx}>
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
          <button key={idx} className={`dot ${currentPage === idx ? 'active' : ''}`} onClick={() => goToPage(idx)}></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;