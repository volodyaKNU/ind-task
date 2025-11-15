import React, { useEffect, useRef, useState, type FC, type JSX } from "react";
import GlareHover from "./GlareHover";

interface FlipCardProps {
  front: JSX.Element;
  classname?: string;
  back: JSX.Element;
}

const FlipCard: FC<FlipCardProps> = ({ classname, back, front }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    if (isFlipped) {
      timeoutRef.current = setTimeout(() => {
        setIsFlipped(false);
      }, 5000);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isFlipped && !isHovered) {
      timeoutRef.current = setTimeout(() => {
        setIsFlipped(false);
      }, 5000);
    } else if (!isFlipped && timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [isFlipped, isHovered]);

  return (
    <GlareHover className="!rounded-4xl">
      <div
        className={`relative w-[300px] h-[250px] md:w-[350px] md:h-[270px] lg:w-[400px] lg:h-[320px] xl:w-[500px] xl:h-[452px] transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        } ${classname}`}
        onClick={handleFlip}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute  max-w-[500px] h-full rounded-4xl backface-hidden flex flex-col justify-center items-center gap-3 lg:gap-8 text-[#060010] backdrop-blur-xl p-3 lg:p-20 border-1  bg-white/5 border-[#625970]  ">
          {front}
        </div>

        <div className="absolute backface-hidden rotate-y-180 w-full h-full max-w-[500px] rounded-4xl  flex flex-col justify-center items-center gap-6 lg:gap-8 text-[#060010] backdrop-blur-xl p-3 lg:p-20 border-1  bg-white/5 border-[#625970]  ">
          {back}
        </div>

        <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .rotate-x-180 {
          transform: rotateX(180deg);
        }

        @keyframes flip {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(180deg);
          }
        }
      `}</style>
      </div>
    </GlareHover>
  );
};

export default FlipCard;
