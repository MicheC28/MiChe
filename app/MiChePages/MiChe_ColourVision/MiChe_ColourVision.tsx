import { Lens } from "components/magicui/lens";
import MiCheBreadcrumb from "../MiChe_Breadcrumb/MiChe_Breadcrumb";
import colourvision from "../MiCheHomePage/MiChe_ColourVision.jpg";


export default function MiChe_ColourVision() {
    return (

        <div className="relative z-10">
            <div className="h-30 md:h-20"></div>

            <div className="gap-y-5 flex flex-col">
                <MiCheBreadcrumb projectName="Colour Vision - 2020" />

                <div className="bg-black/60 mx-20 md:mx-40 rounded-xl p-8 gap-y-5 flex flex-col justify-evenly items-center">
                    <div className="md:w-3/5">
                        <Lens lensSize={170} zoomFactor={1.7} >
                            <img src={colourvision} />
                        </Lens>
                    </div>

                    <p className="text-base italic text-slate-500">"Colour Vision", 2020. Acrylic on canvas.</p>

                    <p className="text-white text-base md:mx-20">
                        "Ah yes, Colour Vision. An oldie but a goodie.
                        <br></br><br></br>
                        You know how there are gateway drugs? Drugs that kind of get you into the habit of taking drugs? Well, this piece was my gateway drug. Not that I took drugs to make it—God, no. More like metaphorically, in the sense that this piece helped me develop my current painting style. I really should stop calling it a gateway drug. Okay, scratch that out. This piece is my gateway painting. That's better. It all started one day when I felt ambitious—I mean, really ambitious. I wanted to try tackling one of those hyperrealistic paintings—the ones that look like photos because they’re just that detailed. So, I found a reference photo of a pink flower and went to work.
                        <br></br><br></br>
                        Now, when people ask me to describe myself, "dedicated" and "hardworking" are words I use. I use them because they're true. When I want to get something done, I will break my own bones if that means I can get to it. Where am I going with this? When I tell you I spent 10 hours on this piece without a break, trying to achieve hyperrealism on a single petal, I am NOT lying. I speak only the truth. And the aching I felt in my spine the next day will also attest to this.
                        <br></br><br></br>
                        Did you know flowers have, like, vein things? They're so tiny and barely noticeable but also extremely noticeable if they’re not there. I could not, for the life of me—and I probably still can't now—draw those darn veins.
                        <br></br><br></br>
                        So I gave up.
                        <br></br><br></br>
                        But before you call me a hypocrite, 'Oh but you just said you're sooooooo hardworking, what happended to breaking you're bones to succeed,' let me explain. You see, if you're thinking that, you've fallen in my loophole. Go back and read that sentence. 'When I want to get something done, I will break my own bones if that means I can get to it.' Notice the 'want' part. My dedication truely is unbreakable, but my boredom is not.
                        <br></br><br></br>
                        I decided to swerve off the metaphorical road that I built for myself and decided to drive towards a flower field, a really colourful one. During my non-stop painful petal painting session, I worked with a lot of colours. Now maybe this was the exhaution speaking, but I begain noticing how some colours with darker than others. 'This blue is quite shadow-like,' and 'This yellow is quite highlight-like.' Thus, I began to experiment. Half-way through I found a bottle of gold painting in the basement and thought 'Why not?' and threw it in there as well.
                        <br></br><br></br>
                        And boom. Colour Vision, at your service.
                        <br></br><br></br>
                        Through this piece I learned the value of my passion and my time. I also learned to experiment, and embrace spontaneity because sometimes, the spontaneous path ends up way more fun than the planned one."
                        <br></br><br></br>
                        - MiChe
                    </p>


                </div>

            </div>

            <div className="h-15"></div>


        </div>
    )
}