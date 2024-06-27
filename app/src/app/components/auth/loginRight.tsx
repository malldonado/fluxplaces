"use client";

import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import { GrFormViewHide } from "react-icons/gr";
import axios from "axios";
import NextLink from "next/link";
import Image from "next/image";

const LoginRight: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [router, setRouter] = useState<any>(null); // Adicionei o estado do router

  useEffect(() => {
    setIsClient(true);
    if (isClient) {
      const nextRouter = require("next/router");
      setRouter(nextRouter);
    }
  }, [isClient]);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    try {
      await axios.post("/login", { email, password });
      router.push("/account");
    } catch (e) {
      alert("Login failed");
    }
  };

  return (
    <div className="w-[45%]">
      <NextLink href="/" passHref>
        <IoCloseSharp className="absolute text-[45px] top-5 right-5 text-[#2144e1] cursor-pointer" />
      </NextLink>
      <div className="flex flex-col items-center justify-center h-screen">
        <Image
          width={150}
          height={150}
          src="/img/logo.svg"
          alt="Logo"
          className="mt-8 ml-8"
        />
        <div className="mt-10 w-[50%]">
          <h2 className="text-[26px] font-bold nunito-font">Login</h2>
          <p className="nunito-font text-[14px] mt-4 text-gray-500">
            Sign in with your data that you entered during your registration.
          </p>
          <form className="mt-4" onSubmit={handleLoginSubmit}>
            <label
              className="nunito-font text-[14px] mt-4 text-gray-500"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="w-full block outline-none border-[1px] border-gray-300 rounded-md h-[40px] p-2 text-[#2144e1] font-bold nunito-font mt-1 mb-2 placeholder:font-normal"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                setEmail(ev.target.value)
              }
            />
            <label
              className="nunito-font text-[14px] text-gray-500"
              htmlFor="Password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="w-full block outline-none border-[1px] border-gray-300 rounded-md h-[40px] p-2 text-[#2144e1] font-bold nunito-font mt-1 placeholder:font-normal mb-4"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
              <span
                className="absolute bottom-[10px] right-2 cursor-pointer"
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                  <GrFormViewHide className="text-[#2144e1] text-[20px]" />
                ) : (
                  <BiShow className="text-[#2144e1] text-[20px]" />
                )}
              </span>
            </div>
            <button className="w-full h-[40px] bg-[#2144e1] mt-4 text-white nunito-font rounded-md">
              Sign in
            </button>
            <span className="w-full cursor-pointer h-[40px] bg-[#3870ff] mt-4 text-white nunito-font rounded-md flex justify-center items-center">
              <FaGoogle className="mr-2" />
              Sign in with Google
            </span>
            <p className="pt-4 nunito-font text-gray-500 text-[14px] font-normal">
              Don’t have an account?{" "}
              <NextLink href="/register" passHref>
                <span className="text-[#2144e1] text-[15px] font-bold">
                  Sign up
                </span>
              </NextLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRight;
