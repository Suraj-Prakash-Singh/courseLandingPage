import clock from "@/public/clock.svg"
import filledStar from "@/public/filledStar.svg"
import emptyStar from "@/public/emptyStar.svg"
import Image from "next/image";

const MentorCard = ({name, time}) => {

    return (
        <div className="w-1/5 h-[340px] bg-white border border-[#FF6905] rounded-[10px] shadow-md">
            <div className="w-full h-3/5 flex flex-col bg-[#D9D9D9] rounded-[10px] shadow-lg"></div>
            <div className="w-full h-max flex flex-col items-start justify-center">
                <h3 className="ml-4 mt-2 font-medium text-xl">{name}</h3>
                <div className="w-max h-auto flex items-center justify-between ml-4 mt-8">
                    <Image className="w-5" src={clock}></Image>  
                    <p className="text-xs ml-3 text-[#828282]">{time} years</p>
                </div>
                <div className="w-max h-max flex items-center justify-evenly ml-4 gap-1 mt-4">
                    <Image className="w-4" src={filledStar}/>
                    <Image className="w-4" src={filledStar}/>
                    <Image className="w-4" src={filledStar}/>
                    <Image className="w-4" src={filledStar}/>
                    <Image className="w-4" src={emptyStar}/>
                    <p className="text-sm text-[#828282]">(200)</p>
                </div>
            </div>
        </div>
    )
}

export default MentorCard;