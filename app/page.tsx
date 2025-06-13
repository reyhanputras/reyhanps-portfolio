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
  IconBookFilled,
  IconMessage,
  IconUser,
  IconSparkles,
  IconCode,
  IconCertificate,
  IconLibraryPhoto,
  IconPhoneFilled,
} from "@tabler/icons-react";

import About from "./components/About";
import Education from "./components/Education";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Gallery from "./components/Gallery";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const techRef = useRef(null);
  const projectRef = useRef(null);
  const certRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref: any) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const navItems = [
    {
      name: "About",
      click: () => scrollToSection(aboutRef),
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Education",
      click: () => scrollToSection(educationRef),
      icon: (
        <IconBookFilled className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Skills",
      click: () => scrollToSection(techRef),
      icon: (
        <IconSparkles className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Projects",
      click: () => scrollToSection(projectRef),
      icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Certificates",
      click: () => scrollToSection(certRef),
      icon: (
        <IconCertificate className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Gallery",
      click: () => scrollToSection(galleryRef),
      icon: (
        <IconLibraryPhoto className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      click: () => scrollToSection(contactRef),
      icon: (
        <IconPhoneFilled className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <>
      <div className="absolute left-12 hidden md:block">
        <Meteors number={20} className="right-0" />
      </div>
      <main className="p-12 md:pb-0 md:px-24 md:pt-24 relative">
        <FloatingNav navItems={navItems} />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={techRef}>
          <TechStack />
        </div>
        <div ref={projectRef}>
          <Projects />
        </div>
        <div ref={certRef}>
          <Certificates />
        </div>
        <div ref={galleryRef}>
          <Gallery />
        </div>
        <div ref={contactRef}>
          <ContactMe />
        </div>
        <Footer />
      </main>
    </>
  );
}
