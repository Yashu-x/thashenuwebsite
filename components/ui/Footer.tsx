"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-800/50">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4">
            © 2025 Thashenu Kularathna. Crafted with passion and deployed with precision.
          </p>
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "https://github.com/Yashu-x" },
              { icon: Mail, href: "mailto:n.thashenu@gmail.com" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/thashenu-kularathna" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
