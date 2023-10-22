import React, { useEffect, useRef } from "react";
import Models from './Models';

export default function Firstdiv() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <>
        <div className="row">
            <div className="col-md-12">
              <video
                style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}
                playsInline
                loop
                muted
                controls
                alt="All the devices"
                src="https://digitalassets.tesla.com/tesla-contents/video/upload/Homepage-Model-Y-Desktop-NA.mp4"
                ref={videoEl}
              />
              <div id="content">
                  <h1>Model Y</h1>
                  <h4>Lease starting $399/mo*</h4>
              </div>
            </div>
        </div>
        <div className="row" style={{marginTop:"670px"}}>
          <div className="col-md-12">
            <Models/>
          </div>
        </div>
    </>
  );
}
