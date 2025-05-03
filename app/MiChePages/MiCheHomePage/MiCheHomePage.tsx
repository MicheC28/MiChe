import micheLogo from "./MiChe_logo.jpg";
import { Card } from "flowbite-react";
import colourvision from "./MiChe_ColourVision.jpg";
import minis from "./MiChe_Mini_All.jpg";
import cityofroses from "./MiChe_CityOfRoses.jpg";
import iteration1 from "./MiChe_Iteration1_Wall-Mount.jpg";
import tempinst from "./MiChe_Temporary-Instance.jpg";
import { color } from "framer-motion";



export default function MiCheHomePage() {

    const paintings = [
        {
            imgAlt: "Four arcylic paintings of red flowers",
            imgSrc: minis,
            type: "Collection",
            title: "Minis Collection - 2024",
            quote: "test test"
        },

        {
            imgAlt: "",
            imgSrc: cityofroses,
            type: "Piece",
            title: "City of Roses - 2023",
            quote: "A love letter to my hometown."
        },

        {
            imgAlt: "",
            imgSrc: colourvision,
            type: "Piece",
            title: "Colour Vision - 2020",
            quote: "Colour to the horizon."
        },

        {
            imgAlt: "",
            imgSrc: iteration1,
            type: "Collection",
            title: "Iteration 1 Collection - 2023",
            quote: "Organic growth characterized with gold and flowing ink."
        },

        {
            imgAlt: "",
            imgSrc: tempinst,
            type: "Piece",
            title: "Temporary Instance - 2023",
            quote: "Made in a Moment."
        },
    ]


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


                {paintings.map((painting) => (
                    <Card
                        className="max-w-sm bg-rose-300 border-2 border-transparent hover:border-white transition duration-300 "
                        imgAlt={painting.imgAlt}
                        imgSrc={painting.imgSrc}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-rose-900">
                            {painting.title}
                        </h5>
                        <p className="font-normal text-gray-700 italic">
                            "{painting.quote}"
                        </p>

                        {
                            painting.type == "Collection" ?
                                <a className="p-3 bg-rose-900 rounded-xl text-center text-rose-300 font-bold hover:cursor-pointer hover:bg-rose-950 transition duration-300" href='#'>
                                    View Collection
                                </a> :
                                <a className="p-3 bg-rose-900 rounded-xl text-center text-rose-300 font-bold hover:cursor-pointer hover:bg-rose-950 transition duration-300" href='#'>
                                    View Piece
                                </a>
                        }

                    </Card>
                ))}

            </div>

        </div>
    )
}