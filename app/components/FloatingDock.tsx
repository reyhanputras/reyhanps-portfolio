/** @format */
"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconFileCv,
  IconLibraryPhoto,
  IconPresentation,
  IconSend,
  IconSparkles,
  IconUserCircle,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockUI() {
  const links = [
    {
      title: "About",
      icon: (
        <IconUserCircle className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: "#",
    },

    {
      title: "Resume",
      icon: (
        <IconFileCv className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: "#",
    },
    {
      title: "Projects",
      icon: (
        <IconPresentation className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: "#",
    },
    {
      title: "Skills",
      icon: (
        <IconSparkles className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: "#",
    },
    {
      title: "Gallery",
      icon: (
        <IconLibraryPhoto className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: "#",
    },

    {
      title: "Send Message",
      icon: (
        <IconSend className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: "#",
    },
  ];
  return (
    <div className='flex items-center justify-center w-full'>
      <FloatingDock items={links} />
    </div>
  );
}
