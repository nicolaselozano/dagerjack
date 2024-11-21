import Image from "next/image";
import profilePFP from "../../../../public/pfp.webp";
import ButtonHome from "../Button/ButtonHome";

const ProfileData = () => {
  return (
    <div className="flex justify-center">
      <div>
        <div className="absolute rounded-full shadow-lg overflow-hidden w-[60vh] h-[60vh]">
          <Image
            src={profilePFP}
            alt="Profile Image"
            className="object-cover"
          />
        </div>
        <div className="ml-[70vh] text-left h-[60vh]">
          <h1>Dot Dager</h1>
          <h2>Senior Software Developer/influencer/musico/filosofo</h2>
          <div className="flex flex-row"></div>
          <p>{`C# <3`}</p>

          <ButtonHome classname="w-[25vh] bg-black">
            <span>Sigueme aquí</span>
          </ButtonHome>
          <ButtonHome classname="w-[25vh ml-4 bg-black">
            <span>Cantactame</span>
          </ButtonHome>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
