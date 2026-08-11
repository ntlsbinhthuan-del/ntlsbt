import React from "react";
import styles from "./Uheader.module.css";

export const Uheader = () => {
  return (
    <div className={styles['header']}>
      <video 
        className={styles['video-background']}
        autoPlay 
        loop 
        muted 
        playsInline 
        disablePictureInPicture 
        controlsList="nodownload nofullscreen noplaybackrate"
      >
        <source src="HEADER.mp4" type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
    </div>
  );
};
