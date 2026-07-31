"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SuccessContent() {

  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
  if (typeof window !== "undefined" && "gtag" in window) {
    (window as any).gtag("event", "purchase", {
      transaction_id: searchParams.get("session_id") ?? "unknown",
      currency: "JPY",
      value: 120,
    });
  }
}, [searchParams]);


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
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-gray-900">

      <div className="max-w-md text-center">

        <h1 className="text-3xl font-bold">
          お申し込みありがとうございます
        </h1>


        <p className="mt-6 text-gray-600">
          CardCareの利用条件達成サポートが開始されました。
        </p>


        <p className="mt-3 text-gray-600">
          年1回利用条件のカードを安心してご利用ください。
        </p>


        <button
          onClick={openPortal}
          disabled={loading}
          className="mt-8 rounded-full bg-green-500 px-8 py-3 font-bold text-white"
        >
          {loading ? "処理中..." : "契約内容を確認する"}
        </button>

      </div>

    </main>
  );
}