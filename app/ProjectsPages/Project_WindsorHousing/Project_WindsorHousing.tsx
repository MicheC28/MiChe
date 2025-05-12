import github_icon from "../../HomePage/github_logo.png";
import ProjectBreadcrumb from "../Project_Breadcrumb/projectBreadcrumb";
import model_error from "./Model_Errors.png";
import windsor from "../../HomePage/windsor.jpeg";
function ProjectWindsorHousing() {
    return (
        <div className="relative z-10 flex flex-col gap-5">
            <div className="h-20 md:h-15"></div>

            <ProjectBreadcrumb projectName={"Windsor Housing Prediction Model"} />


            <div className="mx-10 md:mx-40 bg-black/60 rounded-xl flex flex-col justify-evenly items-center gap-y-5 p-8">
                <p className="text-xl text-emerald-200 font-bold">
                    Windsor Housing Prediction Model
                </p>

                <p className="text-base text-gray-500">
                    Python, Pandas, scikit-learn, Kaggle | Jan 2024
                </p>

                <img src={windsor} className="md:w-2/3 h-auto rounded-xl" />

                <ul className="text-white text-base list-disc md:mx-30">
                    <li>Trained a Random Forest Regression and Linear Regression machine learning models using Pandas and Scikit-learn libraries to predict Windsor housing prices given its attributes with an MAE of $14,000.</li>
                    <li>Used Panads to read data in a CSV file into a DataFrame.</li>
                    <li>Split over 500 data entries into training and validation data.</li>
                </ul>

                <a href="github" className="border-teal-950 border-4 hover:border-emerald-200 p-2 rounded-xl transition duration-200 hover:bg-emerald-200 bg-transparent">
                    <img src={github_icon} className="homepage-social-icon " />
                </a>

                <img src={model_error} className="w-2/3 rounded-xl" />

                <p className="text-white text-base md:mx-30">
                    The Windsor Housing Prediction Model uses the Random Forest Regression and Linear Regression machine learning models from scikit-learn trained on historical windsor housing data to predict house prices given attributes like lotsize, number of bedrooms/bathrooms/garages, and number of stories.<br></br><br></br>

                    The Python script also calculates the mean absolute error to quantify the model's accuracy.
                </p>

            </div>

            <div className="h-15"></div>


        </div>
    )
}

export default ProjectWindsorHousing;