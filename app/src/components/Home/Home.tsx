"use client";
import React, { useRef } from "react";

import Carrusel from "./Carrusel/Carrusel";
import ProfileData from "./ProfileData/ProfileData";
import ButtonHome from "./Button/ButtonHome";
import MyContent from "./MyContent/MyContent";
import Follow from "./Contact/Follow";
import ContactForm from "./Contact/ContactForm";

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
            Mi Contenido
          </a>
        </ButtonHome>
      </div>

      <div>
        <hr
          className="flex flex-col justify-around items-center
      h-px my-40 bg- border-1 dark:bg-gray-700"
        />
        <h1  ref={carruselRef} className="text-3xl my-[5vh] underline">Hago contenido sobre:</h1>
        <div>
          <MyContent />
        </div>
      </div>

      <div id="follow"
      className="mt-[20vh]">
        <Follow />
      </div>

      <div id="contact">
        <ContactForm />
      </div>
    </section>
  );
};

export default HomeProfile;
