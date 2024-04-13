"use client"
import About from "@/components/about"
import AboutMe from "@/components/aboutme"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Grid from "@/components/grid"
import { useEffect } from "react"

const Page = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  })
  return (
    <>
    <About/>
    <AboutMe/>
    <Grid/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Page