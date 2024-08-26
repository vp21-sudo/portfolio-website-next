"use client";
import Footer from "@/components/footer";
import { useToast } from "@/components/ui/use-toast";
import { sendRequest } from "@/utils/api";
import { AxiosError } from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const params = useParams();
  const handle = params.handle;
  const { toast } = useToast();
  const router = useRouter();
  // make api call to get blogs list
  const [blog, setBlog] = useState({
    _id: "",
    title: "",
    handle: "",
    content: "",
    createdAt: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlog = async () => {
      try {
        // make api call to login endpoint
        const res = await sendRequest(
          "/api/no_auth/blogs/handle/" + handle,
          "get",
        );
        setBlog(res);
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response?.status !== 200) {
            if (error.status === 401) {
              router.replace("/blog");
            }
            toast({
              variant: "destructive",
              title: error.response?.data.message || "Something went wrong",
            });
          }
        }
        setLoading(false);
      }
    };
    getBlog();
  }, [toast, router, handle]);
  return (
    <>
      <div className=" relative flex justify-center items-start w-full h-full ">
        <div className="  container  absolute w-full h-full  pt-28  p-8 rounded-xl  ">
          <Image
            src={
              "https://vp-blogs.s3.ap-south-1.amazonaws.com/blog/" + blog.handle
            }
            alt="blog"
            width={800}
            height={800}
            className="  md:float-right w-full md:w-[45rem] md:h-[45-rem] mx-8 bg-slate-700 object-cover rounded-xl"
          />

          <h1 className=" w-full md:w-fit  px-4 py-4 text-3xl md:text-4xl font-semibold text-center flex justify-center items-start md:mt-12">
            {blog.title}
          </h1>
          <div
            className=" w-full text-xl md:text-2xl md:px-8 py-8 "
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
