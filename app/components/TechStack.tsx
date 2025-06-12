import { MarqueeLeft, MarqueeRight } from "@/components/ui/Marquee";
import FadeContent from "@/components/ui/FadeContent";
import { CircleText } from "@/components/ui/circle-text";
import Logos from "../Logos";

const TechStack = () => {
  const arr = [
    Logos.react,
    Logos.tailwindcss,
    Logos.javascript,
    Logos.nextjs,
    Logos.html,
    Logos.express,
  ];
  const arr2 = [Logos.git, Logos.java, Logos.python, Logos.mysql, Logos.nodejs];
  return (
    <div className="py-12 flex flex-col">
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="text-center mb-12">
          <CircleText text="Tech Stack" />
        </div>
      </FadeContent>
      <MarqueeLeft>
        {arr.map((Logo, index) => (
          <div
            key={index}
            className="relative h-full w-fit mx-[4rem] flex items-center justify-start"
          >
            <Logo />
          </div>
        ))}
      </MarqueeLeft>
      <MarqueeRight>
        {arr2.map((Logo, index) => (
          <div
            key={index}
            className="relative h-full w-fit mx-[4rem] flex items-center justify-start"
          >
            <Logo />
          </div>
        ))}
      </MarqueeRight>
    </div>
  );
};

export default TechStack;
