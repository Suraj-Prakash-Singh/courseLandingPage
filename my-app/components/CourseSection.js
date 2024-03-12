import CourseCards from "./CourseCards";
import arrowRight from "@/public/arrowRight.svg"
import Image from "next/image";

const CourseSection = () => {

    return (
        <div className="w-full h-auto flex items-center justify-center flex-col">
            <div className="w-11/12 h-max flex items-center justify-center mt-10">
                <h1 className="text-4xl p-2 m-4 font-bold tracking-wider text-[#012951] text-center">
                    Not sure which course is for you? <br/>Checkout these <span className="text-[#FF6905] underline cursor-pointer">FREE lectures</span> to help you choose!
                </h1>
            </div>
            <div className="w-11/12 h-max flex items-center justify-between my-4">
                <CourseCards/>
                <CourseCards/>
                <CourseCards/>
                <CourseCards/>
            </div>
            <button className="my-5 overflow-hidden shadow-lg flex items-center bg-[#FF6905] text-white px-5 py-2 rounded-[50px] text-center hover:bg-orange-400">
                Explore More<Image className="ml-2 w-2"src={arrowRight}/></button>
        </div>
    )
}

export default CourseSection;