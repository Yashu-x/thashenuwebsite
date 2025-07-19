"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Journey & Growth
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Professional Experience</h3>
                  <p className="text-gray-400">Building the future of DevOps</p>
                </div>
              </div>
              <div className="border-l-2 border-purple-500/30 pl-6">
                <h4 className="text-xl font-semibold text-white mb-1">Trainee Systems Engineer</h4>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Current</Badge>
                <p className="text-purple-400 font-medium">Echonlabs</p>
                <p className="text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 inline-block mr-2" /> March 2022 – Sep 2025
                </p>
                <p className="text-gray-300 mt-2">
                  Developing expertise in cloud infrastructure, automation, and DevOps practices while contributing to
                  enterprise-level projects.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 mr-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Education</h3>
                  <p className="text-gray-400">Academic foundation</p>
                </div>
              </div>
              <div className="border-l-2 border-cyan-500/30 pl-6">
                <h4 className="text-xl font-semibold text-white mb-1">Bachelor of Science</h4>
                <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">2025</Badge>
                <p className="text-cyan-400 font-medium">Physical Science (ICT)</p>
                <p className="text-gray-400">University of Sri Jayewardenepura</p>
                <p className="text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 inline-block mr-2" /> Aug 2022 – April 2025
                </p>
                <p className="text-gray-300 mt-2">
                  Comprehensive study of information and communication technologies with focus on practical
                  applications.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
{/* 
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 mr-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["Kubernetes for Developers – Udemy", "Introduction to Linux – Linux Foundation", "Configure NGINX on a Cloud Server – Udemy"].map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
                  >
                    <p className="text-gray-300 text-sm">{cert}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ExperienceSection;