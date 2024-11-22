"use client";
import React, { useRef } from "react";

import Carrusel from "./Carrusel/Carrusel";
import ProfileData from "./ProfileData/ProfileData";
import ButtonHome from "./Button/ButtonHome";
import MyContent from "./MyContent/MyContent";

const HomeProfile: React.FC = () => {
  const carruselRef = useRef<HTMLDivElement>(null);

  const scrollToCarrusel = () => {
    carruselRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="bg-cards_bg bg-opacity-20 flex flex-col justify-center
    text-center px-5 py-[8vh]
    mx-[5vh]
    "
    >
      <div className="mb-[5vh] mx-[10vh] flex">
        <ProfileData />
      </div>

      <div>
        <ButtonHome classname="w-[100%]">
          <a onClick={scrollToCarrusel} className="text-2xl font-bold">
            Mi contenido como Influencer
          </a>
        </ButtonHome>
      </div>

      <div ref={carruselRef} className="mt-[10vh]">
        <Carrusel />
      </div>

      <div>
        <hr
          className="flex flex-col justify-around items-center
      h-px my-8 bg- border-0 dark:bg-gray-700"
        />
        <h1 className="text-3xl my-[15vh] underline">Lo que hago</h1>
        <MyContent />
      </div>

    </section>
  );
};

export default HomeProfile;
