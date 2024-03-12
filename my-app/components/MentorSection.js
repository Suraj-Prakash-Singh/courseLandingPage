import MentorCard from "./MentorCards";
import leftBtn from "@/public/leftBtn.svg"
import rightBtn from "@/public/rightBtn.svg"
import Image from "next/image";

const MentorsSection = () => {
    return (
        <div className="w-full h-max mt-9 flex items-center justify-center pb-96">
            <div className="w-11/12 h-56 rounded-[30px] shadow-lg bg-[#FF6905] flex items-center flex-col">
                <h1 className="text-3xl mt-4 text-white font-semibold text-center">Meet our top mentors</h1>
                <div className="w-full h-max flex items-center justify-evenly my-5 gap-4 relative">
                    <Image className="w-7 absolute left-3 top-20 cursor-pointer" src={leftBtn}></Image>
                    <MentorCard name="Suraj Singh" time={10}/>
                    <MentorCard name="Harshit Tanday" time={7}/>
                    <MentorCard name="Sid Pandey" time={5}/>
                    <Image className="w-7 absolute right-3 top-20 cursor-pointer" src={rightBtn}></Image>
                </div>
            </div>
        </div>
    )
}

export default MentorsSection;