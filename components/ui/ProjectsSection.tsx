"use client";
import { motion } from "framer-motion";
import { Github, Calendar, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Deployzy",
    description: "Self-hosted DevOps orchestration platform with monitoring and automation",
    tech: ["Node.js", "Docker", "Nginx", "GCP", "AWS"],
    type: "Platform",
    status: "Completed",
    gradient: "from-violet-600 via-purple-600 to-blue-600",
    date: "Jan 2025 – May 2025",
  },
  {
    title: "HireSage AI",
    description: "AI-powered recruitment platform using LLMs",
    tech: ["Docker", "GCP", "GitHub Actions", "Python", "Next.js"],
    type: "AI Platform",
    status: "Ongoing",
    gradient: "from-pink-500 via-red-500 to-yellow-500",
    date: "Ongoing",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative solutions showcasing DevOps and full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-purple-500/50 backdrop-blur-sm h-full overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                          {project.type}
                        </Badge>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-2 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.date}
                  </p>

                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 6).map((tech, i) => (
                      <Badge key={i} className="bg-slate-700/50 text-gray-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" className="border-slate-600 text-gray-300 flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;