"use client";

import {useState} from "react";

export default function Home() {

  const [message, setMessage] = useState(""); //Backend den gelen mesajı tutacak state
  
  async function handleClick(){
    const response = await fetch("api/hello"); //Backend e request gönder

    const data = await response.json(); //Gelen cevabı JSON a çevir

    setMessage(data.message); //Backend den gelen mesajı state e kaydet
  }

  return (
    <div className="p-10">

      <button
      onClick={handleClick}
      className="rounded-lg bg-black px-4 py-2 text-white"
      >
        Send Request
      </button>

      <p className="mt-5 text-xl">
        {message}
      </p>
    </div>
  )
}