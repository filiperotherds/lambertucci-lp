'use client'

import { motion } from "motion/react"

import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return(
        <div className="relative w-full h-screen flex items-center justify-center bg-zinc-800/15">
            <Image src={'/background.png'} alt="" fill priority className="-z-10 object-cover pointer-events-none"/>
            <div className="w-full h-full z-0 bg-gradient-to-t from-zinc-900 to-zinc-900/0 object-cover"></div>

            <div className="absolute w-full h-full z-10 flex items-center justify-center">
                <div className="w-full max-w-7xl h-full mx-6 flex flex-row items-center justify-center">
                    <div className="h-full w-full flex flex-col items-start justify-end space-y-8 pb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.25 }}
                            className="p-2 w-72 h-16 backdrop-blur-sm rounded-lg border border-t-white/25 border-r-white/25 border-b-black/5 border-l-black/5 flex flex-row items-center justify-center space-x-2 text-white/80 font-medium"
                        >
                            <Sparkles size={16}/>
                            <span className="text-sm font-medium">Home Improvement</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.25 }}
                            className="text-5xl text-white font-bold leading-snug"
                        >
                            Improving your home,
                            <br />
                            improving your life.
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.25 }}
                            className="max-w-2xl text-sm text-zinc-300 leading-relaxed"
                        >
                            We are committed to providing top-notch home improvement services that enhance the beauty, functionality, and value of your living space.
                            Our team of skilled professionals is dedicated to delivering exceptional craftsmanship and customer satisfaction on every project.
                        </motion.h2>
                    </div>
                    
                    <div className="h-full w-full flex flex-col items-start justify-end">

                    </div>
                </div>
            </div>
        </div>
    )
}