import React from "react";
import Image from "next/image";

export default function TitlePage() {
  return (
    <main className="bg-[url('/catrain.gif')] flex flex-col items-center justify-center h-screen bg-cover">
      <h1 className="text-6xl font-bold text-white shadow-lg relative">Premium QTea</h1>
    </main>
  );
}
