"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SuccessContent() {

  const searchParams = useSearchParams();

  const [loading,setLoading] = useState(false);


  async function openPortal(){

    setLoading(true);

    const session_id =
      searchParams.get("session_id");


    const response =
      await fetch("/api/portal",{

        method:"POST",

        headers:{
          "Content-Type":"application/json",
        },

        body:JSON.stringify({
          session_id,
        }),

      });


    const data =
      await response.json();


    if(data.url){
      window.location.href=data.url;
    }

  }


  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      {/* ここに現在のSuccessページの中身を全部移動 */}

    </main>
  );
}