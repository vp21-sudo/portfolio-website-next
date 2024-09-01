"use client";
import BlogBox from "@/components/blog-container";
import Footer from "@/components/footer";
import Loading from "@/components/loaders";
import { useToast } from "@/components/ui/use-toast";
import { sendRequest } from "@/utils/api";
import delay from "@/utils/delay";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const { toast } = useToast();
  const router = useRouter();
  // make api call to get blogs list
  const [blogs, setBlogs] = useState({ payload: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        await delay(200);
        // make api call to login endpoint
        const res = await sendRequest("/api/no_auth/blogs/list", "get");
        setBlogs(res);
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response?.status !== 200) {
            if (error.status === 401) {
              router.replace("/blog");
            }
            if (error.status === 429) {
              router.replace("/");
            }
            toast({
              variant: "destructive",
              title: error.response?.data.message || "Something went wrong",
            });
          }
        }
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, [toast, router]);
  return loading ? (
    <div className=" w-full h-screen flex justify-center items-center bg-slate-950">
      <Loading />
    </div>
  ) : (
    <>
      <div className=" w-full h-full min-h-screen mt-16 bg-slate-950 ">
        <div className=" w-full h-full md:container mx-auto bg-zinc-950 text-slate-50 grid grid-cols-1 md:grid-cols-3 p-4 md:p-16 gap-4 md:gap-16">
          <h1 className=" text-5xl font-semibold md:col-span-3">Blogs</h1>
          {blogs.payload.map(
            (
              data: {
                title: string;
                content: string;
                handle: string;
                createdAt: string;
              },
              index,
            ) => (
              <BlogBox
                title={data.title}
                handle={data.handle}
                content={data.content}
                image={data.handle}
                createdAt={data.createdAt}
                key={index}
                index={index}
              />
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
