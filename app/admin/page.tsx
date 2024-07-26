"use client"

import Copyright from "@/components/Copyright";
import Image from "next/image";
import logo from "../../assets/logo-cropped.png";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useToast } from "@/components/ui/use-toast";
import { generalStore } from "@/store/store";
import { useState } from "react";

const AdminPage = () => {
  const { toast } = useToast();
  const updateState = generalStore((state: any) => state.updateState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateState({ loading: true });

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken(); // Get the ID token
      document.cookie = `token=${token}; path=/`;

      console.log(token);

      toast({
        title: "Login Successful",
        description: "You have successfully logged in.",
      });
      window.location.href="/admin/dashboard";
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: (error as Error).message,
      });
    }

    updateState({ loading: false });
  };

  return (
    <main className="pt-36 pb-20 min-h-screen px-1.5 md:px-10 lg:px-20 xl:px-40 flex justify-center items-center ">
      <div className="flex flex-col gap-7 bg-white p-5 md:py-10 xl:py-20 md:px-10 shadow-2xl rounded-lg items-center justify-center text-sm">
        {/* POLICE LOGO */}
        <Image
          className=" rounded-[1.25rem] "
          src={logo}
          alt="Police - Nigeria Police Force Logo@pngkey.com"
          width={100}
          height={100}
        />

        {/* LOGIN FORM */}
        <div className=" flex flex-col gap-6 pb-8 ">
          {/* INTRO */}
          <div className=" flex flex-col gap-4 ">
            <p className=" font-medium text-2xl ">Welcome Back 👋</p>
            <p className=" font-normal text-base ">
              See something - Say something. Your gateway to a safer community
              starts here.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleLogin} className=" flex flex-col gap-4 ">
            {/* EMAIL */}
            <div className=" flex flex-col gap-2 ">
              <label htmlFor="email" className=" text-sm font-normal ">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Example@email.com"
                className=" h-11 bg-[#F3F7FB] border border-[#D4D7E3] rounded-lg p-4 text-sm "
              />
            </div>

            {/* PASSWORD */}
            <div className=" flex flex-col gap-2 ">
              <label htmlFor="password" className=" text-sm font-normal ">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="**********"
                className=" h-11 bg-[#F3F7FB] border border-[#D4D7E3] rounded-lg p-4 text-sm "
              />
            </div>

            {/* FORGOT PASSWORD */}
            {/* <p className=" font-normal text-sm text-[#1E4AE9] text-right ">
              Forgot Password?
            </p> */}

            <button
              type="submit"
              className="bg-[#162D3A] text-white py-4 rounded-xl w-full"
            >
              Sign In
            </button>
          </form>

          {/* <p className=" text-base font-normal text-center ">
            Don&apos;t you have an account?{" "}
            <span className=" text-[#1E4AE9] ">Sign up</span>
          </p> */}
        </div>

        <Copyright />
      </div>
    </main>
  );
};

export default AdminPage;
