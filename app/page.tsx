"use client";
import About from "@/components/about";
import AboutMe from "@/components/aboutme";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Grid from "@/components/grid";
import ProjectsList from "@/components/projects/project-grid";
const Page = () => {
  return (
    <>
      <About />
      <AboutMe />
      <ProjectsList />
      <Grid />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
