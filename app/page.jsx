"use client";
import React from "react";
import { Button } from "flowbite-react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import Link from "next/link";

// Dynamically import Confetti to avoid SSR issues
const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function BirthdayPage() {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  // dark theme

  React.useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  return (
    <>
      <Head>
        <title>Happy Birthday!</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen min-w-full bg-night-400 bg-background dark:bg-foreground text-foreground shadow-xl shadow-burgundy-500">
        <Confetti width={width} height={height} />
        <div className="flex flex-col items-center justify-center text-center space-y-6 p-6 bg-floral_white-400 shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-burgundy-500">
            Happy Birthday!
          </h1>
          <p className="text-lg text-burgundy-100">
            Out of a pure selfishness, what I want is for you is to have many more! 😊
          </p>
          <Link
            href="/about-you"
            color="burgundy"
            className="bg-burgundy-500 hover:bg-burgundy-600 text-floral_white-400 transition duration-300 ease-in-out py-2 px-4 rounded-lg"
          >
            Continue!
          </Link>
        </div>
      </div>
    </>
  );
}
