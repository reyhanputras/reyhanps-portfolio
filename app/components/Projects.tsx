import FadeContent from "@/components/ui/FadeContent";
import { CircleText } from "@/components/ui/circle-text";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Logos from "../Logos";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import ProjectLogos from "./ProjectLogos";

const Projects = () => {
  return (
    <div className="py-12">
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="text-center mb-12">
          <CircleText text="My Projects" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <SpotlightCard
            className="max-w-96"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="flex flex-col justify-between h-full items-center">
              <div className="flex flex-col gap-2 items-center justify-center">
                <h3 className="font-bold text-3xl pb-4">Solve App</h3>
                <p className="text-xs">Technology Used</p>
                <div className="flex flex-wrap justify-center gap-2 py-2 w-full">
                  <div className="flex gap-2 items-center text-xs rounded-xl py-1 px-4 bg-gray-800 text-gray-200 font-medium">
                    <ProjectLogos.php />
                    PHP
                  </div>
                  <div className="flex gap-2 items-center text-xs rounded-xl py-1 px-4 bg-gray-800 text-gray-200 font-medium">
                    <ProjectLogos.laravel />
                    Laravel
                  </div>
                  <div className="flex gap-2 items-center text-xs rounded-xl py-1 px-4 bg-gray-800 text-gray-200 font-medium">
                    <ProjectLogos.javascript />
                    Javascript
                  </div>
                  <div className="flex gap-2 items-center text-xs rounded-xl py-1 px-4 bg-gray-800 text-gray-200 font-medium">
                    <ProjectLogos.tailwindcss />
                    TailwindCSS
                  </div>
                  <div className="flex gap-2 items-center text-xs rounded-xl py-1 px-4 bg-gray-800 text-gray-200 font-medium">
                    <ProjectLogos.mysql />
                    MySQL
                  </div>
                </div>
                <p className="text-center text-base leading-loose">
                  Solve is a web-based whistleblowing system designed
                  specifically for campus environments.
                </p>
              </div>
              <div className="pt-4">
                <InteractiveHoverButton className="font-normal text-sm">
                  view more
                </InteractiveHoverButton>
              </div>
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="max-w-96"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="flex flex-col justify-between h-full items-center">
              <div className="flex flex-col gap-2 items-center justify-center">
                <h3 className="font-bold text-3xl pb-4">Lost and Found</h3>
                <p className="text-xs">Technology Used</p>
                <div className="flex flex-wrap justify-center gap-2 py-2 w-full">
                  <div className="flex gap-2 items-center text-xs rounded-xl py-1 px-4 bg-gray-800 text-gray-200 font-medium">
                    <ProjectLogos.nextjs />
                    NextJS
                  </div>
                  <div className="flex gap-2 items-center text-xs rounded-xl py-1 px-4 bg-gray-800 text-gray-200 font-medium">
                    <ProjectLogos.react />
                    React
                  </div>
                  <div className="flex gap-2 items-center text-xs rounded-xl py-1 px-4 bg-gray-800 text-gray-200 font-medium">
                    <ProjectLogos.javascript />
                    Javascript
                  </div>
                  <div className="flex gap-2 items-center text-xs rounded-xl py-1 px-4 bg-gray-800 text-gray-200 font-medium">
                    <ProjectLogos.tailwindcss />
                    TailwindCSS
                  </div>
                  <div className="flex gap-2 items-center text-xs rounded-xl py-1 px-4 bg-gray-800 text-gray-200 font-medium">
                    <ProjectLogos.mysql />
                    MySQL
                  </div>
                  <div className="flex gap-2 items-center text-xs rounded-xl py-1 px-4 bg-gray-800 text-gray-200 font-medium">
                    <ProjectLogos.vercel />
                    Vercel
                  </div>
                </div>
                <p className="text-center text-base leading-loose">
                  A dynamic platform that allows users to post and find lost
                  items with real-time chat support.
                </p>
              </div>
              <div className="pt-4">
                <a
                  href="https://github.com/reyhanputras/Lost-Foundv2"
                  target="_blank"
                >
                  <InteractiveHoverButton className="font-normal text-sm">
                    view more
                  </InteractiveHoverButton>
                </a>
              </div>
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="max-w-96"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="flex flex-col justify-between h-full items-center">
              <div className="flex flex-col gap-2 items-center justify-center">
                <h3 className="font-bold text-center text-3xl pb-4">
                  Subscriptions Tracker API
                </h3>
                <p className="text-xs">Technology Used</p>
                <div className="flex flex-wrap justify-center gap-2 py-2 w-full">
                  <div className="flex gap-2 items-center text-xs rounded-xl py-1 px-4 bg-gray-800 text-gray-200 font-medium">
                    <ProjectLogos.express />
                    Express
                  </div>
                  <div className="flex gap-2 items-center text-xs rounded-xl py-1 px-4 bg-gray-800 text-gray-200 font-medium">
                    <ProjectLogos.mongodb />
                    MongoDB
                  </div>
                  <div className="flex gap-2 items-center text-xs rounded-xl py-1 px-4 bg-gray-800 text-gray-200 font-medium">
                    <ProjectLogos.javascript />
                    Javascript
                  </div>
                </div>
                <p className="text-center text-base leading-loose">
                  A RESTful API built to manage and track multiple user
                  subscriptions in one place.
                </p>
              </div>
              <div className="pt-4">
                <a
                  href="https://github.com/reyhanputras/subscription-tracker-api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InteractiveHoverButton className="font-normal text-sm">
                    view more
                  </InteractiveHoverButton>
                </a>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </FadeContent>
    </div>
  );
};

export default Projects;
