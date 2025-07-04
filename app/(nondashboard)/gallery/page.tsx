import React from "react";
import Image from "next/image";

const Gallery= () => {

  return (
    <div className='mb-10'>
      <Image
        src="/galleryCover.jpg"
        alt="About Background"
        style={{ objectFit: "fill" }}
        quality={100}
        priority
        className="z-[-1]"
        fill
      />
    </div>
  );
};

export default Gallery;