"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Mail, Zap, Download } from "lucide-react";
import FloatingElement from "./FloatingElement";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from '@/public/logo.png';
const HeroSection = () => {
  const containerRef = useRef(null);
  // const [_IsMounted, setIsMounted] = useState(false);
  const [ isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    setIsMounted(true);
  }, []);



  return (
    <section
      id="about"
      ref={containerRef} // ✅ ensure ref is attached here
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-25"
    >

        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
   

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Floating TK Icon */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-4"
        >
          <FloatingElement>
            <div className="relative mx-auto w-50 h-50 mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-full" />
              <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center ">
                <Image src={logo} width={150} height={115} alt="mama yashuu" className="rounded-full justify-center "/>
              </div>
            </div>
          </FloatingElement>
        </motion.div>


          <h1 className="text-6xl md:text-8xl mb-5 font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Thashenu
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Kularathna
            </span>
          </h1>

          {/* Role Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8 flex flex-wrap justify-center gap-4"
          >
       
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-xl font-semibold text-white">DevOps Engineer</span>
            </div>
     
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Passionate about automating deployments, orchestrating cloud infrastructure, and building scalable DevOps
            solutions. Transforming complex systems into seamless, efficient workflows.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="mailto:n.thashenu@gmail.com">
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg">
                <Mail className="w-5 h-5 mr-2" />
                Let&apos;s Connect
              </Button>
            </a>
            <a href="cv.pdf" download>
              <Button
                variant="outline"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </a>
          </motion.div>
        {/* </motion.div> */}
      </div>
    </section>
  );
};

export default HeroSection;
