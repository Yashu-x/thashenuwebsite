// This is a simplified version focusing on modular structure
"use client";
import { motion } from "framer-motion";
import { CIcon } from '@coreui/icons-react';
import { cibAmazonAws, cibAzureDevops, cibDocker, cibElasticSearch, cibGithub, cibGitlab, cibGoogleCloud, cibGrafana, cibHelm, cibJavascript, cibJenkins, cibKibana, cibKubernetes, cibLinux, cibLogstash, cibMongodb, cibMysql, cibNextJs, cibNginx, cibReact, cibSnyk, cibTerraform, cibWindows  } from '@coreui/icons';

const techItems = [
  // Programming Languages
  { name: "JavaScript", color: "hover:bg-yellow-500/10", icon: cibJavascript },

  // Version Control & Collaboration
  { name: "GitHub", color: "hover:bg-gray-800/10", icon: cibGithub },
  { name: "GitLab", color: "hover:bg-orange-400/10", icon: cibGitlab },

  // Development Tools
  { name: "Docker", color: "hover:bg-blue-500/10", icon: cibDocker },

  // Container Orchestration
  { name: "Kubernetes", color: "hover:bg-blue-600/10", icon: cibKubernetes },
  { name: "Helm", color: "hover:bg-cyan-500/10", icon: cibHelm },

  // IaC
  { name: "Terraform", color: "hover:bg-purple-500/10", icon: cibTerraform },

  // Monitoring & Visualization
  { name: "Prometheus", color: "hover:bg-orange-500/10"},
  { name: "Grafana", color: "hover:bg-yellow-400/10", icon: cibGrafana },
  { name: "Grafana_Loki", color: "hover:bg-yellow-400/10", icon: cibGrafana },
  { name: "Elasticsearch", color: "hover:bg-pink-500/10", icon: cibElasticSearch},
  { name: "Kibana", color: "hover:bg-pink-500/10", icon: cibKibana},
  { name: "Logstash", color: "hover:bg-pink-500/10", icon: cibLogstash},


  // Web Frameworks
  { name: "React", color: "hover:bg-blue-400/10", icon: cibReact },
  { name: "Next.js", color: "hover:bg-black/10", icon: cibNextJs },

  // Web Server
  { name: "NGINX", color: "hover:bg-green-500/10", icon: cibNginx },

  // Operating Systems
  { name: "Linux", color: "hover:bg-gray-500/10", icon: cibLinux },
  { name: "Windows", color: "hover:bg-blue-600/10", icon: cibWindows },

  // Databases
  { name: "MySQL", color: "hover:bg-blue-400/10", icon: cibMysql },
  { name: "MongoDB", color: "hover:bg-green-500/10", icon: cibMongodb },

  // CI/CD Tools
  { name: "GitHub Actions", color: "hover:bg-purple-400/10"},
  { name: "GitLab CI", color: "hover:bg-orange-400/10" },
  { name: "Jenkins", color: "hover:bg-red-500/10", icon: cibJenkins },
  { name: "Argo CD", color: "hover:bg-orange-500/10" },

  // Cloud Platforms
  { name: "AWS", color: "hover:bg-yellow-400/10", icon: cibAmazonAws },
  { name: "GCP", color: "hover:bg-blue-300/10", icon: cibGoogleCloud },
  { name: "Microsoft Azure", color: "hover:bg-blue-500/10", icon: cibAzureDevops },

  // Security Tools
  { name: "Snyk", color: "hover:bg-pink-400/10", icon: cibSnyk },
  { name: "Trivy", color: "hover:bg-red-400/10" },
  { name: "Gitleaks", color: "hover:bg-red-600/10" },
  { name: "Semgrep", color: "hover:bg-indigo-500/10" },
  { name: "Checkov", color: "hover:bg-green-600/10" },
];


const TechStackSection = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="technology">
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
              Technology Stack
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powered by industry-leading tools and platforms
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {techItems.map((tech, index) => {
            const Icon = tech.icon;
            const coloerr =""
            if(index){

            }
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className={`p-6 rounded-xl bg-gradient-to-r from-black to-cyan-300 border border-slate-700/50 ${tech.color} backdrop-blur-sm text-center`}
              >
                <div className="flex justify-center mb-2">
                  <CIcon icon={Icon} className="w-6 h-6 text-[#0000] "/>
                  {/* <Icon className="w-6 h-6 text-white" /> */}
                </div>
                <div className="text-white text-sm font-medium">{tech.name}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;