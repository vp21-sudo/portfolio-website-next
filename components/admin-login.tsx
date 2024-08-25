"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { sendRequest } from "@/utils/api";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { AxiosError } from "axios";

type AdminLoginProps = {
  setModel: Function;
};

export function AdminLogin({ setModel }: AdminLoginProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });

  const handleLoginSubmit = async () => {
    try {
      setLoading(true);
      if (form.username.length > 0 && form.password.length > 0) {
        // make api call to login endpoint
        const res = await sendRequest("/api/no_auth/login", "post", form);
        // Store the token in local storage
        localStorage.setItem("authToken", res.token);
        toast({
          title: `Welcome back,${form.username} !`,
          className: " bg-green-400",
        });
        setModel();
        router.push("/admin");
      } else {
        toast({
          title: "Username and Password required!",
          className: " bg-amber-400",
        });
      }
      setLoading(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
        if (error.response?.status !== 200) {
          toast({
            variant: "destructive",
            title: error.response?.data.message || "Something went wrong",
          });
        }
      }
      setLoading(false);
    }
  };
  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-[425px] bg-slate-50">
        <DialogHeader className=" w-full grid grid-cols-2 items-center">
          <DialogTitle className=" w-full text-3xl font-semibold">
            Admin Login
          </DialogTitle>
          <DialogClose
            className=" focus:outline-none w-full flex justify-end items-center"
            onClick={() => {
              router.replace("/");
            }}
          >
            <X />
          </DialogClose>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-lg front-medium ">
              Username:
            </Label>
            <Input
              id="name"
              type="email"
              className=" col-span-3 bg-slate-50"
              value={form.username}
              onChange={(e) => {
                setForm({ ...form, username: e.target.value });
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="username"
              className="text-right text-lg front-medium "
            >
              Password:
            </Label>
            <Input
              id="pass"
              type="password"
              className="col-span-3 bg-slate-50"
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={handleLoginSubmit}
            disabled={loading}
            className=" bg-gray-700 hover:bg-gray-800  text-xl font-semibold p-6"
          >
            Login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
