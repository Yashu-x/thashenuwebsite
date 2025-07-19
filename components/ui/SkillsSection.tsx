// "use client";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Cloud, Server, Code2 } from "lucide-react";

// const skillCategories = [
//   {
//     title: "Cloud Technologies",
//     skills: ["AWS", "GCP", "Azure", "Serverless"],
//     icon: Cloud,
//     color: "from-blue-400 to-cyan-400",
//   },
//   {
//     title: "DevOps Practices",
//     skills: ["CI/CD", "IaC", "Automation", "Monitoring"],
//     icon: Server,
//     color: "from-purple-400 to-pink-400",
//   },
//   {
//     title: "Programming Languages",
//     skills: ["JavaScript", "TypeScript", "Go"],
//     icon: Code2,
//     color: "from-green-400 to-emerald-400",
//   },
// ];

// const staggerContainer = {
//   initial: { opacity: 0 },
//   animate: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const fadeInUp = {
//   initial: { y: 50, opacity: 0 },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: "easeInOut",
//     },
//   },
// };

// const SkillsSection = () => {
//   return (
//     <section id="skills" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
//             Core Competencies
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Specialized expertise across the DevOps ecosystem
//           </p>
//         </motion.div>

//         <motion.div
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {skillCategories.map((category, index) => (
//             <motion.div key={index} >
//               <Card className="bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group backdrop-blur-sm">
//                 <CardContent className="p-6">
//                   <div className="flex items-center mb-4">
//                     <div
//                       className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300`}
//                     >
//                       <category.icon className="w-5 h-5 text-white" />
//                     </div>
//                     <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
//                       {category.title}
//                     </h3>
//                   </div>
//                   <div className="flex flex-wrap gap-2">
//                     {category.skills.map((skill, skillIndex) => (
//                       <Badge
//                         key={skillIndex}
//                         variant="secondary"
//                         className="bg-gray-700/50 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors text-xs"
//                       >
//                         {skill}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;
