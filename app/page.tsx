"use client";
import { generateTextAction } from "@/app/actions/aiActions";
import { useState } from "react";
import ReactMarkdown from "react-markdown"

export default function Home() {
const [prompt,setPrompt]=useState<string>("")
const [output,setOutput]=useState<string>("")
  const handelSendPrompt = async()=>{
      const response=await generateTextAction(prompt);
      setOutput(response)
  }
  return (
      <main className="flex w-screen h-screen flex-col items-center justify-between py-32 px-16 overflow-auto bg-white dark:bg-black sm:items-start pb-16">
        {output && (<div>
          <h1 className="text-2xl font-bold mb-4">AI Response:</h1>
          <ReactMarkdown>{output}</ReactMarkdown>
        </div>)}
        <div className="input-area fixed bottom-6 px-24 py-2 flex items-center justify-between w-full">
        <input className="border p-2 rounded-mg w-[80%] outline-none" value={prompt} placeholder="Enter your text here..." onChange={(e)=>setPrompt(e.target.value)}></input>
        <button onClick={handelSendPrompt} className="bg-neutral-700 text-white p-2 cursor rounded-mg ml-4 w-[18%] ">Send</button>
        </div>
      </main>
  
  );
}
