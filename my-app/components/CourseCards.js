import Image from "next/image";
import playIcon from "@/public/play.svg"

const CourseCards = () => {
    return(
        <div className="w-[24%] h-60 rounded-xl shadow-lg bg-[#D9D9D9] flex items-center justify-center p-5 cursor-pointer">
            <div className="w-11 h-11 bg-[#FF6905] rounded-[50px] flex object-contain items-center justify-center">
                <Image className="w-6 h-6" src={playIcon}/>
            </div>
        </div>
    )
}

export default CourseCards;