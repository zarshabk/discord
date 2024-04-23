"use client";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "./Mode";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
const [scroll,setScroll]=useState(false)
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 350) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


  return (
  <div className={`${scroll ? "fixed top-0 w-full z-30 dark:bg-slate-900":""} shadow light:bg-white dark:bg-slate-900 bg-white z-20 `}>
      <header className={`container   h-[80px] mx-auto w-[95%] lg:w-[78%] md:w-[90%] flex items-center justify-between  z-20 `}>
     <Link href={'/'}> <h5 className="text-xl font-bold uppercase">
        Discord{" "}
        <span className="text-[10px] text-green-500 text-primary">
          Ask anything
        </span>
      </h5></Link>
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
