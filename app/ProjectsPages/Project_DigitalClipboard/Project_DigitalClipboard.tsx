import demo_pic from "./digitalClipboardDemo1.png";
import github_icon from "../../HomePage/github_logo.png";
import demo_vid from "./DigitalClipboardDemo.gif";
import clipboard from "./digitalClipboard.png";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
// import {HiHome} from "react-icons/hi";
import { RiComputerLine } from "react-icons/ri";
import ProjectBreadcrumb from "../Project_Breadcrumb/projectBreadcrumb";


function ProjectDigitalClipboard() {
    return (
        <div className="relative z-10 flex flex-col gap-5">
            <div className="h-15"></div>

            <ProjectBreadcrumb projectName={"Digital Clipboard"} />


            <div className="mx-20 bg-black/60 rounded-xl flex flex-col justify-evenly items-center gap-y-5 p-8">
                <p className="text-xl text-emerald-200 font-bold">
                    Digital Clipboard
                </p>

                <p className="text-base text-gray-500">
                    HTML5, CSS, JavaScript | Dec 2023 - Jan 2024
                </p>

                <img src={demo_pic} className="md:w-2/3 h-auto rounded-xl" />

                <ul className="text-white text-base list-disc md:mx-30">
                    <li>Created a Chrome extension that allows users to keep track of important sites and accompanying notes.</li>
                    <li>Used HTML5 and CSS3 to create an intuitive user interface as well as a JavaScript program that notes down the URL of the current tab with the click of a button.</li>
                    <li>Key aspects include the use of DOM to take input from HTML elements, the use of arrays to store URLs and sidenotes, and manipulation of the browser's local storage.</li>
                </ul>

                <a href="github" className="border-teal-950 border-4 hover:border-emerald-200 p-2 rounded-xl transition duration-200 hover:bg-emerald-200 bg-transparent">
                    <img src={github_icon} className="homepage-social-icon " />
                </a>

                <img src={demo_vid} className="w-2/3 rounded-xl" />

                <p className="text-white text-base md:mx-30">
                    The Digital Clipboard helps keep a record of different sites and notes when doing research online.<br /><br />

                    As the user is reading through an article or site, they can keep notes by entering them in the text bar. Once they've noted everything they want to note, they click the 'ADD' button to create a new list item on the digital clipboard. The new list item includes the notes followed by the URL of the current site.

                    Alternatively, users can also delete list items. Clicking the 'REMOVE' button deletes the most recent list item.

                </p>

                <img src={clipboard} className="rounded-xl" />
            </div>


        </div>
    )
}

export default ProjectDigitalClipboard;