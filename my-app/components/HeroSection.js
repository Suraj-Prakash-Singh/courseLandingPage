import HeroMain from "@/components/HeroMain";

import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
const HeroSection = () => {

    return (
        <div className="w-full h-auto flex items-center justify-center mt-20">
            <div className="w-11/12 h-max flex items-center justify-center shadow-md flex-col bg-[#B3BFCB4D] mt-10 rounded-[30px]">
                <h1 className="text-4xl p-2 m-4 font-bold tracking-wide text-[#012951]">Experience learning at <span className="text-[#FF6905]">our centres near you!</span></h1>
                <HeroMain/>
            </div>
        </div>
    )
}
export default HeroSection;