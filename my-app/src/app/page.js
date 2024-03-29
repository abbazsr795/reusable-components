"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { toaster } from "evergreen-ui";

export default function Home() {

  const {push} = useRouter()

  return (
    <div className="p-5 m-2">
      <p className="font-bold text-5xl text-center text-wrap">Unlock access to stunning web components that take inspiration from the exceptional products crafted by Racket Labs.</p>
      <br></br>
      <br></br>
      <br></br>
      <div className="flex flex-row justify-center">
        <button onClick={() => push("/buttons")} className="border border-1 border-slate-600 hover:border-slate-400 rounded px-3 py-2 w-full md:w-96 text-md text-slate-600 hover:text-slate-400">Buttons</button>
      </div>
      <br></br>
      <div className="flex flex-row justify-center">
        <button onClick={() => push("/cards")} className="border border-1 border-slate-600 hover:border-slate-400 rounded px-3 py-2 w-full md:w-96 text-md text-slate-600 hover:text-slate-400">Cards</button>
      </div>
      <br></br>
      <div className="flex flex-row justify-center">
        <button onClick={() => toaster.notify("Scroll down!")} className="border border-1 border-slate-600 hover:border-slate-400 rounded px-3 py-2 w-full md:w-96 text-md text-slate-600 hover:text-slate-400">Footer</button>
      </div>
      <br></br>
      <div className="flex flex-row justify-center">
        <button onClick={() => toaster.notify("Look up!")} className="border border-1 border-slate-600 hover:border-slate-400 rounded px-3 py-2 w-full md:w-96 text-md text-slate-600 hover:text-slate-400">Header</button>
      </div>
      <br></br>
      <div className="flex flex-row justify-center">
        <button onClick={() => push("/settings")} className="border border-1 border-slate-600 hover:border-slate-400 rounded px-3 py-2 w-full md:w-96 text-md text-slate-600 hover:text-slate-400">Settings Box</button>
      </div>
      <br></br>
      <div className="flex flex-row justify-center">
        <button onClick={() => push("/signin")} className="border border-1 border-slate-600 hover:border-slate-400 rounded px-3 py-2 w-full md:w-96 text-md text-slate-600 hover:text-slate-400">SignIn</button>
      </div>
      <br></br>
      <div className="flex flex-row justify-center">
        <button onClick={() => push("/signup")} className="border border-1 border-slate-600 hover:border-slate-400 rounded px-3 py-2 w-full md:w-96 text-md text-slate-600 hover:text-slate-400">SignUp</button>
      </div>
    </div>
  );
}
