import { FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaGithub } from "react-icons/fa";

const Follow = () => {
  return (
    <div className="bg-display_menu p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Sígueme en</h2>
      <div className="flex justify-around items-center space-x-6">
      <a
          href="https://github.com/MarianoVilla"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-breathe"
        >
          <FaGithub className="text-4xl hover:text-cards_bg transition-all duration-300" />
        </a>
        <a
          href="https://www.instagram.com/dager.32/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-breathe"
        >
          <FaInstagram className="text-4xl hover:text-cards_bg transition-all duration-300" />
        </a>
        <a
          href="https://www.youtube.com/@DotDager"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-breathe"
        >
          <FaYoutube className="text-4xl hover:text-cards_bg transition-all duration-300" />
        </a>
        <a
          href="https://twitter.com/Dager_32"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-breathe"
        >
          <FaTwitter className="text-4xl hover:text-cards_bg transition-all duration-300" />
        </a>
        <a
          href="https://www.tiktok.com/@elantrodedager"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-breathe"
        >
          <FaTiktok className="text-4xl hover:text-cards_bg transition-all duration-300" />
        </a>
      </div>
    </div>
  );
};

export default Follow;
