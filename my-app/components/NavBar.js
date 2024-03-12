import arrow from "@/public/arrow.png";
import Image from "next/image";

const NavBar = () => {
    return (
        <div className="w-full h-max flex bg-[#0129514D] border-none items-center justify-between fixed top-0">
            <div className="w-8/12">
                <ul className="flex ml-40 p-5 font-bold justify-evenly">
                    <li className="flex items-center cursor-pointer">CUET</li>
                    <li className="flex items-center cursor-pointer">Result<Image className="w-4 h-3 ml-1" src={arrow}></Image></li>
                    <li className="flex items-center cursor-pointer">Preparation<Image className="w-4 h-3 ml-1" src={arrow}></Image></li>
                    <li className="flex items-center cursor-pointer">Articles<Image className="w-4 h-3 ml-1" src={arrow}></Image></li>
                    <li className="flex items-center cursor-pointer">Universities<Image className="w-4 h-3 ml-1" src={arrow}></Image></li>
                    <li className="flex items-center cursor-pointer">Centres</li>
                </ul>
            </div>
            <div className="w-2/6 flex items-center justify-evenly text-white font-medium">
                <button className="bg-inherit rounded-[20px] px-10 py-2 border ml-20 shadow-md">SIGN IN</button>
                <button className="bg-[#FF6905] rounded-[20px] px-6 py-2 shadow-md">Contact US</button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default NavBar;