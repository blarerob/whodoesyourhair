import React from "react";
import Image from "next/image";

const About= () => {

  return (
    <div>
      <Image
        src="/aboutCover.jpg"
        alt="About Background"
        style={{ objectFit: "fill" }}
        quality={100}
        priority
        className="z-[-1]"
        fill
      />
      <div className="flex flex-col items-start justify-start h-screen w-full absolute top-0 left-0 p-8 text-white">
        <p className="text-[140px] text-red-700">About</p>
      </div>
    </div>
  );
};

export default About;