"use client";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { SuggestionsList } from "@/components/SuggestionsList";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col max-w-[50rem] m-auto text-floral_white-400 my-10">
      <Header />
      <Navbar />
      <SuggestionsList />
    </main>
  );
}
