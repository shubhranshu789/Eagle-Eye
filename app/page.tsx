"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Camera,
  Lock,
  Clock,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Menu,
  X,
  Users,
  Award,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"


import emailjs from "emailjs-com";


export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "/professional-woman-smiling.png",
      rating: 5,
      text: "Eagle Eye Technologies transformed our home security. The installation was seamless, and the 24/7 monitoring gives us complete peace of mind.",
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      image: "/professional-businessman.png",
      rating: 5,
      text: "Outstanding service! Their commercial security system has significantly reduced theft and improved our overall safety. Highly recommended!",
    },
    {
      name: "Emily Rodriguez",
      role: "Property Manager",
      image: "/professional-woman-glasses.png",
      rating: 5,
      text: "Managing multiple properties is easier with Eagle Eye. Their scalable solutions and responsive support team are second to none.",
    },
    {
      name: "David Thompson",
      role: "Restaurant Owner",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The AI-powered analytics have been a game-changer for our business. We can monitor multiple locations from one dashboard with ease.",
    },
    {
      name: "Lisa Martinez",
      role: "Retail Store Manager",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Exceptional customer service and cutting-edge technology. The facial recognition feature has helped us prevent multiple security incidents.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }





  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_cflzjol",   // 🔹 replace with EmailJS Service ID
          "template_vk3v27i",  // 🔹 replace with EmailJS Template ID
          formRef.current,
          "2l6Cs3kRLAynezLeG"    // 🔹 replace with EmailJS Public Key
        )
        .then(
          () => {
            alert("✅ Message sent successfully!");
            formRef.current?.reset();
          },
          (error) => {
            console.error("❌ FAILED...", error);
            alert("Failed to send message. Try again.");
          }
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1628]" style={{ padding: "20px" }}>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0a1628]/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 animate-fade-in">
              <img
                src="/logo2.png"
                alt="Eagle Eye Logo"
                className="w-15 h-15 object-contain"
              />
              <span className="text-xl font-bold text-white">
                Eagle Eye Technology
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-300 hover:text-[#4a9eff] transition-colors">
                Home
              </a>
              <a href="#services" className="text-gray-300 hover:text-[#4a9eff] transition-colors">
                Services
              </a>
              <a href="#features" className="text-gray-300 hover:text-[#4a9eff] transition-colors">
                Features
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-[#4a9eff] transition-colors">
                Testimonials
              </a>
              {/* <a href="#about" className="text-gray-300 hover:text-[#4a9eff] transition-colors">
                About
              </a> */}
              <a href="#contact" className="text-gray-300 hover:text-[#4a9eff] transition-colors">
                Contact
              </a>
            </div>

            {/* <div className="hidden md:flex items-center gap-4">
              <Button
                variant="outline"
                className="border-[#4a9eff] text-[#4a9eff] hover:bg-[#4a9eff] hover:text-white transition-all bg-transparent"
              >
                Login
              </Button>
              <Button className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#5558e3] hover:to-[#7c4de7] text-white transition-all">
                Get Quote
              </Button>
            </div> */}

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-fade-in">
              <div className="flex flex-col gap-4">
                <a href="#home" className="text-gray-300 hover:text-[#4a9eff] transition-colors">
                  Home
                </a>
                <a href="#services" className="text-gray-300 hover:text-[#4a9eff] transition-colors">
                  Services
                </a>
                <a href="#features" className="text-gray-300 hover:text-[#4a9eff] transition-colors">
                  Features
                </a>
                <a href="#testimonials" className="text-gray-300 hover:text-[#4a9eff] transition-colors">
                  Testimonials
                </a>
                <a href="#about" className="text-gray-300 hover:text-[#4a9eff] transition-colors">
                  About
                </a>
                <a href="#contact" className="text-gray-300 hover:text-[#4a9eff] transition-colors">
                  Contact
                </a>
                <div className="flex flex-col gap-2 pt-2">
                  <Button variant="outline" className="border-[#4a9eff] text-[#4a9eff] bg-transparent">
                    Login
                  </Button>
                  <Button className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]">Get Quote</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Security cameras on building"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <Shield className="w-6 h-6 text-[#4a9eff]" />
              <span className="text-[#4a9eff] font-semibold">Professional Security Solutions</span>
            </div>

            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up leading-tight"
              style={{ animationDelay: "0.2s" }}
            >
              Advanced Security
              <br />
              <span className="text-[#4a9eff]">You Can Trust</span>
            </h1>

            <p
              className="text-gray-300 text-lg mb-8 animate-fade-in-up leading-relaxed"
              style={{ animationDelay: "0.3s" }}
            >
              Protect what matters most with our cutting-edge camera surveillance and door security systems. 24/7
              monitoring, AI-powered detection, and professional installation.
            </p>

            <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              {/* <Button className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#5558e3] hover:to-[#7c4de7] text-white px-8 py-6 text-lg group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
              >
                Learn More
              </Button> */}
            </div>

            <div className="flex flex-wrap gap-8 md:gap-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <div>
                <div className="text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-gray-400">Installations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#8b5cf6] mb-1">24/7</div>
                <div className="text-gray-400">Monitoring</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#4ade80] mb-1">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Security Services */}
      <section id="services" className="py-24 bg-[#0f1f3a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Security <span className="text-[#4a9eff]">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive security solutions tailored to protect your property and loved ones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: "CCTV Surveillance",
                description:
                  "High-definition camera systems with night vision, motion detection, and cloud storage for 24/7 monitoring.",
                features: [
                  "4K Ultra HD resolution cameras",
                  "Night vision up to 100ft",
                  "Motion detection alerts",
                  "Cloud & local storage options",
                ],
                delay: "0.1s",
              },
              {
                icon: Lock,
                title: "Access Control",
                description:
                  "Smart door locks, biometric systems, and keycard access for enhanced security and convenience.",
                features: [
                  "Biometric fingerprint scanners",
                  "Smart keycard systems",
                  "Mobile app integration",
                  "Multi-level access permissions",
                ],
                delay: "0.2s",
              },
              {
                icon: Shield,
                title: "Alarm Systems",
                description:
                  "Advanced intrusion detection with instant alerts to your phone and automatic emergency response.",
                features: [
                  "Instant mobile notifications",
                  "Glass break sensors",
                  "Door/window sensors",
                  "Emergency response integration",
                ],
                delay: "0.3s",
              },
              {
                icon: Clock,
                title: "24/7 Monitoring",
                description:
                  "Round-the-clock professional monitoring service ensuring immediate response to any security event.",
                features: [
                  "Professional monitoring center",
                  "Immediate threat response",
                  "Police/fire dispatch",
                  "Real-time status updates",
                ],
                delay: "0.4s",
              },
              {
                icon: Camera,
                title: "Video Analytics",
                description:
                  "AI-powered video analysis for facial recognition, license plate reading, and behavior detection.",
                features: [
                  "Facial recognition technology",
                  "License plate detection",
                  "Behavior pattern analysis",
                  "People counting & tracking",
                ],
                delay: "0.5s",
              },
              {
                icon: CheckCircle,
                title: "Installation & Support",
                description:
                  "Professional installation by certified technicians with ongoing maintenance and technical support.",
                features: [
                  "Certified technician installation",
                  "System configuration & testing",
                  "Training & documentation",
                  "Lifetime technical support",
                ],
                delay: "0.6s",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-[#0a1628] border-gray-800 hover:border-[#4a9eff] transition-all duration-300 group hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: service.delay }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#4ade80] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Eagle Eye Technologies */}
      <section id="features" className="py-24 bg-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-[#4a9eff]">Eagle Eye Technology</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Industry-leading security solutions backed by years of expertise and innovation
            </p>
          </div>



          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              {[
                {
                  title: "Cutting-Edge Technology",
                  description:
                    "We use the latest AI-powered cameras and smart security systems to provide unmatched protection.",
                },
                {
                  title: "Expert Installation Team",
                  description: "Our certified technicians ensure flawless installation and optimal system performance.",
                },
                {
                  title: "Affordable Pricing",
                  description:
                    "Premium security solutions at competitive prices with flexible payment plans available.",
                },
                {
                  title: "Rapid Response",
                  description: "Instant alerts and emergency response protocols to keep you safe at all times.",
                },
                {
                  title: "Scalable Solutions",
                  description: "Systems that grow with your needs, from single homes to large commercial properties.",
                },
                {
                  title: "Lifetime Support",
                  description: "Ongoing maintenance, updates, and 24/7 customer support for complete peace of mind.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#4ade80] group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {[
                  {
                    icon: Users,
                    number: "500+",
                    label: "Happy Customers",
                    delay: "0.1s",
                  },
                  {
                    icon: Award,
                    number: "5 Years",
                    label: "Industry Experience",
                    delay: "0.2s",
                  },
                  {
                    icon: Star,
                    number: "4.9/5",
                    label: "Customer Rating",
                    delay: "0.3s",
                  },
                  {
                    icon: TrendingUp,
                    number: "99.9%",
                    label: "System Uptime",
                    delay: "0.4s",
                  },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className="bg-[#0f1f3a] border-gray-800 hover:border-[#4a9eff] transition-all duration-300 hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: stat.delay }}
                  >
                    <CardContent className=" text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-2xl blur-3xl opacity-20"></div>
              <img
                src="/modern-security-control-room-with-multiple-monitor.jpg"
                alt="Security control room"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>



        </div>
      </section>

      {/* What Our Clients Say */}
      <section id="testimonials" className="py-24 bg-[#0f1f3a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="text-[#4a9eff]">Clients Say</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-[#0a1628] border-gray-800 hover:border-[#4a9eff] transition-all duration-300">
                      <CardContent className="p-8 md:p-12">
                        <div className="flex gap-1 mb-6 justify-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-[#fbbf24] text-[#fbbf24]" />
                          ))}
                        </div>
                        <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed italic text-center">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center justify-center gap-4">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full"
                          />
                          <div>
                            <div className="font-bold text-white text-lg">{testimonial.name}</div>
                            <div className="text-gray-400">{testimonial.role}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? "bg-[#4a9eff] w-8" : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-24 bg-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-[#4a9eff]">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to secure your property? Contact us today for a free consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left side - Contact Cards in 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-left">
              {/* Call Us Card */}
              <Card className="bg-[#0f1f3a] border-gray-800 hover:border-[#4a9eff] transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-2xl flex items-center justify-center mb-4">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Call Us</h3>
                  <p className="text-[#4a9eff] font-semibold mb-1">+91-9666522702</p>
                  <p className="text-[#4a9eff] font-semibold mb-1">+91-8919768028</p>
                  <p className="text-gray-400 text-sm">Available 24/7 for emergencies</p>
                </CardContent>
              </Card>

              {/* Email Us Card */}
              <Card className="bg-[#0f1f3a] border-gray-800 hover:border-[#4a9eff] transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-2xl flex items-center justify-center mb-4">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Email Us</h3>
                  <p className="text-[#4a9eff] font-semibold mb-1">Sales@techeagleeye.com </p>
                  <p className="text-gray-400 text-sm">We'll respond within 2 hours</p>
                </CardContent>
              </Card>

              {/* Visit Us Card */}
              <Card className="bg-[#0f1f3a] border-gray-800 hover:border-[#4a9eff] transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-2xl flex items-center justify-center mb-4">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Visit Us</h3>
                  <p className="text-[#4a9eff] font-semibold mb-1">5-89/A/1, Narsingi Gandipet
                    Road, Ranga Reddy
                    Hyderabad, Telangana
                    500089
                  </p>
                  {/* <p className="text-gray-400 text-sm">SC 12345</p> */}
                </CardContent>
              </Card>

              {/* Business Hours Card */}
              <Card className="bg-[#0f1f3a] border-gray-800 hover:border-[#4a9eff] transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-2xl flex items-center justify-center mb-4">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Business Hours</h3>
                  <p className="text-[#4a9eff] font-semibold mb-1 text-sm">Mon - Fri: 10:00 AM - 9:00 PM</p>
                  <p className="text-[#4a9eff] font-semibold mb-1 text-sm">Sat - Sun: 10:00 AM - 07:00 PM</p>
                  <p className="text-gray-400 text-sm">24/7 emergency support</p>
                </CardContent>
              </Card>
            </div>

            {/* Right side - Quote Request Form */}
            {/* <Card className="bg-[#0f1f3a] border-gray-800 animate-fade-in-right">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Request Your Quote</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-white mb-2 text-sm">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-[#0a1628] border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:border-[#4a9eff] focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 text-sm">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-[#0a1628] border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:border-[#4a9eff] focus:outline-none transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 text-sm">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-[#0a1628] border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:border-[#4a9eff] focus:outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 text-sm">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-[#0a1628] border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:border-[#4a9eff] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your security needs..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#5558e3] hover:to-[#7c4de7] text-white py-6 text-lg">
                    Request Quote
                  </Button>
                </form>
              </CardContent>
            </Card> */}

            <Card className="bg-[#0f1f3a] border-gray-800 animate-fade-in-right">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Request Your Quote</h3>
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div>
                    <label className="block text-white mb-2 text-sm">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="full_name" // 🔹 must match EmailJS template variable
                      required
                      className="w-full px-4 py-3 bg-[#0a1628] border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:border-[#4a9eff] focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 text-sm">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email" // 🔹 must match EmailJS template variable
                      required
                      className="w-full px-4 py-3 bg-[#0a1628] border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:border-[#4a9eff] focus:outline-none transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 text-sm">Phone Number</label>
                    <input
                      type="tel"
                      name="phone" // 🔹 must match EmailJS template variable
                      className="w-full px-4 py-3 bg-[#0a1628] border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:border-[#4a9eff] focus:outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 text-sm">Message</label>
                    <textarea
                      rows={4}
                      name="message" // 🔹 must match EmailJS template variable
                      className="w-full px-4 py-3 bg-[#0a1628] border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:border-[#4a9eff] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your security needs..."
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#5558e3] hover:to-[#7c4de7] text-white py-6 text-lg"
                  >
                    Request Quote
                  </Button>
                </form>
              </CardContent>
            </Card>




          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050d1a] py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-[#4a9eff]" />
              <span className="text-white font-bold">Eagle Eye Technology</span>
            </div>
            <p className="text-gray-400 text-sm">© 2025 Eagle Eye Technology. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#4a9eff] transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#4a9eff] transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-[#4a9eff] transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
