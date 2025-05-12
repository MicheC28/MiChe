import Bubble from "./Bubble/Bubble";



function ProjectHomePage() {
    return (
        <div className="flex flex-col justify-evenly gap-y-5 z-50">
            <div className="md:h-15 h-20"></div>

            <div className="bg-black/60 mx-10 md:mx-40 rounded-xl z-20 ">
                <p className="text-center text-emerald-200 text-xl font-bold">Projects</p>
                <p className="text-center text-white text-base">Scroll around!</p>
            </div>

            <div className="flex flex-col justify-center items-center mx-10 z-20">
                <div className="flex flex-row justify-center">
                    <Bubble />
                </div>
            </div>
        </div>
    )
}

export default ProjectHomePage;