"use client";
import Footer from "@/components/footer";
import Loading from "@/components/loaders";
import { useToast } from "@/components/ui/use-toast";
import { sendRequest } from "@/utils/api";
import delay from "@/utils/delay";
import { AxiosError } from "axios";
import dayjs from "dayjs";
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
        await delay(200);
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
            if (error.status === 429) {
              router.replace("/");
            }
          }
        }
      } finally {
        setLoading(false);
      }
    };
    getBlog();
  }, [toast, router, handle]);
  return loading ? (
    <div className=" w-full h-screen justify-center items-center">
      <Loading color="slate-900" />
    </div>
  ) : (
    <>
      <div className=" relative flex justify-center items-start w-full h-full ">
        <div className="  container min-h-screen  w-full h-full  pt-28  p-8 rounded-xl flex lg:block flex-col justify-center items-center  ">
          <Image
            src={
              "https://vp-blogs.s3.ap-south-1.amazonaws.com/blog/" + blog.handle
            }
            alt="blog"
            width={800}
            height={800}
            className="  md:float-right w-full md:w-[45rem] md:h-[45-rem] md:mx-8 bg-slate-700 object-cover rounded-xl"
          />

          <h1 className=" w-full md:w-fit  px-4 py-4 text-2xl md:text-3xl lg:text-4xl font-semibold text-center flex justify-center items-start md:mt-12">
            {blog.title}
          </h1>
          <p className=" w-full px-4 text-center font-medium text-slate-500">
            Published on: {dayjs(blog.createdAt).format("MMMM D, YYYY")}
          </p>
          <div
            className=" w-full text-xl md:text-2xl md:px-8 py-8 "
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Page;
