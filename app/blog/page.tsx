"use client"
import React from "react";

export default function Blog() {
    return (
        <main className="min-h-dvh flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 w-full min-h-screen bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <div className="z-30 text-center flex flex-col items-center gap-8 pointer-events-none">
            <h1 className="text-3xl sm:text-5xl font-bold text-white">
            Blog Page
            </h1>
            <p className="text-white">
            This is the blog page. More content will be added soon!
            </p>
        </div>
        </main>
    );
}