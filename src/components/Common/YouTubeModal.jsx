import React from 'react';

const YouTubeModal = ({ isOpen, onClose, ytUrl }) => {
  if (!isOpen) return null;

  const handleBgClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="yt-modal-bg open" onClick={handleBgClick}>
      <div className="yt-modal-box">
        <button className="yt-modal-close" onClick={onClose}>✕</button>
        <iframe src={`${ytUrl}?autoplay=1`} allowFullScreen allow="autoplay" title="YouTube Video"></iframe>
      </div>
    </div>
  );
};

export default YouTubeModal;