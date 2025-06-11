/** @format */
"use client";
import Image from "next/image";
import profilepic from "@/assets/profile-photo.svg";
import { Cover } from "@/components/ui/cover";
import AnimatedContent from "@/components/ui/animated-content";
import DecryptedText from "@/components/ui/decrypted-text";
import { Meteors } from "@/components/magicui/meteors";
import { TerminalDemo } from "./components/Terminal";
import TrueFocus from "@/components/ui/true-focus";
import ProfileCard from "@/components/ui/ProfileCard";
import pattern from "@/assets/pattern.svg";

export default function Home() {
  return (
    <>
      <div className="absolute left-12 hidden md:block">
        <Meteors number={20} className="right-0" />
      </div>
      <main className="p-12 md:p-24">
        <div className="flex justify-around">
          <div className="flex flex-col gap-2 md:gap-4 items-center justify-center md:items-start">
            <a className="text-xl sm:text-3xl md:text-5xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
              <DecryptedText
                text="Reyhan Putra Syailendra"
                speed={100}
                maxIterations={30}
                animateOn="view"
                revealDirection="center"
              />
            </a>
            <div className="flex gap-4 items-center">
              <AnimatedContent
                distance={150}
                delay={300}
                direction="horizontal"
                reverse={true}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <div className="text-sm hidden md:block md:text-xl text-white md:font-bold">
                  <Cover>
                    Fullstack-Developer, Machine Learning Enthusiast
                  </Cover>
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
                delay={300}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <Image
                  src={profilepic}
                  alt="Profile Picture"
                  className="md:w-[32rem] w-[20rem] drop-shadow-md"
                />
              </AnimatedContent>
            </div>
            <div className="sm:hidden -mt-24 z-20 max-w-xs">
              <TerminalDemo />
            </div>

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
            <AnimatedContent
              distance={150}
              delay={300}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <ProfileCard
                handle="reyhanputra"
                contactText="Contact"
                avatarUrl={profilepic.src}
                showUserInfo={true}
                enableTilt={true}
                iconUrl={pattern.src}
                grainUrl={pattern.src}
                onContactClick={() => console.log("Contact clicked")}
              />
            </AnimatedContent>
          </div>
        </div>
        <div className="m-20 h-52"></div>
      </main>
    </>
  );
}
