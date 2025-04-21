import React, { useEffect } from "react";
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
import portfolio from './PortfolioSite_1.png'
// import { Carousel } from "flowbite-react";
// import '../../node_modules/flowbite/dist/flowbite.css';
import useEmblaCarousel from 'embla-carousel-react'


function HomePage() {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])


    return (
        <div>
            <div className="flex md:flex-row md:justify-evenly items-center m-20">
                <img src={headshot} className="homepage-headshot" />

                <div className="flex flex-col justify-evenly">
                    <p className="text-xl text-emerald-200 text-center" >About me</p>
                    <p className="text-base text-white m-5" >

                        I'm a passionate Computer Engineering student at the University of Waterloo. I'm interested in designing software and hardware for applications that allow for better connection between the physical and technological world.
                        <br /><br />
                        I've worked with web development, live data processing, and embedded development with STM32 and Arduino .
                        <br /><br />
                        In my spare time, I love working on my personal projects, painting and eating good food.😊


                    </p>

                    <div className="flex md:flex-row md:justify-evenly">
                        <img src={linkedin_logo} className="homepage-social-icon" />
                        <img src={github_logo} className="homepage-social-icon" />
                        <img src={insta_logo} className="homepage-social-icon" />
                    </div>
                </div>
            </div>

            <div className="flex md:flex-col md:justify-evenly items-center m-20 bg-emerald-200 p-8">

                <p className="text-xl text-teal-900 text-center">skills</p>

                <div className="flex md:flex-row w-xl justify-evenly">
                    <ul className="list-disc list-inside">
                        <li>heere</li>
                        <li>heere</li>
                    </ul>
                    <ul className="list-disc list-inside">
                        <li>heere</li>
                        <li>heere</li>
                    </ul>
                </div>

                <div className="flex md:flex-row justify-evenly w-xl p-5">
                    <img src={html_logo} className="homepage-skill-icon" />
                    <img src={css_logo} className="homepage-skill-icon" />
                    <img src={js_logo} className="homepage-skill-icon" />
                    <img src={cpp_logo} className="homepage-skill-icon" />
                    <img src={python_logo} className="homepage-skill-icon" />
                </div>

            </div>
            {/* 
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-20">
                <Carousel>
                    <img src={RR_project} className="w-auto h-full mx-auto" />
                    <img src={alertcase_project} className="w-auto h-full mx-auto" />
                    <img src={windsorhousing_project} className="w-auto h-full mx-auto" />
                    <img src={clipboard_project} className="w-auto h-full mx-auto" />
                    <img src={portfolio} className="w-auto h-full mx-auto" />
                </Carousel>
            </div> */}

            <div className="embla m-20 heigh" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide h-100 w-auto flex flex-row justify-center">
                        <img src={RR_project} className="w-auto h-auto" />
                    </div>
                    <div className="embla__slide h-100 w-auto flex flex-row justify-center">
                        <img src={alertcase_project} className="w-auto h-auto" />
                    </div>
                    <div className="embla__slide h-100 w-auto flex flex-row justify-center">
                        <img src={windsorhousing_project} className="w-auto h-auto" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage;