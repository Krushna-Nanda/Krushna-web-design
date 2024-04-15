import { useEffect } from "react"
import video1 from "../assets/Video/video1.mp4"
import video2 from "../assets/Video/video2.mp4"
import video3 from "../assets/Video/video3.mp4"

import {gsap} from 'gsap'

function VideoCart({videUrl}){
  return (
    <div className="absolute top-0 left-0 w-full h-full">
  <video
          // ref={videUrl}
          src={videUrl}
          loop
          autoPlay={true}
          muted
          className="video-custom-class w-full h-full object-fill"
        ></video>

       
    </div>  
  )
}

export default function FullPage_Screen7(){

  useEffect(() => {
    const timeline = gsap.from(".video-custom-class", {
      opacity: 0,
      width: 0,
      duration: 3,
      stagger: 10,
      repeat: -1,
      onComplete: () => {
        // Reset the video width to its initial value after the animation completes
        gsap.set(".video-custom-class", { width: "100%", delay: 2 });
      },
    });
  
    // Return a cleanup function
    return () => {
      timeline.kill(); // Kill the animation when the component unmounts
    };
  }, []);
  

  return (
    <div className="relative w-full h-[500px] bg-black">
        <VideoCart videUrl={video1} />
        <VideoCart videUrl={video2} />
        <VideoCart videUrl={video3} />
    </div>
  )
}