import map from "@/public/map.svg"
import checkBox from "@/public/checkBox.svg"
import arrowRight from "@/public/arrowRight.svg"
import Image from "next/image";

const HeroMain = () => {
    return (
        <div className="flex w-full h-max items-center justify-around">
            <Image className="h-72"src={map}/>
            <div className="w-4/6">
                <p className="w-max mb-5">Our ever-growing number of centers, spread across India, are a melting pot of<br/> 
                    absolute. They are hubs for academic excellence where dreams are nurtured, skills<br/> 
                    are honed, and futures are built.
                </p>
                
                <ul className="font-medium">
                    <li className="flex mb-2"><Image className="mr-2" src={checkBox}/>Personalized learning from top educators in your very own city</li>
                    <li className="flex mb-2"><Image className="mr-2" src={checkBox}/>State-of-the-Art Facilities with latest technologies</li>
                    <li className="flex mb-2"><Image className="mr-2" src={checkBox}/>Unparalleled in-person experience</li>
                </ul>

                <div className="flex mt-4 flex-col">
                    <h1 className="font-bold text-[28px] text-[#FF6905] tracking-wider">Checkout the centre closest to you</h1>
                    <select className="mt-4 w-2/5 bg-inherit py-2 px-1 mb-4 border border-[#FF6905] rounded-[6px] text-[#888888] cursor-pointer">
                        <option>City</option>
                        <option>Delhi</option>
                        <option>Bangalore</option>
                        <option>Hyderabad</option>
                        <option>Mathura</option>
                        <option>Chennai</option>
                    </select>
                    <select className="w-2/5 bg-inherit py-2 px-1 mb-4 border border-[#FF6905] rounded-[6px] text-[#888888] cursor-pointer">
                        <option>Preferred program</option>
                        <option>Program 1</option>
                        <option>Program 2</option>
                        <option>Program 3</option>
                        <option>Program 4</option>
                    </select>
                </div>
                <button className="ml-36 my-5 overflow-hidden shadow-lg flex items-center bg-[#FF6905] text-white px-5 py-2 rounded-[50px] text-center hover:bg-orange-400">Find a centre<Image className="ml-5 w-2"src={arrowRight}/></button>
            </div>
        </div>
    )
}

export default HeroMain;