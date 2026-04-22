import React from 'react';

const PortfolioGrid = ({ openYT, showPage }) => {
  const projects = [
    { name: "Lal Sweets Ecom", desc: "Modern sweets store", yt: "https://www.youtube.com/embed/PetnzNpgwSs", site: "https://www.lalsweets.com/", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=450&fit=crop" },
    { name: "Kirtilals Luxury", desc: "Premium jewellery", yt: "https://www.youtube.com/embed/sS7mV9-b5wY", site: "https://www.kirtilals.com/", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=450&fit=crop" },
    { name: "Tradescribe Platform", desc: "Trading journal", yt: "https://www.youtube.com/embed/CL14uWyH7wM", site: "https://tradescribe.in/", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=450&fit=crop" },
    { name: "UrbanNest Furniture", desc: "Modern furniture", yt: "https://www.youtube.com/embed/NK8Cif0dAoM", site: "https://urbannest.in/", img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=450&fit=crop" },
    { name: "FitFuel Nutrition", desc: "Health supplements", yt: "https://www.youtube.com/embed/d8UykXD85m8", site: "https://fitfuel.in/", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=450&fit=crop" },
    { name: "PetPals Accessories", desc: "Premium pet gear", yt: "https://www.youtube.com/embed/PHKgCrjDNko", site: "https://petpals.in/", img: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=600&h=450&fit=crop" }
  ];

  const goSite = (e, url) => {
    e.stopPropagation();
    window.open(url, "_blank");
  };

  return (
    <div className="sec">
      <div className="section-label">Portfolio</div>
      <div className="section-title">Turning Visions Into<br /><span className="muted">Digital Reality</span></div>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="proj-card" key={idx} onClick={() => openYT(project.yt)}>
            <div className="proj-thumb">
              <img src={project.img} alt={project.name} />
              <div className="proj-overlay">
                <div className="proj-yt-btn"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></div>
                <span className="proj-site-chip" onClick={(e) => goSite(e, project.site)}>Visit Site →</span>
              </div>
            </div>
            <div className="proj-info">
              <h4>{project.name}</h4>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="view-all-wrap">
        <button className="btn-outline" onClick={() => alert('✨ More amazing projects coming soon!')}>Load More Projects</button>
      </div>
    </div>
  );
};

export default PortfolioGrid;