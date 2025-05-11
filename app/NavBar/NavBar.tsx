function NavBar() {
    return (

        <nav className="bg-teal-700 fixed w-full top-0 start-0 border-b border-teal-900  z-30">
            <div className="max-w-screen flex flex-row md:flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse text-emerald-200">
                    <span className="text-rose-300">//</span>mc
                </a>

                <div className="items-center w-full flex flex-row justify-end md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex p-4 md:p-0  font-medium rounded-lg bg-teal-700 md:space-x-8 space-x-4 rtl:space-x-reverse flex-row justify-end md:mt-0 border-0">
                        <li className="relative group">
                            <a href="/" className="block text-white hover:text-emerald-200 rounded-sm p-0" data-dropdown-toggle="dropdownNavbar" aria-current="page">Home</a>


                        </li>
                        <li className="relative group">
                            <a href="/projects" className="block text-white rounded-sm  hover:text-emerald-200 p-0">Projects</a>
                            <div id="dropdownNavbar" className="z-15 hidden group-hover:block absolute -left-7 top-full font-normal bg-teal-700 rounded-lg w-40">
                                <ul className="py-2 text-sm text-white" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="/projects/digitalclipboard" className="block px-4 py-2 hover:bg-teal-900 dark:hover:bg-gray-600 dark:hover:text-white">Digital Clipboard</a>
                                    </li>
                                    <li>
                                        <a href="/projects/alertingmedicationcase" className="block px-4 py-2 hover:bg-teal-900 dark:hover:bg-gray-600 dark:hover:text-white">Alerting Medication Case</a>
                                    </li>
                                    <li>
                                        <a href="/projects/windsorhousing" className="block px-4 py-2 hover:bg-teal-900 dark:hover:bg-gray-600 dark:hover:text-white">Windsor Housing Prediction Model</a>
                                    </li>
                                    <li>
                                        <a href="/projects/rainyriches" className="block px-4 py-2 hover:bg-teal-900 dark:hover:bg-gray-600 dark:hover:text-white">Rainy Riches Game</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="relative group">
                            <a href="/miche" className="block text-white rounded-sm  hover:text-rose-300 p-0">MiChe</a>
                            <div id="dropdownNavbar" className="z-15 hidden group-hover:block absolute -left-7 top-full font-normal bg-teal-700 rounded-lg w-40">
                                <ul className="py-2 text-sm text-white" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="/miche/minis-collection" className="block px-4 py-2 hover:bg-teal-900">Minis Collection - 2024</a>
                                    </li>
                                    <li>
                                        <a href="/miche/city-of-roses" className="block px-4 py-2 hover:bg-teal-900 dark:hover:bg-gray-600 dark:hover:text-white">City of Roses - 2023</a>
                                    </li>
                                    <li>
                                        <a href="/miche/iteration1-collection" className="block px-4 py-2 hover:bg-teal-900 dark:hover:bg-gray-600 dark:hover:text-white">Iteration 1 Collection - 2023</a>
                                    </li>
                                    <li>
                                        <a href="/miche/temporary-instance" className="block px-4 py-2 hover:bg-teal-900 dark:hover:bg-gray-600 dark:hover:text-white">Temporary Instance - 2023</a>
                                    </li>
                                    <li>
                                        <a href="/miche/colour-vision" className="block px-4 py-2 hover:bg-teal-900 dark:hover:bg-gray-600 dark:hover:text-white">Colour Vision - 2020</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="mailto:m89chen@uwaterloo.ca" className="block text-white rounded-sm  hover:text-emerald-200 p-0">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;