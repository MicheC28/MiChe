import { Lens } from "components/magicui/lens";
import MiCheBreadcrumb from "../MiChe_Breadcrumb/MiChe_Breadcrumb";
import bundles from "./MiChe_Mini_Bundles.jpg";
import exertion from "./MiChe_Mini_Exertion.jpg";
import growth from "./MiChe_Mini_Growth.jpg";
import shybloom from "./MiChe_Mini_Shy-Bloom.jpg";

export default function MiChe_MinisCollection() {
    return (

        <div className="relative z-10">
            <div className="h-30 md:h-10"></div>

            <div className="gap-y-5 flex flex-col">
                <MiCheBreadcrumb projectName="Minis Collection - 2023" />

                <div className="bg-black/60 mx-10 md:mx-40 rounded-xl p-8 gap-y-5 flex flex-col justify-evenly items-center">

                    <div className="flex flex-col md:flex-row gap-5 items-end justify-center">
                        <div className="md:w-1/5 gap-y-5 flex flex-col">
                            <Lens lensSize={170} zoomFactor={1.7} >
                                <img src={bundles} />
                            </Lens>
                            <p className="text-base italic text-slate-500 text-center">
                                "Bundles", 2023. Acrylic on canvas.
                            </p>
                        </div>


                        <div className="md:w-1/5 gap-y-5 flex flex-col">
                            <Lens lensSize={170} zoomFactor={1.7} >
                                <img src={shybloom} />
                            </Lens>
                            <p className="text-base italic text-slate-500 text-center">
                                "Shy Bloom", 2023. Acrylic on canvas.
                            </p>
                        </div>

                        <div className="md:w-1/5 gap-y-5 flex flex-col">
                            <Lens lensSize={170} zoomFactor={1.7} >
                                <img src={exertion} />
                            </Lens>
                            <p className="text-base italic text-slate-500 text-center">
                                "Exertion", 2023. Acrylic on canvas.
                            </p>
                        </div>

                        <div className="md:w-1/5 gap-y-5 flex flex-col">
                            <Lens lensSize={170} zoomFactor={1.7} >
                                <img src={growth} />
                            </Lens>
                            <p className="text-base italic text-slate-500 text-center">
                                "Growth", 2023. Acrylic on canvas.
                            </p>
                        </div>
                    </div>

                    <p className="text-white text-base md:mx-20">
                        "I made these pieces in my dorm room at 2 am on a Friday night while listening to a 2010s Bangers playlist on Spotify.
                        <br></br><br></br>
                        It's the second time I've picked up a paintbrush since I started university. It's been a while, but I still got it.
                        <br></br><br></br>
                        Nowadays, my mornings are filled with 7:30 am alarm clocks, 8 oz McDonald's brand coffees, and pleas to the ECE lords that they stop these 8:30s. Fast forward to lunch, and by lunch, I mean a 70-minute period where I speed walk to the nearest food place and inhale a serving of food.
                        <br></br><br></br>
                        Basically, my days are busy. I don't have the time I used to have to paint flowers. But this also means that any moment that I do get to paint is worth its weight in gold. I'm not sure how time can have weight, but let's just say it does. I mean, a 40-minute lecture at 8:30 hits much heavier than the same lecture at 2:30."
                        <br></br><br></br>
                        - MiChe
                    </p>



                </div>

            </div>

            <div className="h-15"></div>


        </div>
    )
}