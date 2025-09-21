import React from 'react';
import '../styles/SocialPage.css';

const socialPlatforms = [
  { name: 'Instagram', url: '#', icon: '' },
  { name: 'Facebook', url: '#', icon: '' },
  { name: 'LinkedIn', url: '#', icon: '' },
  { name: 'Twitter', url: '#', icon: '' },
  { name: 'YouTube', url: '#', icon: '' },
  { name: 'Special Platform', url: '#', icon: '' },
];

function SocialPage() {
  return (
    <div className="social-page">
      <h2>Follow Us</h2>
      <div className="social-grid">
        {socialPlatforms.map((platform, index) => (
          <a href={platform.url} key={index} target="_blank" rel="noopener noreferrer" className="social-card">
            <h3>{platform.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialPage;
