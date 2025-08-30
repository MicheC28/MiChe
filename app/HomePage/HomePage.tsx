import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { TypingAnimation } from "../../components/magicui/typing-animation";

import headshot from "../images/Socials/headshot.noback.png";
import github_logo from "../images/Socials/github_logo.png";
import linkedin_logo from "../images/Socials/linkedin-logo-png-2026.png";

import RR_project from "../images/HomePage/RainyRiches_resized.png";
import clipboard_project from "../images/HomePage/digitalClipboard_resized.png";
import alertcase_project from "../images/HomePage/AlertCase2_resized.png";
import windsorhousing_project from "../images/HomePage/windsor_resized.jpeg";

import MiChe_CityOfRoses from "../images/HomePage/MiChe_CityOfRoses_resized.jpg";
import MiChe_ColourVision from "../images/HomePage/MiChe_ColourVision_resized.jpg";
import MiChe_WallMount from "../images/HomePage/MiChe_Iteration1_Wall-Mount_resized.jpg";

type HomePageProps = {
  className?: string;
};

function HomePage({ className }: HomePageProps) {
  const [techEmblaRef, techEmblaApi] = useEmblaCarousel({ loop: true });
  const [artEmblaRef, artEmblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (techEmblaApi) {
      console.log(techEmblaApi.slideNodes()); // Access API
    }
  }, [techEmblaApi]);

  useEffect(() => {
    if (artEmblaApi) {
      console.log(artEmblaApi.slideNodes()); // Access API
    }
  }, [artEmblaApi]);

  return (
    <div>
      <div className="relative flex flex-col z-20 gap-y-5">
        <div className="md:h-15 h-20"></div>

        <div className="flex flex-col justify-evenly items-center mx-10 md:mx-50 gap-y-5  bg-black/60 p-8 rounded-xl">
          <div className=" bg-black/60 p-6  mx-10 md:mx-50 rounded-xl w-full flex flex-col justify-center items-center">
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <img src={headshot} className="w-100" />

              <div className="md:w-90 flex flex-col justify-center gap-y-5">
                <div className="flex flex-col">
                  <TypingAnimation className="text-2xl text-rose-300 font-bold">
                    Michelle Chen
                  </TypingAnimation>
                  <TypingAnimation className="text-white text-base">
                    Computer Engineering @UWaterloo
                  </TypingAnimation>
                </div>
                <div className="flex flex-row gap-x-5">
                  <a
                    href="somethere"
                    className="border-4 border-teal-950 bg-teal-950 hover:border-emerald-200 hover:bg-emerald-200 p-2 rounded-xl transition duration-200 flex flex-row justify-center"
                  >
                    <img src={linkedin_logo} className="homepage-social-icon" />
                  </a>

                  <a
                    href="somethere"
                    className="bg-teal-950 border-4 border-teal-950 hover:border-emerald-200 hover:bg-emerald-200 p-2 rounded-xl transition duration-200 flex flex-row justify-center"
                  >
                    <img src={github_logo} className="homepage-social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:justify-evenly items-center mx-10 md:mx-50 bg-black/60 p-8 rounded-xl gap-y-5">
          <div className="mx-10 bg-black/60 md:p-16 p-5 rounded-xl flex flex-col justify-evenly gap-y-5 w-full">
            <p className="text-xl text-emerald-200 text-center font-bold">
              Work Experience
            </p>

            <ol className="relative border-s border-teal-900 dark:border-emerald-200">
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-emerald-200 rounded-full mt-1.5 -start-1.5 border border-teal-900"></div>
                <time className="mb-1 text-sm font-normal leading-none text-emerald-200">
                  Jan-Apr 2025
                </time>
                <h3 className="text-lg font-semibold text-white">
                  Software Developer Co-op @ Rocket Innovation Studio
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Worked on backend development using C# and ASP.NET Core.
                  Implemented JWT authentication and custom role-based access
                  control with Auth0. Refactored API endpoints to use async
                  programming and updated 20+ comprehensive unit tests using
                  MSTest, xUnit, and NSubstitute. Participated in simple and
                  blue-green production deployments with CI/CD pipelines in
                  Azure DevOps while collaborating in an Agile environment.
                </p>
              </li>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-emerald-200 rounded-full mt-1.5 -start-1.5 border border-teal-900"></div>
                <time className="mb-1 text-sm font-normal leading-none text-emerald-200">
                  May-Aug 2024
                </time>
                <h3 className="text-lg font-semibold text-white">
                  Research Assistant @ Pearl Sullivan Engineering IDEAs Clinic
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Designed and implemented real-time audio signal processing
                  systems using STM32 microcontrollers, utilizing ADC with DMA,
                  timers, and I2C to capture and transmit microphone signals.
                  Handled and processed large-scale sensor data streams using
                  Pandas and Matplotlib, applying low-pass and moving average
                  filters to denoise live data with 80% noise reduction.
                </p>
              </li>
              <li className="ms-4">
                <div className="absolute w-3 h-3 bg-emerald-200 rounded-full mt-1.5 -start-1.5 border border-teal-900"></div>
                <time className="mb-1 text-sm font-normal leading-none text-emerald-200">
                  Jun-Aug 2022
                </time>
                <h3 className="text-lg font-semibold text-white">
                  Line Cook @ Boston Pizza
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Played Papa's Pizzeria IRL.
                </p>
              </li>
            </ol>
          </div>

          <div className="mx-10 bg-black/60 md:p-16 p-5 rounded-xl flex flex-col justify-evenly gap-y-5 w-full">
            <p className="text-xl text-emerald-200 text-center font-bold">
              Skills
            </p>

            <ul className="list-disc list-inside text-white break-words block text-wrap">
              <li className="break-words whitespace-normal">
                <b>Languages</b>: C++, C#, Python, HTML/CSS,
                Javascript/Typescript, SQL, RISC-V, MatLab
              </li>
              <li className="break-words whitespace-normal">
                <b>Libraries/Frameworks</b>: ASP.NET, React.js, Angular.js,
                Tailwind CSS, Flowbite, MagicUI, scikit-learn, Pandas,
                Matplotlib{" "}
              </li>
              <li className="break-words whitespace-normal">
                <b>Firmware</b>: STM, Arduino, I2C, ADC/DAC, DMA
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-evenly mx-10 md:mx-50 gap-y-8 p-8 rounded-xl  bg-black/60">
          <div className="bg-black/60 rounded-xl">
            <p className="text-xl text-center text-emerald-200 p-4 rounded-xl font-bold">
              Tech Projects
            </p>
            <p className="text-md text-white text-center">
              Check out{" "}
              <a
                href="/projects"
                className="hover:text-emerald-200 italic underline"
              >
                Projects
              </a>{" "}
              tab to see more!
            </p>
            <br />

            <div
              className="embla__viewport rounded-xl cursor-grab"
              ref={techEmblaRef}
            >
              <div className="embla__container ">
                <div className="embla__slide h-100 w-auto flex flex-row justify-center">
                  <a
                    href="/projects/rainyriches"
                    className="homepage-carousel-link w-fit h-fit relative cursor-grab"
                  >
                    <img
                      src={RR_project}
                      className="w-auto h-auto rounded-xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-70 bg-black transition duration-300 hover:border-2 border-emerald-200 rounded-xl">
                      <p className="text-white opacity-100 text-xl text-center ">
                        Rainy Riches Game
                      </p>
                    </div>
                  </a>
                </div>

                <div className="embla__slide h-100 w-auto flex flex-row justify-center ">
                  <a
                    href="/projects/alertingmedicationcase"
                    className="homepage-carousel-link w-fit h-fit relative cursor-grab"
                  >
                    <img
                      src={alertcase_project}
                      className="w-auto h-auto rounded-xl"
                    />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-70 bg-black transition duration-300 hover:border-2 border-emerald-200 rounded-xl">
                      <p className="text-white opacity-100 text-xl text-center ">
                        Alerting Medication Case
                      </p>
                    </div>
                  </a>
                </div>

                <div className="embla__slide h-100 w-auto flex flex-row justify-center ">
                  <a
                    href="/projects/digitalclipboard"
                    className="homepage-carousel-link w-fit h-fit relative cursor-grab"
                  >
                    <img
                      src={clipboard_project}
                      className="w-auto h-auto rounded-xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-70 bg-black transition duration-300 hover:border-2 border-emerald-200 rounded-xl">
                      <p className="text-white opacity-100 text-xl text-center ">
                        Digital Clipboard Extension
                      </p>
                    </div>
                  </a>
                </div>

                <div className="embla__slide h-100 w-auto flex flex-row justify-center">
                  <a
                    href="/projects/windsorhousing"
                    className="homepage-carousel-link w-fit h-fit relative cursor-grab"
                  >
                    <img
                      src={windsorhousing_project}
                      className="w-full xl h-auto p-0 rounded-xl"
                    />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-70 bg-black transition duration-300 hover:border-2 border-emerald-200 rounded-xl">
                      <p className="text-white opacity-100 text-xl">
                        Windsor Housing Predictor
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/60 rounded-xl">
            <p className="text-xl text-center text-rose-300 p-4 rounded-xl font-bold">
              Art Projects
            </p>
            <p className="text-md text-center text-white  rounded-xl">
              Check out{" "}
              <a href="/miche" className=" hover:text-rose-300 underline">
                MiChe
              </a>{" "}
              tab to see more!
            </p>
            <br />

            <div
              className="embla__viewport rounded-xl cursor-grab"
              ref={artEmblaRef}
            >
              <div className="embla__container ">
                <div className="embla__slide h-100 w-auto flex flex-row justify-center">
                  <a
                    href="/miche/"
                    className="homepage-carousel-link w-fit h-fit relative cursor-grab"
                  >
                    <img
                      src={MiChe_CityOfRoses}
                      className="w-auto h-auto rounded-xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-70 bg-black transition duration-300 hover:border-2 border-rose-300 rounded-xl">
                      <p className="text-white opacity-100 text-xl text-center italic ">
                        City of Roses - 2023
                      </p>
                    </div>
                  </a>
                </div>

                <div className="embla__slide h-100 w-auto flex flex-row justify-center">
                  <a
                    href="/miche/"
                    className="homepage-carousel-link w-fit h-fit relative cursor-grab"
                  >
                    <img
                      src={MiChe_ColourVision}
                      className="w-auto h-auto rounded-xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-70 bg-black transition duration-300 hover:border-2 border-rose-300 rounded-xl">
                      <p className="text-white opacity-100 text-xl text-center italic ">
                        Colour Vision - 2020
                      </p>
                    </div>
                  </a>
                </div>

                <div className="embla__slide h-100 w-auto flex flex-row justify-center">
                  <a
                    href="/miche/"
                    className="homepage-carousel-link w-fit h-fit relative cursor-grab"
                  >
                    <img
                      src={MiChe_WallMount}
                      className="w-auto h-auto rounded-xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-70 bg-black transition duration-300 hover:border-2 border-rose-300 rounded-xl">
                      <p className="text-white opacity-100 text-xl text-center italic ">
                        Wall Mount - 2023
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-15"></div>
      </div>
    </div>
  );
}

export default HomePage;
