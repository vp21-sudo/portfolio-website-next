"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { sendRequest } from "@/utils/api";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Page = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<{
    title: string;
    content: string;
    image: File | null;
  }>({ title: "", content: "", image: null });

  const handleBlogCreate = async () => {
    try {
      setLoading(true);
      if (form.title.length > 0 && form.content.length > 0 && form.image) {
        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("content", form.content);
        if (form.image) {
          formData.append("image", form.image);
        }
        // make api call to login endpoint
        const res = await sendRequest("/api/blog", "post", formData);
        // Store the token in local storage
        toast({
          title: `Blog added!`,
          className: " bg-green-400",
        });
        router.push("/blog");
      } else {
        toast({
          title: "Username and Password required!",
          className: " bg-amber-400",
        });
      }
      setLoading(false);
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
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  return (
    <div className=" w-full h-screen grid gap-8 mt-28 ">
      {/*Blog form*/}
      <div className=" w-full h-full container flex flex-col justify-center items-center">
        <h1 className=" w-full text-4xl font-bold text-center">Write a Blog</h1>
        <div className=" w-full h-[11rem] items-end">
          <Label className=" w-full text-left text-2xl ">Title</Label>
          <Input
            type="text"
            className=" w-full h-fit text-3xl font-bold capitalize bg-slate-50"
            value={form.title}
            onChange={(e) => {
              setForm({ ...form, title: e.target.value });
            }}
          />
          <Label className=" w-full text-left text-2xl ">Image</Label>
          <Input
            type="file"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setForm({ ...form, image: e.target.files[0] });
              }
            }}
          />
        </div>
        <div className=" w-full h-[32rem] items-start text-2xl">
          <Label className=" w-full text-left text-2xl  ">Blog content</Label>
          <ReactQuill
            className=" w-full h-[28rem] pb-20 bg-slate-50 font-xl"
            theme="snow"
            value={form.content}
            onChange={(value) => {
              setForm({ ...form, content: value });
            }}
            modules={modules}
            formats={formats}
          />
        </div>
        <Button
          onClick={() => {
            handleBlogCreate();
          }}
          className=" text-2xl font-medium h-12 w-2/3"
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default Page;
