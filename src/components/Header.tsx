"use client";
import React from "react";
import { ModeToggle } from "./Mode";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  return (
  <div className="shadow dark:bg-slate-800">
      <header className="container  h-[80px] mx-auto w-[95%] lg:w-[78%] md:w-[90%] flex items-center justify-between  ">
      <h5 className="text-xl font-bold uppercase">
        Discord{" "}
        <span className="text-[10px] text-green-500 text-primary">
          Ask anything
        </span>
      </h5>
      <div className="flex gap-2">
        <Button  className="rounded-[30px] p-1 px-5">
          <Link href={'/register'}>Get Started</Link>
        </Button>
        <ModeToggle />
      </div>
    </header>
  </div>
  );
};

export default Header;
