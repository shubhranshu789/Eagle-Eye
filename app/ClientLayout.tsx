"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => prev + 1)
    }, 2000) // Slightly faster for better rhythm

    const timer = setTimeout(() => {
      clearInterval(interval)
      setTimeout(() => setDone(true), 2000) // Perfect hold time for impact
    }, 1000 * 7)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [])

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      filter: "blur(20px)",
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      rotateX: 0,
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1], // Custom easing for ultra-smooth feel
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(15px)",
      y: -50,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
      rotateY: 45,
      scale: 0.5,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  }

  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.2,
      rotateY: 180,
      rotateZ: 45,
      filter: "blur(30px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      rotateZ: 0,
      filter: "blur(0px)",
      transition: {
        duration: 2.0,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 60,
        damping: 15,
      },
    },
  }

  const appVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.9,
      filter: "blur(20px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3,
      },
    },
  }

  return (
    <AnimatePresence mode="wait">
      {!done ? (
        <motion.div
          key="preloader"
          className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="absolute inset-0 opacity-30">
            <motion.div
              className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.4, 0.8, 1.2, 1],
                x: [0, 50, -30, 20, 0],
                y: [0, -20, 40, -10, 0],
                opacity: [0.1, 0.4, 0.2, 0.3, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 0.8, 1.5, 1, 1.2],
                x: [0, -40, 60, -20, 0],
                y: [0, 30, -50, 15, 0],
                opacity: [0.1, 0.3, 0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"
              animate={{
                scale: [0.8, 1.3, 1, 0.9, 0.8],
                rotate: [0, 180, 360],
                opacity: [0.05, 0.25, 0.15, 0.2, 0.05],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: 4,
              }}
            />
          </div>

          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {step < 3 ? (
            <motion.div
              className="flex gap-8 perspective-1000 relative z-10"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
              }}
            >
              {step >= 0 && (
                <motion.span
                  className="text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent cursor-default relative"
                  variants={wordVariants}
                  whileHover={{
                    scale: 1.15,
                    rotateY: 10,
                    textShadow: "0 0 30px rgba(255,255,255,0.8)",
                    filter: "drop-shadow(0 0 20px rgba(255,255,255,0.5))",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  Smart
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-lg blur-xl -z-10"
                    animate={{
                      opacity: [0, 0.3, 0],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </motion.span>
              )}
              {step >= 1 && (
                <motion.span
                  className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent cursor-default relative"
                  variants={wordVariants}
                  whileHover={{
                    scale: 1.15,
                    rotateY: -10,
                    textShadow: "0 0 30px rgba(59,130,246,0.8)",
                    filter: "drop-shadow(0 0 20px rgba(59,130,246,0.6))",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  Secure
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent rounded-lg blur-xl -z-10"
                    animate={{
                      opacity: [0, 0.4, 0],
                      scale: [0.8, 1.3, 0.8],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                </motion.span>
              )}
              {step >= 2 && (
                <motion.span
                  // className="text-6xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-teal-300 bg-clip-text text-transparent cursor-default relative"
                  className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-default relative"
                  // bg-gradient-to-r from-blue-400 via-purple-500 via-cyan-400 to-blue-500
                  variants={wordVariants}
                  whileHover={{
                    scale: 1.15,
                    rotateY: 10,
                    // textShadow: "0 0 30px rgba(34,197,94,0.8)",
                    // filter: "drop-shadow(0 0 20px rgba(34,197,94,0.6))",
                    filter: "drop-shadow(0 0 40px rgba(59,130,246,1)) drop-shadow(0 0 80px rgba(147,51,234,0.5))",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  Seamless
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-transparent rounded-lg blur-xl -z-10"
                    animate={{
                      opacity: [0, 0.3, 0],
                      scale: [0.8, 1.4, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                </motion.span>
              )}
            </motion.div>
          ) : (
            <motion.div className="relative z-10 pb-2" variants={logoVariants} initial="hidden" animate="visible">
              <motion.h1
                className="text-6xl font-extrabold tracking-widest leading-tight bg-gradient-to-r from-blue-400 via-purple-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-default relative"
                whileHover={{
                  scale: 0.9,
                  rotateY: 5,
                  filter: "drop-shadow(0 0 40px rgba(59,130,246,1)) drop-shadow(0 0 80px rgba(147,51,234,0.5))",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  backgroundPosition: {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
                  hover: { type: "spring", stiffness: 200, damping: 15 },
                }}
                style={{
                  backgroundSize: "400% 400%",
                }}
              >

                <motion.div
                  className="flex justify-center items-center mt-10"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, 5, -5, 0],
                    boxShadow: "0 0 20px rgba(74,158,255,0.8), 0 0 40px rgba(147,51,234,0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  drag
                  dragConstraints={{ top: -50, bottom: 50, left: -50, right: 50 }}
                  dragElastic={0.3}
                  // className="relative"
                >
                  <motion.img
                    src="/logo2.png"
                    alt="Eagle Eye Logo"
                    className="w-70 h-auto object-contain"
                    animate={{
                      rotate: [0, 2, -2, 0],
                      filter: [
                        "drop-shadow(0 0 10px rgba(74,158,255,0.5))",
                        "drop-shadow(0 0 20px rgba(74,158,255,0.8))",
                        "drop-shadow(0 0 10px rgba(74,158,255,0.5))",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

              </motion.h1>
            </motion.div>
          )}

          <motion.div
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="flex space-x-3">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.4, 1, 0.4],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              ))}
            </div>
            {/* <motion.p
              style = {{display : "flex" , flexDirection : "column" , justifyContent : "center" , alignItems : "center"}}
              className="text-sm text-gray-400 mt-4 text-center font-medium"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Loading Experience...
            </motion.p> */}
          </motion.div>
        </motion.div>
      ) : (
        <motion.div key="app" variants={appVariants} initial="hidden" animate="visible" className="min-h-screen">
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
