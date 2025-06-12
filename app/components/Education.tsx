import AnimatedContent from "@/components/ui/animated-content";
import { CircleText } from "@/components/ui/circle-text";
import edu1 from "@/assets/education1.png";
import edu2 from "@/assets/education2.png";
import { Compare } from "@/components/ui/compare";

const Education = () => {
  return (
    <div className="py-12 mt-12 flex justify-between">
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={true}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <div>
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
      </AnimatedContent>
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
        <div className="hidden lg:block p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
          <Compare
            secondImage={edu1.src}
            firstImage={edu2.src}
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[250px] w-[200px] md:h-[380px] md:w-[500px]"
            slideMode="hover"
          />
        </div>
      </AnimatedContent>
    </div>
  );
};

export default Education;
