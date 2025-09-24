import React from "react";
import HeaderVideo_green from '../../Videos/Earth-green.mp4';

const HeaderVideo = () => {
  return (
    <div className="header-video">
          <video 
            src={HeaderVideo_green}
            autoPlay 
            loop 
            muted 
            playsInline
          >
          </video>
    </div>
    );
};

export default HeaderVideo;