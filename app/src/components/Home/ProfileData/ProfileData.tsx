import React, { useState } from "react";
import Image from "next/image";
import profilePFP from "../../../../public/pfp.webp";
import ButtonHome from "../Button/ButtonHome";
import Lumber1 from "../../../../public/jack1.png";
import Lumber2 from "../../../../public/jack2.png";
import Typewriter from "./TypeWriter";

const ProfileData: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const toggleHovered = (set:boolean) => {
    console.log("hola");

    setHovered(set);
  };

  const handleScroll = () => {
    const section = document.getElementById("follow");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative flex flex-row justify-between w-full">
      <div className="text-left h-[60vh]">
        <Typewriter
          sentences={["Dot Dager", "pepino", "c# > Java", "boooooooca",". Dager"]}
          flashSenteces={["pepino", "c# > Java", "boooooooca",". Dager"]}
        />
        <p>
          Full-stack senior y contador serial de chistes con altura. <br /> C# Enjoyer
        </p>

        <ButtonHome classname="w-[25vh]">
          <a onClick={handleScroll}>
            <span>Sigueme aquí</span>
          </a>
        </ButtonHome>
        <ButtonHome classname="w-[25vh] ml-4">
          <a onClick={handleScrollContact}>
            <span>Contactame</span>
          </a>
        </ButtonHome>
      </div>
      <a href="https://tbot.xyz/lumber/" target="_blank">
        <div
          onMouseEnter={() => toggleHovered(true)}
          onMouseLeave={() => toggleHovered(false)}
          style={{
            pointerEvents: "all",
          }}
          className={`absolute object-cover w-[30px] -top-3 right-36 transition-transform duration-300 ease-in-out ${
            hovered ? "translate-y-[-10px] cursor-pointer" : "animate-breathe"
          }`}
        >
          <Image src={hovered ? Lumber2 : Lumber1} alt="Lumberjack" />
        </div>
      </a>

      <div>
        <div className="relative w-[60vh] h-[60vh] rounded-full shadow-lg overflow-hidden">
          <Image
            src={profilePFP}
            alt="Profile Image"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
