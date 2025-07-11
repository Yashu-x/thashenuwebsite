"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import {
  Github,
  Mail,
  Phone,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Code2,
  Server,
  Cloud,
  Shield,
  Monitor,
  GitBranch,
  Zap,
  ArrowRight,
  Download,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const AnimatedCounter = ({ value, duration = 2000 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration])

  return <span>{count}</span>
}

const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      delay,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
)

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  const skills = [
    {
      category: "Languages",
      items: ["JavaScript"],
      icon: Code2,
      color: "from-blue-400 to-cyan-400",
    },
    {
      category: "DevOps",
      items: ["Docker", "Kubernetes", "Terraform", "Helm"],
      icon: Server,
      color: "from-purple-400 to-pink-400",
    },
    { category: "Cloud", items: ["AWS", "GCP", "Azure"], icon: Cloud, color: "from-green-400 to-emerald-400" },
    {
      category: "CI/CD",
      items: ["GitHub Actions", "GitLab CI", "Jenkins", "Argo CD"],
      icon: GitBranch,
      color: "from-orange-400 to-red-400",
    },
    {
      category: "Monitoring and Logging",
      items: ["Prometheus", "Grafana", "ELK Stack","Promtail","Loki"],
      icon: Monitor,
      color: "from-indigo-400 to-purple-400",
    },
    {
      category: "Security",
      items: ["Snyk", "Trivy", "Gitleaks", "Semgrep"],
      icon: Shield,
      color: "from-teal-400 to-blue-400",
    },
  ]

  const projects = [
    {
      title: "Deployzy",
      description: "Self-hosted DevOps orchestration platform with comprehensive monitoring and deployment automation",
      tech: ["Node.js", "Docker", "Nginx", "GCP", "AWS", "MongoDB", "Prometheus", "Grafana"],
      type: "Platform",
      status: "Completed",
      gradient: "from-violet-600 via-purple-600 to-blue-600",
      date: "Jan 2025 – May 2025",
    },
    {
      title: "HireSage AI",
      description: "AI-powered recruitment platform using LLMs to intelligently match candidates with recruiters",
      tech: ["Docker", "GCP", "GitHub Actions", "Python", "Next.js"],
      type: "AI Platform",
      status: "Ongoing",
      gradient: "from-pink-500 via-red-500 to-yellow-500",
      date: "Ongoing",
    },
    {
      title: "Portfolio Website",
      description: "Kubernetes-based portfolio with GitOps practices and automated deployment pipelines",
      tech: ["Next.js", "Docker", "GitHub Actions", "Argo CD", "Helm", "Kubernetes"],
      type: "Web",
      status: "Live",
      gradient: "from-green-400 via-blue-500 to-purple-600",
      date: "March 2025",
    },
    {
      title: "Laguma",
      description: "Modern accommodation rental platform with seamless booking experience",
      tech: ["Vercel", "Cloudflare", "Next.js"],
      type: "Platform",
      status: "Live",
      gradient: "from-orange-400 via-pink-400 to-red-500",
      date: "April 2025",
    },
    {
      title: "XOX Game",
      description: "Interactive gaming platform with comprehensive monitoring and cloud deployment",
      tech: ["Next.js", "MongoDB", "Docker", "GitHub Actions", "AWS", "Prometheus"],
      type: "Game",
      status: "Live",
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      date: "March 2025",
    },
  ]

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  }

  const skillCategories = [
    {
      title: "Cloud Technologies",
      skills: ["AWS", "GCP", "Azure", "Serverless"],
      icon: Cloud,
      color: "from-blue-400 to-cyan-400",
    },
    {
      title: "DevOps Practices",
      skills: ["CI/CD", "IaC", "Automation", "Monitoring"],
      icon: Server,
      color: "from-purple-400 to-pink-400",
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "TypeScript", "Go"],
      icon: Code2,
      color: "from-green-400 to-emerald-400",
    },
  ]

  return (
    <div ref={containerRef} className="relative">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900" />

      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-xl border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-white text-xl shadow-lg">
              TK
            </div>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {["About", "Skills", "Experience", "Projects", "Contact"].map((item, index) => (
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

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <FloatingElement>
              <div className="relative mx-auto w-40 h-40 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-full animate-spin-slow" />
                <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    TK
                  </span>
                </div>
              </div>
            </FloatingElement>
          </motion.div>

          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Thashenu
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Kularathna
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 backdrop-blur-sm">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-xl font-semibold text-white">DevOps Engineer</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Passionate about automating deployments, orchestrating cloud infrastructure, and building scalable DevOps
              solutions. Transforming complex systems into seamless, efficient workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap justify-center gap-4"
            >
             <a href="mailto:n.thashenu@gmail.com">
                <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Let's Connect
                </Button>
              </a>
              <a href="cv.pdf" download>
                <Button variant="outline" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </a>
            </motion.div>
          </motion.div>

          
        </div>
      </section>

      {/* Skills Section - Streamlined */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Core Competencies
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Specialized expertise across the DevOps ecosystem</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-gray-700/50 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Technology Showcase */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10" />
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
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Powered by industry-leading tools and platforms</p>
          </motion.div>

          {/* DevOps Tools */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">DevOps & Container Orchestration</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "Docker", logo: "/placeholder.svg?height=60&width=60", color: "hover:bg-blue-500/10" },
                { name: "Kubernetes", logo: "/placeholder.svg?height=60&width=60", color: "hover:bg-blue-600/10" },
                { name: "Terraform", logo: "/placeholder.svg?height=60&width=60", color: "hover:bg-purple-500/10" },
                { name: "Helm", logo: "/placeholder.svg?height=60&width=60", color: "hover:bg-cyan-500/10" },
                { name: "Jenkins", logo: "/placeholder.svg?height=60&width=60", color: "hover:bg-red-500/10" },
                { name: "Argo CD", logo: "/placeholder.svg?height=60&width=60", color: "hover:bg-orange-500/10" },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, rotateY: -90 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`group p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 ${tech.color} backdrop-blur-sm`}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                      <img
                        src={tech.logo || "/placeholder.svg"}
                        alt={tech.name}
                        className="w-12 h-12 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cloud Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Cloud Platforms</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Amazon Web Services",
                  logo: "/placeholder.svg?height=80&width=80",
                  color: "hover:bg-orange-500/10",
                  desc: "EC2, S3, Lambda, EKS",
                },
                {
                  name: "Google Cloud Platform",
                  logo: "/placeholder.svg?height=80&width=80",
                  color: "hover:bg-blue-500/10",
                  desc: "GKE, Cloud Run, BigQuery",
                },
                {
                  name: "Microsoft Azure",
                  logo: "/placeholder.svg?height=80&width=80",
                  color: "hover:bg-blue-600/10",
                  desc: "AKS, Functions, DevOps",
                },
              ].map((cloud, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`group p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 ${cloud.color} backdrop-blur-sm`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 mb-6 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                      <img
                        src={cloud.logo || "/placeholder.svg"}
                        alt={cloud.name}
                        className="w-16 h-16 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {cloud.name}
                    </h4>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {cloud.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Monitoring & Security */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Monitoring & Security</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { name: "Prometheus", logo: "/placeholder.svg?height=60&width=60", color: "hover:bg-orange-500/10" },
                { name: "Grafana", logo: "/placeholder.svg?height=60&width=60", color: "hover:bg-orange-600/10" },
                { name: "Snyk", logo: "/placeholder.svg?height=60&width=60", color: "hover:bg-purple-500/10" },
                { name: "Trivy", logo: "/placeholder.svg?height=60&width=60", color: "hover:bg-blue-500/10" },
                { name: "ELK Stack", logo: "/placeholder.svg?height=60&width=60", color: "hover:bg-yellow-500/10" },
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, rotateX: -90 }}
                  whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  className={`group p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 ${tool.color} backdrop-blur-sm`}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                      <img
                        src={tool.logo || "/placeholder.svg"}
                        alt={tool.name}
                        className="w-12 h-12 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                      {tool.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Development Tools */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Development & Collaboration</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "Git", logo: "/placeholder.svg?height=60&width=60", color: "hover:bg-red-500/10" },
                { name: "GitHub", logo: "/placeholder.svg?height=60&width=60", color: "hover:bg-gray-500/10" },
                { name: "GitLab", logo: "/placeholder.svg?height=60&width=60", color: "hover:bg-orange-500/10" },
                { name: "VS Code", logo: "/placeholder.svg?height=60&width=60", color: "hover:bg-blue-500/10" },
                { name: "Next.js", logo: "/placeholder.svg?height=60&width=60", color: "hover:bg-gray-600/10" },
                { name: "React", logo: "/placeholder.svg?height=60&width=60", color: "hover:bg-cyan-500/10" },
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, rotateZ: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotateZ: 5 }}
                  className={`group p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 ${tool.color} backdrop-blur-sm`}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 mb-3 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                      <img
                        src={tool.logo || "/placeholder.svg"}
                        alt={tool.name}
                        className="w-8 h-8 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                      {tool.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Floating Tech Icons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-8 h-8 opacity-10"
                animate={{
                  x: [0, Math.random() * 200 - 100],
                  y: [0, Math.random() * 200 - 100],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 5,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                <div className="w-full h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
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

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm h-full">
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

                    <div className="space-y-6">
                      <div className="border-l-2 border-purple-500/30 pl-6 pb-6">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xl font-semibold text-white">Trainee Systems Engineer</h4>
                          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Current</Badge>
                        </div>
                        <p className="text-purple-400 font-medium mb-2">Echonlabs</p>
                        <div className="flex items-center text-gray-400 mb-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          March 2022 – Sep 2025
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          Developing expertise in cloud infrastructure, automation, and DevOps practices while
                          contributing to enterprise-level projects.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm h-full">
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

                    <div className="space-y-6">
                      <div className="border-l-2 border-cyan-500/30 pl-6 pb-6">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xl font-semibold text-white">Bachelor of Science</h4>
                          <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">2025</Badge>
                        </div>
                        <p className="text-cyan-400 font-medium mb-2">Physical Science (ICT)</p>
                        <p className="text-gray-400 mb-3">University of Sri Jayewardenepura</p>
                        <div className="flex items-center text-gray-400 mb-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          Aug 2022 – April 2025
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          Comprehensive study of information and communication technologies with focus on practical
                          applications.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Certifications */}
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
                    {[
                      "Kubernetes for Developers – Udemy",
                      "Introduction to Linux – Linux Foundation",
                      "Configure NGINX on a Cloud Server – Udemy",
                    ].map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
                      >
                        <p className="text-gray-300 text-sm">{cert}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
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
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Innovative solutions showcasing modern DevOps practices and full-stack development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateY: 5 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm h-full overflow-hidden">
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
                          <Badge
                            className={`${
                              project.status === "Live"
                                ? "bg-green-500/20 text-green-300 border-green-500/30"
                                : project.status === "Ongoing"
                                  ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                                  : "bg-blue-500/20 text-blue-300 border-blue-500/30"
                            }`}
                          >
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
                      {project.tech.slice(0, 6).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-slate-700/50 text-gray-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 hover:text-white transition-all duration-300 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 6 && (
                        <Badge variant="secondary" className="bg-slate-700/50 text-gray-300 text-xs">
                          +{project.tech.length - 6}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white flex-1"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-slate-600 text-gray-300 hover:bg-slate-700 flex-1 bg-transparent"
                      >
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

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
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
                Let's Build Together
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
                  {[
                    { icon: Phone, label: "Phone", value: "+94 783937753", color: "from-green-400 to-emerald-400" },
                    { icon: Mail, label: "Email", value: "n.thashenu@gmail.com", color: "from-purple-400 to-pink-400" },
                    { icon: Github, label: "GitHub", value: "github.com/THASHENU", color: "from-cyan-400 to-blue-400" },
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-700/30 to-slate-800/30 hover:from-slate-600/30 hover:to-slate-700/30 transition-all duration-300 group cursor-pointer"
                    >
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-r ${contact.color} mx-auto mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}
                      >
                        <contact.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{contact.label}</h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {contact.value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center mt-12"
                >
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300">
                    <Mail className="w-5 h-5 mr-2" />
                    Start a Conversation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800/50 relative">
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
                { icon: Github, href: "https://github.com/THASHENU" },
                { icon: Mail, href: "mailto:n.thashenu@gmail.com" },
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
    </div>
  )
}
