"use client";
import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./project-cards";
const ProjectsList = () => {
  return (
    <div className=" w-screen bg-slate-50 overflow-hidden h-fit grid grid-cols-1 md:grid-cols-2 p-4 md:p-8 gap-4 mt-16 ">
      <h1 className=" md:col-span-2 text-slate-900 font-semibold text-3xl md:text-4xl text-left px-2 underline">
        Projects:
      </h1>
      <ProjectCard
        name="portfolio"
        imgUrl="/portproj.png"
        description={`This is my software engineering portfolio. I'm passionate about software engineering and love creating unique applications. I'm always up for using the latest technologies to build custom components. This website is still under construction, but I'm constantly adding new features. I'd love to hear your feedback and collaborate on new projects!`}
        webiste="/"
        github="https://github.com/vp21-sudo/portfolio-website-next"
        techs={["Next JS", "react", "Redis", "GSAP", "Vercel"]}
      />

      <ProjectCard
        name="Public S3"
        description={` I wasn't a fan of the standard AWS S3 interface, so I decided to roll my own!  Amazon S3's public buckets are great for sharing images, and their powerful SDK offers tons of flexibility. Since S3 is one of my most frequently used AWS services, building a custom front-end seemed like a natural fit. Now I have a streamlined way to manage my image uploads that matches my exact needs.`}
        webiste="https://public.sudovp.com"
        github="https://github.com/vp21-sudo/public-s3"
        imgUrl="/publicproj.png"
        techs={["Next JS", "AWS-S3", "Redis", "Server Actions", "Vercel"]}
      />

      <ProjectCard
        name="Mango"
        imgUrl="/mangoproj.png"
        description={` Mango is my open-source developer tool designed to streamline working with NoSQL databases like MongoDB. If you've ever found yourself wrestling with Mongoose or other JSON-based schemas, Mango is for you!  It uses the Monaco editor for code interactions and React Flow for intuitive visualizations, making it super easy to manage and understand your database schemas `}
        webiste="https://mango.sudovp.com"
        github="https://github.com/vp21-sudo/mango"
        techs={["Next JS", "Monaco Editor", "React Flow", "Dev Tool", "Vercel"]}
      />

      <ProjectCard
        name="Task Trek"
        imgUrl="https://sthreepublicproject.s3.ap-south-1.amazonaws.com/1717089801021_task-trek.png"
        description={` Task Trek is an offline Flutter to-do app designed for seamless task management without the need for an internet connection. It offers a clean, intuitive interface for users to organize and track their tasks efficiently. Users can create, edit, and delete tasks, categorize them, and set reminders, all within the app. Task Trek's offline functionality ensures that users can access and manage their tasks anytime, anywhere, without worrying about connectivity issues. `}
        images="https://sthreepublicproject.s3.ap-south-1.amazonaws.com/1717089801021_task-trek.png"
        github="https://github.com/vp21-sudo/Task-Trek"
        techs={[
          "Flutter",
          "Dart",
          "SQL-Lite",
          "Mobile Application Development",
        ]}
      />
    </div>
  );
};

export default ProjectsList;
