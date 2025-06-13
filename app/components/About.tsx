import profilepic from "@/assets/profile-photo.svg";
import { TerminalDemo } from "./Terminal";
import TrueFocus from "@/components/ui/true-focus";
import ProfileCard from "@/components/ui/ProfileCard";
import pattern from "@/assets/pattern.svg";
import AnimatedContent from "@/components/ui/animated-content";
import Image from "next/image";
import FadeContent from "@/components/ui/FadeContent";
import { Cover } from "@/components/ui/cover";

const About = () => {
  return (
    <div className="flex justify-around items-center">
      <div className="flex flex-col gap-2 md:gap-4 items-center justify-center md:items-start">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <a className="text-xl sm:text-3xl md:text-5xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Reyhan Putra Syailendra
          </a>
        </AnimatedContent>
        <div className="flex gap-4 items-center">
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <div className="text-sm hidden md:block md:text-xl text-white md:font-bold">
              <Cover>Fullstack-Developer, Machine Learning Enthusiast</Cover>
            </div>
            <div className="text-xs md:hidden md:text-xl text-white md:font-bold text-center">
              <Cover>Fullstack-Developer, ML Enthusiast</Cover>
            </div>
            <div className="sm:hidden w-fit py-8">
              <TrueFocus
                sentence="Innovation Collaboration Creativity"
                manualMode={false}
                blurAmount={5}
                borderColor="red"
                animationDuration={2}
                pauseBetweenAnimations={1}
              />
            </div>
          </AnimatedContent>
        </div>
        <div className="sm:hidden mx-auto -mt-8 relative">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <Image
              src={profilepic}
              alt="Profile Picture"
              className="md:w-[32rem] w-[20rem] drop-shadow-md"
            />
          </AnimatedContent>
        </div>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <div className="sm:hidden -mt-24 z-20 max-w-xs">
            <TerminalDemo />
          </div>
        </AnimatedContent>

        <div className="hidden md:block">
          <TerminalDemo />
          <div className="w-fit py-8 md:py-4">
            <TrueFocus
              sentence="Innovation Collaboration Creativity"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <ProfileCard
            handle="reyhanputra"
            contactText="Contact"
            avatarUrl={profilepic.src}
            showUserInfo={true}
            enableTilt={true}
            iconUrl={pattern.src}
            grainUrl={pattern.src}
            onContactClick={() =>
              (window.location.href = "mailto:reyhanputra4846@gmail.com")
            }
          />
        </FadeContent>
      </div>
    </div>
  );
};

export default About;
