import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className=" w-screen h-screen md:pt-16">
      <Image
        src={"/working.jpeg"}
        alt="Work in progress"
        height={1200}
        width={1200}
        className=" w-full h-full object-contain p-12"
      />
    </div>
  );
};

export default Page;
