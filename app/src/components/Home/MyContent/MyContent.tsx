import CardContent from "./CardContent";

import image1 from "../../../../public/content_2.gif";
import image2 from "../../../../public/content_3.gif";
import image3 from "../../../../public/content_1.gif";

import imagej1 from "../../../../public/imagej_1.jpg";
import imagej3 from "../../../../public/imagej_2.jpg";
import imagej2 from "../../../../public/imagej_3.png";

const MyContent: React.FC = () => {
  const cards = [
    {
      staticImage: imagej1,
      gifImage: image1.src,
      link: "https://www.youtube.com/@DotDager",
      altText: "Video 1",
      description: "Directos",
    },
    {
      staticImage: imagej2,
      gifImage: image2.src,
      link: "https://www.youtube.com/@DotDager",
      altText: "Video 2",
      description: "Parodias",
    },
    {
      staticImage: imagej3,
      gifImage: image3.src,
      link: "https://www.youtube.com/@DotDager",
      altText: "Video 3",
      description: "Desarrollo",
    },
  ];

  return (
    <div className="m-16 flex flex-row justify-center bg-display_menu p-10 rounded-lg shadow-lg">
      {cards.map((card, index) => (
        <div
          key={index}
          className="mx-7 bg-cards_bg rounded-lg p-4 hover:shadow-2xl hover:animate-breathe transition duration-300"
        >
          <CardContent {...card} />
        </div>
      ))}
    </div>
  );
};

export default MyContent;