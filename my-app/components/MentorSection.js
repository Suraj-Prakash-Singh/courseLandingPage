import MentorCard from "./MentorCards";
import leftBtn from "@/public/leftBtn.svg"
import rightBtn from "@/public/rightBtn.svg"

const MentorsSection = () => {
    return (
        <div className="w-full h-max mt-9 flex items-center justify-center pb-96">
            <div className="w-11/12 h-56 rounded-[30px] shadow-lg bg-[#FF6905] flex items-center flex-col">
                <h1 className="text-3xl mt-4 text-white font-semibold text-center">Meet our top mentors</h1>
                <div className="w-full h-max flex items-center justify-evenly my-5">
                    <MentorCard name="Suraj Singh" time={10}/>
                    <MentorCard name="Harshit Tanday" time={7}/>
                    <MentorCard name="Sid Pandey" time={5}/>
                </div>
            </div>
        </div>
    )
}

export default MentorsSection;