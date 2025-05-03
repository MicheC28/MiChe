import micheLogo from "./MiChe_logo.jpg";
import { Card } from "flowbite-react";
import colourvision from "./MiChe_ColourVision.jpg";
import minis from "./MiChe_Mini_All.jpg";
import cityofroses from "./MiChe_CityOfRoses.jpg";
import iteration1 from "./MiChe_Iteration1_For-Gifting.jpg";
import tempinst from "./MiChe_Temporary-Instance.jpg";
import { color } from "framer-motion";



export default function MiCheHomePage() {


    return (
        <div className="z-10 relative flex flex-col gap-y-5">

            <div className="h-15"></div>

            <div className="mx-20 bg-black/60 flex flex-col gap-y-5 p-8 justify-evenly items-center rounded-xl">
                <p className="text-xl text-rose-300 font-bold">MiChe Art Collection</p>
                {/* <img className="w-20 rounded-xl" src={micheLogo} /> */}

                <p className="text-white text-base">
                    A vibrant haven where the canvas comes alive with an explosion of colors and the enchanting beauty of blossoms. Immerse yourself in a world where every stroke is a dance of hues, and each piece tells a unique story of emotions and expressions. All pieces by me, Michelle.
                </p>

                <img src={colourvision} className="md:w-2/5 rounded-xl border-6 border-rose-300" />
                <p className="text-sm italic text-gray-500">"Colour Vision", 2020. Acrylic on Canvas.</p>
            </div>

            <div className="mx-20 bg-black/60 rounded-xl flex md:flex-row flex-col gap-5 p-8 flex-wrap justify-center">
                <Card
                    className="max-w-sm bg-rose-300 border-none"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={minis}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-rose-900">
                        Minis Collection - 2024
                    </h5>
                    <p className="font-normal text-gray-700">
                        "Vibrant pieces the fit in the palm of your hand."
                    </p>

                    <a className="p-3 bg-rose-900 rounded-xl text-center text-rose-300 font-bold hover:cursor-pointer hover:bg-rose-950 transition duration-300" href='#'>
                        View Collection
                    </a>

                </Card>

                <Card
                    className="max-w-sm bg-rose-300 border-none"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={iteration1}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-rose-900">
                        Iteration 1 Collection - 2023
                    </h5>
                    <p className="font-normal text-gray-700 ">
                        "Organic growth characterized with gold and flowing ink."
                    </p>

                    <a className="p-3 bg-rose-900 rounded-xl text-center text-rose-300 font-bold hover:cursor-pointer hover:bg-rose-950 transition duration-300" href='#'>
                        View Collection
                    </a>
                </Card>

                <Card
                    className="max-w-sm bg-rose-300 border-none"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={cityofroses}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-rose-900">
                        City of Roses - 2023
                    </h5>
                    <p className="font-normal text-gray-700">
                        "A love letter to my hometown."
                    </p>
                    <a className="p-3 bg-rose-900 rounded-xl text-center text-rose-300 font-bold hover:cursor-pointer hover:bg-rose-950 transition duration-300" href='#'>
                        View Piece
                    </a>
                </Card>

                <Card
                    className="max-w-sm bg-rose-300 border-none"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={colourvision}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-rose-900">
                        Colour Vision - 2020
                    </h5>
                    <p className="font-normal text-gray-700">
                        "Colour to the horizon."
                    </p>
                    <a className="p-3 bg-rose-900 rounded-xl text-center text-rose-300 font-bold hover:cursor-pointer hover:bg-rose-950 transition duration-300" href='#'>
                        View Piece
                    </a>
                </Card>

                <Card
                    className="max-w-sm bg-rose-300 border-none"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={tempinst}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-rose-900">
                        Temporary Instance - 2023
                    </h5>
                    <p className="font-normal text-gray-700 ">
                        "Made in a moment."
                    </p>
                    <a className="p-3 bg-rose-900 rounded-xl text-center text-rose-300 font-bold hover:cursor-pointer hover:bg-rose-950 transition duration-300" href='#'>
                        View Piece
                    </a>
                </Card>
            </div>

        </div>
    )
}