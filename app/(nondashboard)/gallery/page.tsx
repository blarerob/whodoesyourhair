import React from "react";
import Image from "next/image";

const Gallery= () => {

  return (
    <div>
      <Image
        src="/galleryCover.jpg"
        alt="About Background"
        style={{ objectFit: "fill" }}
        quality={100}
        priority
        className="z-[-1]"
        fill
      />
      <div className="flex flex-col items-start justify-start h-screen w-full absolute top-0 left-0 ml-4 text-white">

      </div>
    </div>
  );
};

export default Gallery;