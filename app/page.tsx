"use client"
import About from "@/components/about"
import AboutMe from "@/components/aboutme"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Grid from "@/components/grid"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"
const Page = () => {
  const [state, setState] = useState(0);
  const { scrollYProgress } = useScroll()
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setState(scrollYProgress.get())
  });
  return (
    <motion.div>
      <div className=" sticky left-0 top-16 h-2 origin-left w-screen z-50 bg-slate-400">
      <motion.div
        className=' sticky left-0 top-16 h-2 origin-left w-screen z-50 bg-slate-50'
        style={{ scaleX: scrollYProgress }}
      >
      </motion.div>
      </div>
      <About />
      <AboutMe />
      <Grid />
      <Contact />
      <Footer />
    </motion.div>
  )
}

export default Page