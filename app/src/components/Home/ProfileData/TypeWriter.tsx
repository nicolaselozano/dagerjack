import { useEffect, useState } from "react";

const Typewriter = ({sentences,flashSenteces}) => {
  const phrases = sentences;
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [reset, setReset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const isQuickErase = flashSenteces.includes(currentPhrase);
    const typingSpeed = Math.random() * 150 + 50;
    const eraseSpeed = isQuickErase ? 50 : Math.random() * 150 + 50;

    const interval = setInterval(() => {
      if (isPaused) {
        return;
      }

      if (isTyping) {
        if (index < currentPhrase.length) {
          setDisplayText((prev) => prev + currentPhrase[index]);
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsPaused(true);
          setCursorVisible(false);
          setTimeout(() => {
            setIsTyping(false);
            setCursorVisible(true);
            setIsPaused(false);
          }, Math.random() * (isQuickErase ? 0: 20000));
        }
      } else {
        if (index > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setIndex((prevIndex) => prevIndex - 1);
        } else {
          const nextPhraseIndex = (currentPhraseIndex + Math.floor(Math.random() * phrases.length)) % phrases.length;
          if(reset >= 3){
            setReset(0);
            setCurrentPhraseIndex(0);
            setIsTyping(true);
            return;
          }
          setCurrentPhraseIndex(nextPhraseIndex);
          setReset(reset + 1);
          setIsTyping(true);
        }
      }
    }, isTyping ? typingSpeed : eraseSpeed);

    return () => clearInterval(interval);
  }, [isTyping, index, isPaused, currentPhraseIndex]);

  return (
    <h1 className="text-4xl font-bold text-white inline-block">
      {displayText}
      {cursorVisible && (
        <span className="border-r-4 border-white animate-blink"></span>
      )}
    </h1>
  );
};

export default Typewriter;
