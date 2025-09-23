import React from 'react';
import SkillCarousel from './SkillCarousel';
import Videos_green from'../../Videos/Earth-green.mp4';

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">スキル一覧</h2>

      <div className="skills-container">
        <div className="skill-column video-column">
          <video 
            src={Videos_green}
            autoPlay 
            loop 
            muted 
            playsInline
          >
          </video>
        </div>
        <div className="skill-column carousel-column">
          <SkillCarousel />
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;