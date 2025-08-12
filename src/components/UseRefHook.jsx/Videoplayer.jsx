import React, { useRef } from "react";

const VideoPlayer=()=>
{
     const videoref=useRef();

     const handleStart=()=>
     {
        videoref.current.play();
     }

      const handleEnd=()=>
     {
        videoref.current.pause();
     }

    return(
        <div className="video player">
            <video width="500" controls ref={videoref}>
                <source
                src="https://upload.wikimedia.org/wikipedia/commons/transcoded/2/2f/Making_snowman_in_K%C3%B5rvemaa,_Estonia_(January_2022).webm/Making_snowman_in_K%C3%B5rvemaa,_Estonia_(January_2022).webm.480p.vp9.webm"
                type="video/webm"
                />
                Video not playing.
            </video>

            <button type="button" onClick={handleStart}>Start</button>

            <button type="button"   onClick={handleEnd}>Stop</button>

        
        </div>
    )
}

export default VideoPlayer;

