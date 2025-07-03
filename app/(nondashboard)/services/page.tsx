import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div>
      <Image
        src="/serviceCover.jpg"
        alt="About Background"
        style={{ objectFit: "fill" }}
        quality={100}
        priority
        className="z-[-1]"
        fill
      />
      <div className="flex flex-col items-start justify-start h-screen lg:ml-15 w-full absolute top-0 left-0 ml-4 text-white">
        <p className="text-[40px] md:text-[100px] lg:text-[100px] md:mt-20 lg:mt-20 text-black">Services.</p>
        <ul className="text-[16px] md:text-[24px] lg:text-[28px] gap-6 md:gap-8 lg:gap-10 ml-4
        md:ml-10 mt-10 md:mt-16 flex flex-col items-start justify-start">
          <p className="text-black">CONSULTATION</p>
          <p className="text-black">LONG HAIR</p>
          <p className="text-black">MORE HAIR</p>
          <p className="text-black">SHORT HAIR</p>
        </ul>
      </div>
    </div>
  );
};

export default Services;