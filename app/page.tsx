/** @format */
"use client";
import Image from "next/image";

import AnimatedContent from "@/components/ui/animated-content";
import DecryptedText from "@/components/ui/decrypted-text";
import { Meteors } from "@/components/magicui/meteors";
import GlassIcons from "@/components/ui/GlassIcons";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  IconCircleFilled,
  IconHome,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";

import About from "./components/About";
import Education from "./components/Education";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";

export default function Home() {
  const navItems = [
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Education",
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
        <About />
        <Education />
        <TechStack />
        <Projects />
      </main>
    </>
  );
}
