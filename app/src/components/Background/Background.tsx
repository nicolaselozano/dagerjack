import React from "react";
import Image from "next/image";
import profilePFP from "../../../public/pfp_derger.svg";

const Background: React.FC = () => {
    const imageCount = 50;
  
    return (
      <div className="fixed top-0 left-0 flex flex-col justify-around overflow-hidden h-screen">
        <div className="w-[200%] flex animate-scroll-left z-0 whitespace-nowrap">
          {Array.from({ length: imageCount * 2 }).map((_, index) => (
            <Image
              key={`left-${index}`}
              src={profilePFP}
              alt={`Image ${index + 1}`}
              className="w-32 h-32 object-cover"
            />
          ))}
        </div>

        <div className="w-[200%] -ml-[100%] flex animate-scroll-right z-0 whitespace-nowrap">
          {Array.from({ length: imageCount * 2 }).map((_, index) => (
            <Image
              key={`right-${index}`}
              src={profilePFP}
              alt={`Image ${index + 1}`}
              className="w-32 h-32 object-cover opacity-50"
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Background;
  