import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return(
        <div className="relative w-screen h-screen flex items-center justify-center bg-zinc-800/35">
            <Image src={'/background.jpg'} alt="" fill priority className="-z-10 object-cover"/>
            <div className="w-full h-full z-0 bg-gradient-to-t from-zinc-900 to-zinc-900/0 object-cover"></div>

            <div className="absolute w-full h-full z-10 flex items-center justify-center">
                <div className="w-full max-w-7xl h-full mx-6 flex flex-row items-center justify-center">
                    <div className="h-full w-full flex flex-col items-start justify-end space-y-8 pb-16">
                        <div className="px-4 py-2 backdrop-blur-sm rounded-lg border border-t-white/25 border-r-white/25 border-b-black/5 border-l-black/5 flex flex-row items-center justify-center space-x-2 text-white/80 font-medium">
                            <Sparkles size={16}/>
                            <span className="text-sm font-medium">Home Improvement</span>
                        </div>

                        <h1 className="text-5xl text-white font-bold leading-snug">
                            Improving your home,
                            <br />
                            improving your life.
                        </h1>

                        <h2 className="max-w-2xl text-sm text-white/90 leading-relaxed">
                            We are committed to providing top-notch home improvement services that enhance the beauty, functionality, and value of your living space.
                            Our team of skilled professionals is dedicated to delivering exceptional craftsmanship and customer satisfaction on every project.
                        </h2>
                    </div>
                    
                    <div className="h-full w-full flex flex-col items-start justify-end">

                    </div>
                </div>
            </div>
        </div>
    )
}