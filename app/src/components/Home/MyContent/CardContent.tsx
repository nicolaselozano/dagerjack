import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

export interface HoverCard {
  staticImage: StaticImageData | string;
  gifImage: string;
  altText: string;
  link: string;
  description: string;
}

const CardContent: React.FC<HoverCard> = ({
  staticImage,
  gifImage,
  altText,
  link,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (i) => {
    setIsHovered(i);
  };

  return (
    <a href={link}>
      <div 
       className="hover:scale-105">
        <div
          className="hover-card w-80 h-44 overflow-hidden rounded-lg shadow-lg"
          onMouseEnter={ () => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
        >
          <Image
            src={isHovered ? gifImage : staticImage}
            alt={altText}
            width={320}
            height={180}
            unoptimized
            className="w-full h-full object-cover hover:cursor-pointer"
          />
        </div>
        <h1 className="text-4xl font-bold">{description}</h1>
      </div>
    </a>
  );
};

export default CardContent;
