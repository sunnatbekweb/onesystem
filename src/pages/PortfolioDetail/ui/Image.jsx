import React from "react";

export const Image = ({ src, alt }) => {
  return src && <img src={src} alt={alt} className="w-full aspect-video h-[820px] object-cover" />;
};
