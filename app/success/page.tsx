"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
export default function SuccessPage() {
    const searchParams = useSearchParams();

const [loading, setLoading] = useState(false);


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


  const data = await response.json();


  if(data.url){
    window.location.href=data.url;
  }

}
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-20">

        <section className="rounded-3xl border bg-white p-10 text-center shadow-sm">

          <div className="text-5xl">
            ✓
          </div>

          <h1 className="mt-6 text-3xl font-bold text-green-600">
            ご登録ありがとうございます
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            CardCareの登録が完了しました。
          </p>


          <div className="mt-10 rounded-2xl bg-green-50 p-6 text-left">

            <h2 className="text-xl font-bold">
              CardCareの利用について
            </h2>

            <ul className="mt-5 space-y-3 text-gray-700">

              <li>
                ✓ 年120円の自動更新が設定されています
              </li>

              <li>
                ✓ Stripeの安全な決済システムを利用しています
              </li>

              <li>
                ✓ CardCareではカード番号を保持しません
              </li>

              <li>
                ✓ 登録後の管理はStripeの決済管理画面から行えます
              </li>

            </ul>

          </div>


          <div className="mt-10 rounded-2xl border p-6 text-left">

            <h2 className="font-bold">
              大切なお知らせ
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              CardCareは、年1回利用条件のあるカードの
              利用忘れを防ぐためのサポートサービスです。
            </p>

            <p className="mt-3 text-sm text-gray-600">
              カード会社の規約変更や利用条件変更などにより、
              年会費無料条件の達成を保証するものではありません。
              ご利用中のカード条件は各カード会社の公式情報をご確認ください。
            </p>

          </div>


         <button
 onClick={openPortal}
 disabled={loading}
 className="mt-10 w-full rounded-full bg-green-600 px-10 py-4 font-bold text-white"
>
 {loading
  ? "移動中..."
  : "契約内容を確認・変更する"}
</button>
          <a
            href="/"
            className="mt-10 inline-block rounded-full bg-green-500 px-10 py-4 font-bold text-white"
          >
            CardCareトップへ戻る
          </a>


        </section>


        <footer className="mt-10 text-center text-sm text-gray-500">

          <p>
            CardCare
          </p>

          <div className="mt-4 flex justify-center gap-5">

            <a
              href="/terms"
              className="underline hover:text-green-600"
            >
              利用規約
            </a>

            <a
              href="/privacy"
              className="underline hover:text-green-600"
            >
              プライバシーポリシー
            </a>

            <a
              href="/commerce"
              className="underline hover:text-green-600"
            >
              特商法表記
            </a>

          </div>

        </footer>

      </div>
    </main>
  );
}