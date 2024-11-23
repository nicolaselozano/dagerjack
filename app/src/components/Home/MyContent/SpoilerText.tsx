import React, { useState } from "react";

const SpoilerText: React.FC<{ spoilerContent: string }> = ({ spoilerContent }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const toggleSpoiler = () => {
    setIsRevealed(!isRevealed);
  };

  return (
    <div
      onClick={toggleSpoiler}
      className={`relative cursor-pointer inline-block rounded transition-colors duration-300 ${
        isRevealed ? "bg-transparent" : "bg-gray-800 text-gray-800"
      }`}
    >
      <span
        className={`block ${
          isRevealed ? "text-black" : "text-transparent"
        }`}
      >
        {spoilerContent}
      </span>
      {!isRevealed && (
        <span className="absolute inset-0 bg-black opacity-50 rounded"></span>
      )}
    </div>
  );
};

export default SpoilerText;
