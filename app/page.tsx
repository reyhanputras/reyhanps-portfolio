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
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  IconCircleFilled,
  IconHome,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";
import { IconBookmarksFilled } from "@tabler/icons-react";
import { Circle } from "lucide-react";
import { CircleText } from "@/components/ui/circle-text";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <>
      <div className="absolute left-12 hidden md:block">
        <Meteors number={20} className="right-0" />
      </div>
      <main className="p-12 md:p-24 relative">
        <FloatingNav navItems={navItems} />
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
        <div className="py-12 mt-12">
          <CircleText text="Education" />

          <div className="p-8">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-400"></span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Universitas Pendidikan Indonesia
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
                    GPA 3.91
                  </span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2022 - Present
                </time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Software Engineering
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  <svg
                    className="w-3.5 h-3.5 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>{" "}
                  Transkrip
                </a>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-400"></span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  SMK Negeri 1 Cimahi
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2019 - 2022
                </time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Software Engineering
                </p>
              </li>
            </ol>
          </div>
        </div>
      </main>
    </>
  );
}
