import { Lens } from "components/magicui/lens";
import MiCheBreadcrumb from "../MiChe_Breadcrumb/MiChe_Breadcrumb";
import cityofroses from "../MiCheHomePage/MiChe_CityOfRoses.jpg";

export default function MiChe_CityOfRoses() {
    return (
        <div className="relative z-10">
            <div className="h-30 md:h-20"></div>

            <div className="gap-y-5 flex flex-col">
                <MiCheBreadcrumb projectName="City of Roses - 2023" />

                <div className="bg-black/60 mx-20 md:mx-40 rounded-xl p-8 gap-y-5 flex flex-col justify-evenly items-center">

                    <div className="flex flex-col md:flex-row gap-5 items-end justify-center">
                        <div className="md:w-2/5 gap-y-5 flex flex-col">
                            <Lens lensSize={170} zoomFactor={1.7} >
                                <img src={cityofroses} />
                            </Lens>
                            <p className="text-base italic text-slate-500 text-center">
                                "City of Roses", 2023. Acrylic and ink on watercolour paper.
                            </p>
                        </div>

                    </div>

                    <p className="text-white text-base md:mx-20">
                        "Hey, you know I love complaining about something as much as the next person—and believe me, I sure did for the first 18 years of my life—but you never really know how good you have it until it gets ripped from your hands. And by 'ripped from your hands,' I mean you get an acceptance letter to your dream university, and it only then settles that you have to move out.
                        <br></br><br></br>
                        Everything that I was accustomed to, poof, bye-bye.
                        <br></br><br></br>
                        I got used to a lot of things. I got used to 15-minute travel times. I got used to getting driven everywhere. I got used to seeing the same people. I got used to going to the same places. I got used to my free time. I got used to my busy time. I got used to my mom's cooking. I got used to my mom's scolding. To be frank, I got used to Windsor.
                        <br></br><br></br>
                        But now I gotta go to Waterloo. Even though they start with the same letter, 'W,' I found that did not help in trying to get used to things. I have to get used to walking everywhere since I don't have a car. I have to get used to buying my groceries and cooking my own food. I have to get used to going to places alone because sometimes no one else wants to study in the basement of RCH with you (I'm not sure why; it's a lovely place). And I have to get used to knowing my way around.
                        <br></br><br></br>
                        It's all quite frustrating, to be honest. I've spent my whole life trying to learn my way around Windsor, memorizing street names and learning key locations, only to have to start all over again. And based on how easily I get lost in Waterloo, I don't think my navigation-learning skills have improved that much.
                        <br></br><br></br>
                        But alas, I persevere.
                        <br></br><br></br>
                        ...
                        <br></br><br></br>
                        Oh right, the painting.
                        <br></br><br></br>
                        I guess I'm trying to say that it's a dedication to my hometown and was a way to express my love for it and how much I miss it, blah blah blah. But that's a little too sentimental for my tastes. So I rant instead because that's what I'm good at (Unless you are an employer, to whom I am exceptionally skilled at getting straight to the point. Rant? Me? Never.)"
                        <br></br><br></br>
                        - MiChe
                    </p>



                </div>

            </div>

            <div className="h-15"></div>


        </div>
    )
}