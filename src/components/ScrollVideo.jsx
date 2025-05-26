import React, {useRef, useEffect, useState} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import myVideo from '../assets/myVideo.mp4'
import './ScrollVideo.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollVideo = () => {

      const sectionRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null);
  const [isPinned, setIsPinned] = useState(true);

    useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    video.pause();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=500%",
        scrub: true,
        pin: true,
        markers: true,
        onLeave: () => {
          setIsPinned(false);
        }
      }
    });

    // Only video scrub logic — no scale
    tl.to({}, {
      duration: 2,
      onUpdate: () => {
        const progress = tl.progress();
        const playbackPhase = (progress) / 0.67;
        if (video.duration && playbackPhase >= 0 && playbackPhase <= 1) {
          video.currentTime = playbackPhase * video.duration;
        }
      }
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
      <div ref={sectionRef} className="page1">
        <div
          ref={videoWrapperRef}
          className={`video-wrapper ${isPinned ? 'fixed' : 'static'}`}
        >
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            className="video"
            src={myVideo}
          />
        </div>
      </div>
  )
}

export default ScrollVideo