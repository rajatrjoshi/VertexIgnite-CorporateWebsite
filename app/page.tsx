"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  Code,
  Lightbulb,
  Mail,
  Phone,
  Rocket,
  Star,
  Zap,
  CheckCircle,
  Clock,
  TrendingUp,
  Shield,
  Smartphone,
  Globe,
  Play,
  Award,
  Target,
  MessageSquare,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const scaleOnHover = {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 },
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-[#491C8A] to-black">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-gradient-to-r from-black/40 via-[#491C8A]/20 to-black/40 backdrop-blur-xl border-b border-gradient-to-r from-violet-500/20 to-transparent"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#491C8A] via-violet-600 to-purple-800 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/25">
              <Image
                src="/Vertex_Initials_White.png"
                alt="Vertex Ignite"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
              Vertex Ignite
            </span>
          </motion.div>
          <nav className="hidden md:flex space-x-8">
            {["Services", "Process", "Team", "Portfolio", "Testimonials", "Contact"].map((item, index) => (
              <motion.div key={item} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div {...scaleOnHover}>
            <Button className="bg-gradient-to-r from-[#491C8A] via-violet-600 to-purple-700 hover:from-[#491C8A]/80 hover:via-violet-700 hover:to-purple-800 text-white shadow-lg shadow-violet-500/25">
              Get Started
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-[#491C8A]/40 via-violet-900/30 to-black/60"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-full mb-8 backdrop-blur-sm"
            >
              <Zap className="w-4 h-4 text-violet-400 mr-2" />
              <span className="text-violet-200 text-sm font-medium">Trusted by 500+ Startups</span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                Turn Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-600 bg-clip-text text-transparent">
                Ideas
              </span>
              <span className="bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                {" "}
                Into Reality
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
              We help early-stage startups build MVPs super fast. From concept to launch in weeks, not months.
              <span className="block mt-2 bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent font-semibold">
                Join the ranks of successful startups who chose speed over perfection.
              </span>
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div {...scaleOnHover}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#491C8A] via-violet-600 to-purple-700 hover:from-[#491C8A]/80 hover:via-violet-700 hover:to-purple-800 text-lg px-10 py-6 text-white shadow-2xl shadow-violet-500/25 border border-violet-400/20"
                >
                  <Rocket className="mr-3 w-6 h-6" />
                  Start Your MVP Journey
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </motion.div>

              <motion.div {...scaleOnHover}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-violet-400/30 text-white hover:bg-gradient-to-r hover:from-violet-500/10 hover:to-purple-500/10 text-lg px-10 py-6 bg-black/20 backdrop-blur-sm"
                >
                  <Play className="mr-3 w-5 h-5" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
            >
              {[
                { number: "500+", label: "MVPs Built" },
                { number: "2-4", label: "Weeks to Launch" },
                { number: "98%", label: "Success Rate" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-violet-400/40 rounded-full flex justify-center cursor-pointer"
          >
            <div className="w-1 h-3 bg-gradient-to-b from-violet-400 to-purple-400 rounded-full mt-2" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-black/60 via-[#491C8A]/20 to-black/60">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                Lightning-Fast
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                MVP Development
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              We specialize in rapid prototyping and MVP development, helping startups validate their ideas quickly and
              efficiently with cutting-edge technology.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                icon: Lightbulb,
                title: "Idea Validation",
                description:
                  "Transform your concept into a viable product strategy with comprehensive market research and user validation.",
                features: ["Market Analysis", "User Research", "Competitive Study", "Feasibility Assessment"],
              },
              {
                icon: Code,
                title: "Rapid Development",
                description:
                  "Build your MVP in 2-4 weeks using cutting-edge technologies and proven agile methodologies.",
                features: ["Modern Tech Stack", "Agile Process", "Daily Updates", "Quality Assurance"],
              },
              {
                icon: Rocket,
                title: "Launch Support",
                description:
                  "Get your product to market with deployment, monitoring, and comprehensive post-launch optimization.",
                features: ["Cloud Deployment", "Performance Monitoring", "User Analytics", "Ongoing Support"],
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div {...scaleOnHover}>
                  <Card className="bg-gradient-to-br from-black/40 via-[#491C8A]/20 to-black/60 border border-violet-500/20 backdrop-blur-sm hover:border-violet-400/40 transition-all duration-500 h-full group">
                    <CardContent className="p-8 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#491C8A] via-violet-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-all duration-300">
                        <service.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent mb-4">
                        {service.title}
                      </h3>
                      <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 text-violet-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-gradient-to-b from-black/60 to-[#491C8A]/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                Our Proven
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto">
              A streamlined 4-step process that takes you from idea to launch in record time.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description:
                  "We dive deep into your vision, analyze the market, and create a comprehensive roadmap for your MVP.",
                duration: "2-3 Days",
                icon: Target,
                color: "from-violet-500 to-purple-600",
              },
              {
                step: "02",
                title: "Design & Prototype",
                description:
                  "Our designers create stunning UI/UX mockups and interactive prototypes to visualize your product.",
                duration: "3-5 Days",
                icon: Smartphone,
                color: "from-purple-500 to-violet-600",
              },
              {
                step: "03",
                title: "Development & Testing",
                description:
                  "Our developers build your MVP using modern technologies while ensuring quality through rigorous testing.",
                duration: "10-15 Days",
                icon: Code,
                color: "from-violet-600 to-purple-700",
              },
              {
                step: "04",
                title: "Launch & Optimize",
                description:
                  "We deploy your MVP, monitor performance, and provide ongoing support for continuous improvement.",
                duration: "2-3 Days",
                icon: Rocket,
                color: "from-purple-600 to-violet-700",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-16 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <Card className="bg-gradient-to-br from-black/40 via-[#491C8A]/20 to-black/60 border border-violet-500/20 backdrop-blur-sm hover:border-violet-400/40 transition-all duration-500">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${process.color} rounded-xl flex items-center justify-center mr-4`}
                        >
                          <process.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-violet-400 font-semibold">Step {process.step}</div>
                          <h3 className="text-2xl font-bold text-white">{process.title}</h3>
                        </div>
                      </div>
                      <p className="text-white/70 mb-4 leading-relaxed">{process.description}</p>
                      <div className="flex items-center text-violet-300">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{process.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-24 flex justify-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                  >
                    {process.step}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-gradient-to-b from-[#491C8A]/30 to-black/60">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                Cutting-Edge Technology Stack
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We use the latest technologies to ensure your MVP is fast, scalable, and future-ready.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "AWS",
              "MongoDB",
              "PostgreSQL",
              "Docker",
              "Kubernetes",
              "TypeScript",
              "GraphQL",
              "Redis",
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-black/40 via-[#491C8A]/20 to-black/60 border border-violet-500/20 rounded-xl p-4 text-center backdrop-blur-sm hover:border-violet-400/40 transition-all duration-300"
              >
                <div className="text-white font-semibold">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="team" className="py-24 bg-gradient-to-b from-black/60 to-[#491C8A]/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                Meet Our
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Founders
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto">
              Experienced entrepreneurs and technologists who understand the startup journey and are passionate about
              turning ideas into reality.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
          >
            {[
              {
                name: "Alex Chen",
                role: "Co-Founder & CTO",
                bio: "Former senior engineer at Google with 8+ years building scalable products. Passionate about turning ideas into reality with cutting-edge technology.",
                email: "alex@rapidmvp.com",
                phone: "+1 (555) 123-4567",
                image: "/placeholder.svg?height=400&width=400",
                achievements: ["Ex-Google Engineer", "8+ Years Experience", "50+ MVPs Built"],
                expertise: ["Full-Stack Development", "Cloud Architecture", "AI/ML Integration"],
              },
              {
                name: "Sarah Johnson",
                role: "Co-Founder & CEO",
                bio: "Serial entrepreneur with 3 successful exits. Expert in product strategy and go-to-market execution with a track record of building unicorn startups.",
                email: "sarah@rapidmvp.com",
                phone: "+1 (555) 987-6543",
                image: "/placeholder.svg?height=400&width=400",
                achievements: ["3 Successful Exits", "Forbes 30 Under 30", "Startup Mentor"],
                expertise: ["Product Strategy", "Go-to-Market", "Fundraising"],
              },
            ].map((founder, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div {...scaleOnHover}>
                  <Card className="bg-gradient-to-br from-black/40 via-[#491C8A]/20 to-black/60 border border-violet-500/20 backdrop-blur-sm hover:border-violet-400/40 transition-all duration-500 overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="w-full h-64 bg-gradient-to-br from-[#491C8A] via-violet-600 to-purple-700 p-1">
                          <Image
                            src={founder.image || "/placeholder.svg"}
                            alt={founder.name}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover bg-white rounded-t-lg"
                          />
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-3 py-1 rounded-full">
                            <Award className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>

                      <div className="p-8">
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent mb-2">
                          {founder.name}
                        </h3>
                        <p className="text-violet-400 font-semibold mb-4 text-lg">{founder.role}</p>
                        <p className="text-white/70 mb-6 leading-relaxed">{founder.bio}</p>

                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3">Key Achievements</h4>
                          <div className="flex flex-wrap gap-2">
                            {founder.achievements.map((achievement, idx) => (
                              <span
                                key={idx}
                                className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 px-3 py-1 rounded-full text-sm text-violet-200"
                              >
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3">Expertise</h4>
                          <ul className="space-y-1">
                            {founder.expertise.map((skill, idx) => (
                              <li key={idx} className="flex items-center text-sm text-white/60">
                                <CheckCircle className="w-4 h-4 text-violet-400 mr-2 flex-shrink-0" />
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-3 pt-4 border-t border-violet-500/20">
                          <div className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors">
                            <Mail className="w-4 h-4 text-violet-400" />
                            <span className="text-sm">{founder.email}</span>
                          </div>
                          <div className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors">
                            <Phone className="w-4 h-4 text-violet-400" />
                            <span className="text-sm">{founder.phone}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gradient-to-b from-[#491C8A]/30 to-black/60">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                Success
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto">
              Real MVPs we've built that became successful businesses. From idea to million-dollar valuations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "TechFlow SaaS",
                category: "B2B SaaS",
                description: "Project management platform that raised $2M Series A",
                metrics: { users: "10K+", revenue: "$500K ARR", funding: "$2M Series A" },
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "GreenStart",
                category: "Sustainability",
                description: "Carbon tracking app with 50K+ active users",
                metrics: { users: "50K+", revenue: "$200K ARR", funding: "$1M Seed" },
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "FinanceAI",
                category: "FinTech",
                description: "AI-powered financial advisor for millennials",
                metrics: { users: "25K+", revenue: "$300K ARR", funding: "$1.5M Seed" },
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div {...scaleOnHover}>
                  <Card className="bg-gradient-to-br from-black/40 via-[#491C8A]/20 to-black/60 border border-violet-500/20 backdrop-blur-sm hover:border-violet-400/40 transition-all duration-500 overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-violet-500 to-purple-600 px-3 py-1 rounded-full text-white text-sm font-medium">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                        <p className="text-white/70 mb-4">{project.description}</p>

                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-lg font-bold text-violet-400">{project.metrics.users}</div>
                            <div className="text-xs text-white/60">Users</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-violet-400">{project.metrics.revenue}</div>
                            <div className="text-xs text-white/60">Revenue</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-violet-400">{project.metrics.funding}</div>
                            <div className="text-xs text-white/60">Funding</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-black/60 to-[#491C8A]/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                What Our Clients
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Say About Us
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto">
              Don't just take our word for it. Here's what startup founders say about working with us and the results
              they've achieved.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Michael Rodriguez",
                company: "TechFlow",
                role: "Founder & CEO",
                testimonial:
                  "VertexIgnite helped us launch our SaaS platform in just 3 weeks. Their expertise and speed are unmatched. We went from idea to $500K ARR in 8 months!",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
                results: "Raised $2M Series A",
              },
              {
                name: "Emily Watson",
                company: "GreenStart",
                role: "Co-Founder",
                testimonial:
                  "From idea to working prototype in 2 weeks. The team understood our vision perfectly and delivered beyond expectations. Now we have 50K+ users!",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
                results: "50K+ Active Users",
              },
              {
                name: "David Kim",
                company: "FinanceAI",
                role: "Founder",
                testimonial:
                  "Professional, fast, and reliable. They turned our complex fintech idea into a beautiful, functional MVP. The quality exceeded our expectations completely.",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
                results: "$1.5M Seed Funding",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div {...scaleOnHover}>
                  <Card className="bg-gradient-to-br from-black/40 via-[#491C8A]/20 to-black/60 border border-violet-500/20 backdrop-blur-sm hover:border-violet-400/40 transition-all duration-500 h-full group">
                    <CardContent className="p-8">
                      <div className="flex mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      <div className="mb-6">
                        <MessageSquare className="w-8 h-8 text-violet-400 mb-4" />
                        <p className="text-white/80 italic leading-relaxed">"{testimonial.testimonial}"</p>
                      </div>

                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#491C8A] to-violet-500 rounded-full flex items-center justify-center overflow-hidden">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-white font-semibold">{testimonial.name}</p>
                          <p className="text-white/60 text-sm">{testimonial.role}</p>
                          <p className="text-violet-400 text-sm font-medium">{testimonial.company}</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-lg p-3">
                        <div className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-violet-400 mr-2" />
                          <span className="text-violet-300 text-sm font-medium">{testimonial.results}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-[#491C8A]/30 to-black/60">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Everything you need to know about our MVP development process.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "How fast can you really build an MVP?",
                answer:
                  "We typically deliver MVPs in 2-4 weeks, depending on complexity. Our record is 10 days for a simple SaaS platform. We achieve this through our proven process, experienced team, and modern development tools.",
              },
              {
                question: "What's included in your MVP development service?",
                answer:
                  "Everything you need to launch: market research, UI/UX design, full-stack development, testing, deployment, and 30 days of post-launch support. We also provide documentation and training for your team.",
              },
              {
                question: "Do you work with non-technical founders?",
                answer:
                  "80% of our clients are non-technical founders. We explain everything in simple terms and guide you through the entire process. You don't need any technical knowledge to work with us.",
              },
              {
                question: "What happens after the MVP is launched?",
                answer:
                  "We provide 30 days of free support, then offer ongoing maintenance packages. Many clients also engage us for scaling their MVP based on user feedback and adding new features.",
              },
              {
                question: "How much does it cost to build an MVP?",
                answer:
                  "Our MVP packages start at $15K for simple applications and go up to $50K for complex platforms. The exact cost depends on your specific requirements, which we determine during our free consultation.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-black/40 via-[#491C8A]/20 to-black/60 border border-violet-500/20 backdrop-blur-sm hover:border-violet-400/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-black/60 to-[#491C8A]/40">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                  Ready to Build Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-600 bg-clip-text text-transparent">
                  Next Big Thing?
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
                Let's turn your idea into a working product. Get started today and see your vision come to life in
                weeks, not months.
                <span className="block mt-4 bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent font-semibold">
                  Join 500+ successful startups who chose speed over perfection.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <motion.div {...scaleOnHover}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#491C8A] via-violet-600 to-purple-700 hover:from-[#491C8A]/80 hover:via-violet-700 hover:to-purple-800 text-xl px-12 py-6 text-white shadow-2xl shadow-violet-500/25 border border-violet-400/20"
                  >
                    <Zap className="mr-3 w-6 h-6" />
                    Start Your Project Now
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </Button>
                </motion.div>

                <motion.div {...scaleOnHover}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-violet-400/30 text-white hover:bg-gradient-to-r hover:from-violet-500/10 hover:to-purple-500/10 text-xl px-12 py-6 bg-black/20 backdrop-blur-sm"
                  >
                    <Phone className="mr-3 w-5 h-5" />
                    Schedule Free Consultation
                  </Button>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                {[
                  { icon: Clock, title: "Free Consultation", desc: "30-min strategy call" },
                  { icon: Shield, title: "Risk-Free", desc: "Money-back guarantee" },
                  { icon: Zap, title: "Fast Delivery", desc: "2-4 weeks to launch" },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-white/60 text-sm">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-b from-[#491C8A]/40 to-black border-t border-violet-500/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <motion.div
                className="flex items-center space-x-2 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#491C8A] via-violet-600 to-purple-800 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/25">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                  Vertex Ignite
                </span>
              </motion.div>
              <p className="text-white/70 mb-6 max-w-md leading-relaxed">
                We help early-stage startups build MVPs super fast. From concept to launch in weeks, not months.
              </p>
              <div className="flex space-x-4">
                {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                  <motion.div
                    key={social}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-lg flex items-center justify-center cursor-pointer"
                  >
                    <Globe className="w-5 h-5 text-violet-400" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-white/60">
                {["MVP Development", "UI/UX Design", "Technical Consulting", "Product Strategy"].map((service) => (
                  <li key={service} className="hover:text-white transition-colors cursor-pointer">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-white/60">
                {["About Us", "Our Process", "Case Studies", "Contact"].map((item) => (
                  <li key={item} className="hover:text-white transition-colors cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-violet-500/20">
            <div className="flex space-x-6 text-white/60 mb-4 md:mb-0">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
            <div className="text-white/60">
              <p>&copy; 2025 Vertex Ignite. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
