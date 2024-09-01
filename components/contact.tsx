"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useFormState } from "react-dom";
import Submit from "./submit-btn";
import { Button } from "./ui/button";
import { sendRequest } from "@/utils/api";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import Loading from "./loaders";

const Contact = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const handleSendMessage = async () => {
    try {
      setLoading(true);
      if (form.name.length > 0 && form.email.length > 0 && form.message) {
        const res = await sendRequest(
          "/api/no_auth/send/message",
          "post",
          form,
        );
        // Store the token in local storage
        toast({
          title: `Message Sent!`,
          className: " bg-green-400",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Please fill all the fields",
          className: " bg-amber-400",
        });
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
        if (error.response?.status !== 200) {
          if (error.status === 401) {
            router.replace("/");
          }
          if (typeof error.response?.data.message === "object") {
            let key = Object.keys(error.response.data.message)[1];
            toast({
              variant: "destructive",
              title:
                "invalid value for " + key + "field" || "Something went wrong",
            });
          } else {
            toast({
              variant: "destructive",
              title: error.response?.data.message || "Something went wrong",
            });
          }
        }
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 w-full items-center py-20 bg-slate-100">
        <div className=" w-full px-8 h-4/5 md:p-4 md:ms-12 rounded-xl">
          <Image
            src="/contact.jpg"
            alt="logo"
            width={400}
            height={400}
            className=" w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="  w-full px-12 rounded-xl text-slate-900 transition-all ease-in-out duration-200">
          <h1 className=" w-full md:px-20 pb-2 text-center md:text-left text-2xl md:text-4xl font-semibold mb-2">
            Contact Me:
          </h1>
          <div className=" w-full flex flex-col justify-center items-center">
            <input
              type="text"
              placeholder="Name"
              required
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className=" w-full md:w-4/5 p-2 rounded-lg bg-slate-200 border-2 border-slate-50 text-slate-900 mb-2 text-lg md:text-2xl font-medium"
            />
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className=" w-full md:w-4/5 p-2 rounded-lg bg-slate-200 border-2 border-slate-50 text-slate-900 mb-2 text-lg md:text-2xl font-medium"
            />
            <textarea
              placeholder="Message"
              rows={5}
              name="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className=" resize-none w-full md:w-4/5 p-2 rounded-lg bg-slate-200 border-2 border-slate-50 text-slate-900 mb-2 text-lg md:text-2xl font-medium"
            />
            <div className=" w-full md:w-4/5 pt-2 flex justify-end items-center">
              <Button
                className=" w-full md:w-48 h-12 text-xl font-bold"
                onClick={(e) => handleSendMessage()}
              >
                {loading ? <Loading size={28} /> : "Submit"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
