"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Linkedin,
    label: "Linkedin",
    value: "Thashenu Kularathna",
    href: "https://www.linkedin.com/in/thashenu-kularathna",
    color: "from-blue-400 to-emerald-400",
  },
  {
    icon: Mail,
    label: "Email",
    value: "n.thashenu@gmail.com",
    href: "mailto:n.thashenu@gmail.com",
    color: "from-purple-400 to-pink-400",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "https://github.com/Yashu-x",
    href: "https://github.com/Yashu-x",
    color: "from-cyan-400 to-blue-400",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="mb-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Let&apos;s Build Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on your next DevOps transformation or discuss exciting opportunities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {contactInfo.map((contact, index) => {
                  const isExternal = contact.href.startsWith("http");
                  return (
                    <motion.a
                      key={index}
                      href={contact.href}
                      {...(isExternal && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-700/30 to-slate-800/30 transition-all duration-300 group cursor-pointer block"
                    >
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${contact.color} mx-auto mb-4 w-fit`}>
                        <contact.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{contact.label}</h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {contact.value}
                      </p>
                    </motion.a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
