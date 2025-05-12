import { Lens } from "components/magicui/lens";
import MiCheBreadcrumb from "../MiChe_Breadcrumb/MiChe_Breadcrumb";
import forgifting from "./MiChe_Iteration1_For-Gifting.jpg";
import lure from "./MiChe_Iteration1_Lure.jpg";
import wallmount from "./MiChe_Iteration1_Wall-Mount.jpg"

export default function MiChe_Iteration1Collection() {
    return (

        <div className="relative z-10">
            <div className="h-30 md:h-20"></div>

            <div className="gap-y-5 flex flex-col">
                <MiCheBreadcrumb projectName="Iteration 1 Collection - 2023" />

                <div className="bg-black/60 mx-20 md:mx-40 rounded-xl p-8 gap-y-5 flex flex-col justify-evenly items-center">

                    <div className="flex flex-col md:flex-row gap-5 items-end justify-center">
                        <div className="md:w-1/5 gap-y-5 flex flex-col">
                            <Lens lensSize={170} zoomFactor={1.7} >
                                <img src={forgifting} />
                            </Lens>
                            <p className="text-base italic text-slate-500 text-center">
                                "For Gifting", 2023. Acrylic and ink on watercolour paper.
                            </p>
                        </div>


                        <div className="md:w-1/5 gap-y-5 flex flex-col">
                            <Lens lensSize={170} zoomFactor={1.7} >
                                <img src={lure} />
                            </Lens>
                            <p className="text-base italic text-slate-500 text-center">
                                "Lure", 2023. Acrylic and gold leaf on cardboard.
                            </p>
                        </div>

                        <div className="md:w-1/5 gap-y-5 flex flex-col">
                            <Lens lensSize={170} zoomFactor={1.7} >
                                <img src={wallmount} />
                            </Lens>
                            <p className="text-base italic text-slate-500 text-center">
                                "Wall Mount", 2023. Acrylic and ink on watercolour paper.
                            </p>
                        </div>


                    </div>

                    <p className="text-white text-base md:mx-20">
                        "Ah, the freedom days. When time was a resource I readily had access to, and behind me were shelves filled with different colors of paint.
                        <br></br><br></br>
                        I vaguely remember making these, bringing them into existence. I think I was watching one of the movie recap videos; I'm not sure. I don't think I was fully there, but when am I ever.
                        <br></br><br></br>
                        I always say that I value the brilliance of people truly dedicated to their craft—dedicated as in, 'I spend 30 hours on this single thing that regular people only spend 5 minutes on, but it's worth it because what I've made is that much better.' However, I've also come to value spontaneous bursts of creativity. Sure, maybe I don't feel the same level of satisfaction from completing a piece that takes an hour versus one that took a year. But from afar, it doesn't matter because both look so damn good.
                        <br></br><br></br>
                        I'm not really sure where I'm going with this. I'm currently in the basement of an engineering building procrastinating doing work from two weeks ago.
                        <br></br><br></br>
                        I probably should care more. I probably should spend more effort making sure I do every bit of everything right. But that's boring. And boredom is the ultimate destroyer of creativity and my personal will to go on.
                        <br></br><br></br>
                        So no. I'm not gonna spend weeks on a painting to make it so gosh darn intricate that you can't stop staring at it. I'm gonna splash random colors on a canvas until I see something and go from there. I'll keep going until I don't want to anymore. That's how I know it's done. Not necessarily because the painting is finished but because I'm finished, and I wanna go take a nap."
                        <br></br><br></br>
                        - MiChe
                    </p>



                </div>

            </div>

            <div className="h-15"></div>


        </div>
    )
}