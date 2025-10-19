import React, { useEffect, useRef, useState } from "react";

export const Video = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const handlePlayClick = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      video.setAttribute("controls", true);
      setIsPlaying(true);
    } else {
      video.pause();
      video.removeAttribute("controls");
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative mt-6">
      <video
        ref={videoRef}
        src={src}
        className="w-full rounded-lg"
        loop
        muted
      />

      {!isPlaying && (
        <button
          onClick={handlePlayClick}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-[60px] md:h-[60px] rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5798 8.50417L1.37518 15.8423C1.22272 15.9285 1.0918 15.9384 0.982421 15.8721C0.873047 15.8058 0.818359 15.6865 0.818359 15.5142V0.87775C0.818359 0.7054 0.873047 0.586082 0.982421 0.519794C1.0918 0.453506 1.22272 0.463449 1.37518 0.549624L14.5798 7.88769C14.7322 7.97387 14.8085 8.07661 14.8085 8.19593C14.8085 8.31525 14.7322 8.41799 14.5798 8.50417Z"
              fill="#080808"
            />
          </svg>
        </button>
      )}
    </div>
  );
};
