import React, { useEffect, useState } from "react";
export default function ProgressBar({ isLoading, path }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress >= 80) {
        setProgress(progress + 20);
      } else {
        setProgress(progress + 40);
      }
    }, 100);
    if (progress >= 100) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [progress]);
  useEffect(() => {
    setProgress(0);
  }, [isLoading, path]);
  return (
    <span
      className={`h-1 progressBar bg-[#FAC125] transition-all duration-100`}
      style={{ width: `${progress}%` }}
    ></span>
  );
}
