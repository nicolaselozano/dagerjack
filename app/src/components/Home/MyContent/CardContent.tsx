import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

export interface HoverCard {
  staticImage: StaticImageData | string;
  gifImage: string;
  altText: string;
  link: string;
  description: string;
  detailedDescription: string;
}

const CardContent: React.FC<HoverCard> = ({
  staticImage,
  gifImage,
  altText,
  link,
  description,
  detailedDescription,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-105 transition-transform duration-300"
      >
        <div className="hover-card w-80 h-44 overflow-hidden rounded-lg shadow-lg">
          <Image
            src={isHovered ? gifImage : staticImage}
            alt={altText}
            width={320}
            height={180}
            unoptimized
            className="w-full h-full object-cover hover:cursor-pointer"
          />
        </div>
        <h1 className="text-4xl font-bold mt-2">{description}</h1>
      </a>

      {isHovered && (
        <>
          <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white p-4 w-96 rounded-lg shadow-xl z-20">
            <p className="text-gray-800 text-center">{detailedDescription}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CardContent;
