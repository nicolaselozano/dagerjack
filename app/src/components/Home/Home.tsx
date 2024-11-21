"use client";
import React, { useRef } from "react";

import Carrusel from "./Carrusel/Carrusel";
import ProfileData from "./ProfileData/ProfileData";
import ButtonHome from "./Button/ButtonHome";

const HomeProfile: React.FC = () => {
  const carruselRef = useRef<HTMLDivElement>(null);

  const scrollToCarrusel = () => {
    carruselRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="mb-[10vh]">
        <ProfileData />
      </div>

      <ButtonHome classname="bg-black">
        <a
          onClick={scrollToCarrusel}
        >
          Lo que hago
        </a>
      </ButtonHome>


      <div ref={carruselRef}
      className="mt-[50vh]">
        <Carrusel />
      </div>
    </section>
  );
};

export default HomeProfile;
