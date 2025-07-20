"use client";
import { motion } from "framer-motion";
import logo from '@/app/favicon.ico';
import Image from 'next/image';


const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-xl border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="relative">
          <div >
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={50}
              className="rounded"
            />
        </div>
        </motion.div>
        <div className="hidden md:flex space-x-8">
          {["About", "Technology", "Experience", "Projects", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              whileHover={{ scale: 1.1, color: "#06b6d4" }}
              className="text-white/80 hover:text-cyan-400 transition-all duration-300 font-medium"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
