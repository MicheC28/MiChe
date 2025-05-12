import { useEffect } from "react";
import headshot from './headshot.noback.png';
import github_logo from './github_logo.png';
import linkedin_logo from './linkedin-logo-png-2026.png';
import insta_logo from './instagram_logo.png';
import html_logo from './html5_logo.png';
import cpp_logo from './cpp_logo.png';
import css_logo from './css3_logo.png';
import python_logo from './python_logo.png';
import js_logo from './js_logo.png';
import RR_project from './RainyRiches.png';
import clipboard_project from './digitalClipboard.png';
import alertcase_project from './AlertCase2.png';
import windsorhousing_project from './windsor.jpeg';
import cs_logo from './cs_logo.png';
import react_logo from './react_logo.png';
import angular_logo from './angular_logo.png';
import ts_logo from './ts_logo.png';
import tailwind_logo from './tailwind_logo.svg';
import useEmblaCarousel from 'embla-carousel-react'
import Marquee from "react-fast-marquee";
import { TypingAnimation } from "../../components/magicui/typing-animation";


type HomePageProps = {
    className?: string;
}

function HomePage({ className }: HomePageProps) {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    return (
        <div>
            <div className="relative flex flex-col z-20 gap-y-5">
                <div className="md:h-15 h-20"></div>

                <div className="flex flex-col justify-evenly items-center mx-10 md:mx-40 gap-y-5">

                    <div className=" bg-black/60 p-6 rounded-xl w-full flex flex-col justify-center items-center">
                        <div className="flex flex-col md:flex-row justify-center items-center">
                            <img src={headshot} className="w-100" />

                            <div className="md:w-90">
                                <TypingAnimation className="text-2xl text-rose-300 font-bold">Michelle Chen</TypingAnimation>
                                <TypingAnimation className="text-white text-base"> Computer Engineering @UWaterloo</TypingAnimation>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col justify-evenly  bg-black/60 p-6 rounded-xl w-full">
                        <p className="text-xl text-emerald-200 text-center font-bold" >About me</p>
                        <p className="text-base text-white m-5" >

                            I'm a passionate Computer Engineering student at the University of Waterloo. I'm interested in designing software and hardware for applications that allow for better connection between the physical and technological world.
                            <br /><br />
                            I've worked with fullstack development, live data processing, and embedded development with STM32 and Arduino .
                            <br /><br />
                            In my spare time, I love working on my personal projects, painting and eating good food. If you're interested in art too, check out the <b>MiChe</b> tab!
                        </p>

                        <div className="flex md:flex-row flex-col justify-evenly md:gap-x-5 gap-x-0 gap-y-5">
                            <a href="somethere" className="border-4 border-teal-950 bg-teal-950 hover:border-emerald-200 hover:bg-emerald-200 p-2 rounded-xl transition duration-200 flex flex-row justify-center">
                                <img src={linkedin_logo} className="homepage-social-icon" />
                            </a>

                            <a href="somethere" className="bg-teal-950 border-4 border-teal-950 hover:border-emerald-200 hover:bg-emerald-200 p-2 rounded-xl transition duration-200 flex flex-row justify-center">
                                <img src={github_logo} className="homepage-social-icon" />
                            </a>

                            <a href="somethere" className="border-4 bg-teal-950 border-teal-950 hover:border-emerald-200 hover:bg-emerald-200 p-2 rounded-xl transition duration-200 flex flex-row justify-center">
                                <img src={insta_logo} className="homepage-social-icon" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:justify-evenly items-center mx-10 md:mx-40 bg-black/60 p-8 rounded-xl gap-y-5">

                    <p className="text-xl text-emerald-200 text-center font-bold">Skills</p>


                    <ul className="list-disc list-inside text-white break-words block text-wrap">
                        <li className="break-words whitespace-normal"><b>Languages</b>: C++, C#, Python, HTML/CSS, Javascript/Typescript, SQL, RISC-V, MatLab</li>
                        <li className="break-words whitespace-normal"><b>Libraries/Frameworks</b>: ASP.NET, React.js, Angular.js, Tailwind CSS, Flowbite, MagicUI, scikit-learn, Pandas, Matplotlib  </li>
                        <li className="break-words whitespace-normal"><b>Firmware</b>: STM, Arduino, I2C, ADC/DAC, DMA</li>
                    </ul>

                    <div className="">
                        <Marquee gradient={true} gradientColor="#001B20" autoFill={true} gradientWidth={100} className="w-full" >
                            <div className="flex flex-row">
                                <div>
                                    <img src={css_logo} className="size-20" />
                                </div>
                                <div>
                                    <img src={html_logo} className="size-20" />
                                </div>
                                <div>
                                    <img src={cpp_logo} className="size-20" />
                                </div>
                                <div>
                                    <img src={python_logo} className="size-20" />
                                </div>
                                <div>
                                    <img src={js_logo} className="size-20" />
                                </div>
                                <div>
                                    <img src={cs_logo} className="size-20" />
                                </div>
                                <div>
                                    <img src={react_logo} className="size-20" />
                                </div>
                                <div>
                                    <img src={angular_logo} className="size-20" />
                                </div>
                                <div>
                                    <img src={ts_logo} className="size-20" />
                                </div>
                                <div>
                                    <img src={tailwind_logo} className="size-20" />
                                </div>
                            </div>
                        </Marquee>

                    </div>


                </div>


                <div className="flex flex-col justify-evenly mx-10 md:mx-40 gap-y-5">
                    <p className="text-xl text-center text-emerald-200 bg-black/60 p-4 rounded-xl font-bold">Projects</p>

                    <div className="embla__viewport rounded-xl heigh" ref={emblaRef}>
                        <div className="embla__container hover:cursor-grab">
                            <div className="embla__slide h-100 w-auto flex flex-row justify-center ">

                                <a href="/projects/rainyriches" className="homepage-carousel-link w-fit h-fit relative">
                                    <img src={RR_project} className="w-auto h-auto rounded-xl" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-70 bg-black transition duration-300 hover:border-2 border-emerald-200 rounded-xl">
                                        <p className="text-white opacity-100 text-xl text-center ">
                                            Rainy Riches Game
                                        </p>
                                    </div>

                                </a>

                            </div>



                            <div className="embla__slide h-100 w-auto flex flex-row justify-center ">
                                <a href='/projects/alertingmedicationcase' className="homepage-carousel-link w-fit h-fit relative">
                                    <img src={alertcase_project} className="w-auto h-auto rounded-xl" />

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-70 bg-black transition duration-300 hover:border-2 border-emerald-200 rounded-xl">
                                        <p className="text-white opacity-100 text-xl text-center ">
                                            Alerting Medication Case
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div className="embla__slide h-100 w-auto flex flex-row justify-center ">
                                <a href="/projects/digitalclipboard" className="homepage-carousel-link w-fit h-fit relative">
                                    <img src={clipboard_project} className="w-auto h-auto rounded-xl" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-70 bg-black transition duration-300 hover:border-2 border-emerald-200 rounded-xl">
                                        <p className="text-white opacity-100 text-xl text-center ">
                                            Digital Clipboard Extension
                                        </p>
                                    </div>

                                </a>

                            </div>

                            <div className="embla__slide h-100 w-auto flex flex-row justify-center">

                                <a href='/projects/windsorhousing' className="homepage-carousel-link w-fit h-fit relative ">
                                    <img src={windsorhousing_project} className="w-full xl h-auto p-0 rounded-xl" />

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

                <div className="mx-10 md:mx-40  bg-black/60 p-16 rounded-xl flex flex-col justify-evenly gap-y-5">
                    <p className="text-xl text-emerald-200 text-center font-bold">Work Experience</p>

                    <ol className="relative border-s border-teal-900 dark:border-emerald-200">
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-emerald-200 rounded-full mt-1.5 -start-1.5 border border-teal-900"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-emerald-200">Jan-Apr 2025</time>
                            <h3 className="text-lg font-semibold text-white">Software Developer Co-op @ Rocket Innovation Studio</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                Worked on backend development using C# and ASP.NET Core. Implemented JWT authentication and custom role-based access control with Auth0. Refactored API endpoints to use async programming and updated 20+ comprehensive unit tests using MSTest, xUnit, and NSubstitute. Participated in simple and blue-green production deployments with CI/CD pipelines in Azure DevOps while collaborating in an Agile environment.
                            </p>

                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-emerald-200 rounded-full mt-1.5 -start-1.5 border border-teal-900"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-emerald-200">May-Aug 2024</time>
                            <h3 className="text-lg font-semibold text-white">Research Assistant @ Pearl Sullivan Engineering IDEAs Clinic</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Designed and implemented real-time audio signal processing systems using STM32 microcontrollers, utilizing ADC with DMA, timers, and I2C to capture and transmit microphone signals. Handled and processed large-scale sensor data streams using Pandas and Matplotlib, applying low-pass and moving average filters to denoise live data with 80% noise reduction.</p>

                        </li>
                        <li className="ms-4">
                            <div className="absolute w-3 h-3 bg-emerald-200 rounded-full mt-1.5 -start-1.5 border border-teal-900"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-emerald-200">Jun-Aug 2022</time>
                            <h3 className="text-lg font-semibold text-white">Line Cook @ Boston Pizza</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Played Papa's Pizzeria IRL.</p>

                        </li>
                    </ol>
                </div>

                <div className="h-15"></div>
            </div>
        </div>
    )
}

export default HomePage;