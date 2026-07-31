"use client";

import { useState } from "react";

export default function Home() {

  const [loading, setLoading] = useState(false);


  const handleCheckout = async () => {

  setLoading(true);

  try {

    const response = await fetch(
      "/api/checkout",
      {
        method: "POST",
      }
    );


    const text = await response.text();

console.log("API RESPONSE:", text);

if (!text) {
  alert("APIから返答がありません");
  return;
}

const data = JSON.parse(text);


    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("決済ページの作成に失敗しました");
    }


  } catch (error) {

    console.error(error);
    alert("エラーが発生しました");

  } finally {

    setLoading(false);

  }

};



  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-5xl px-6 py-12">

        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-green-600">
            CardCare
          </h1>
        </header>


        {/* Hero */}
        <section className="mt-20 text-center">

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            年1回利用条件のカード、
            <br />
            もう管理しなくていい。
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-600">
            無駄なクレジットカードの年会費を回避したい人のために立ち上げた、
            月額換算月たったの10円、年120円のカードサポートサービスです。
          </p>

          <button
  onClick={handleCheckout}
  disabled={loading}
  className="mt-10 w-full rounded-full bg-green-500 px-10 py-4 text-lg font-bold text-white shadow md:w-auto"
>
  {loading ? "処理中..." : "年120円で始める"}
</button>

          <p className="mt-3 text-sm text-gray-500">
            クレジットカード決済・アカウント作成不要
          </p>

        </section>


        {/* Problem */}
        <section className="mt-24 rounded-3xl bg-green-50 p-8">

          <h3 className="text-2xl font-bold">
            こんな経験ありませんか？
          </h3>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✓ 年1回の利用で年会費が無料になるカードを持っている</li>
            <li>✓ ポイント目的でカードを使い分けている</li>
            <li>✓ 気がついたら1年経っていて、年会費が発生していた</li>
            <li>✓ 管理するカードが増えて面倒になってきた</li>
            <li>✓ 付帯サービスは使いたいけど年会費条件を忘れてしまう</li>
          </ul>

        </section>


        {/* How it works */}
        <section className="mt-20">

          <h3 className="text-center text-3xl font-bold">
            CardCareの仕組み
          </h3>


          <p className="mx-auto mt-6 max-w-3xl text-center text-gray-600">
            CardCareは、年1回の利用で年会費無料になるカードの
            利用条件を忘れないために、毎年自動で決済を行うサービスです。
          </p>


          <div className="mt-10 grid gap-6 md:grid-cols-3">


            <div className="rounded-2xl border p-6 text-center">

              <div className="text-3xl">
                💳
              </div>

              <h4 className="mt-4 font-bold">
                CardCareを設定
              </h4>

              <p className="mt-2 text-sm text-gray-600">
                Stripe Checkoutで簡単に決済登録
              </p>

            </div>



            <div className="rounded-2xl border p-6 text-center">

              <div className="text-3xl">
                120円
              </div>

              <h4 className="mt-4 font-bold">
                毎年自動決済
              </h4>

              <p className="mt-2 text-sm text-gray-600">
                登録日を基準に毎年更新
              </p>

            </div>



            <div className="rounded-2xl border p-6 text-center">

              <div className="text-3xl">
                ✓
              </div>

              <h4 className="mt-4 font-bold">
                利用条件をサポート
              </h4>

              <p className="mt-2 text-sm text-gray-600">
                カード利用忘れによる年数千円の支払いリスクを回避
              </p>

            </div>


          </div>

        </section>
                {/* Target Cards */}
        <section className="mt-20 rounded-3xl bg-gray-50 p-8">

          <h3 className="text-3xl font-bold">
            こんなカードの管理におすすめ
          </h3>

          <ul className="mt-6 space-y-3 text-gray-700">

            <li>
              ✓ セゾン系カード
            </li>

            <li>
              ✓ セゾンアメックス
            </li>

            <li>
              ✓ ライフカード
            </li>

            <li>
              ✓ その他、年1回利用条件のカード
            </li>

          </ul>


          <p className="mt-4 text-sm text-gray-500">
            ※対象条件は各カード会社の公式情報をご確認ください。
          </p>

        </section>



        {/* Features */}
        <section className="mt-20">

          <h3 className="text-3xl font-bold">
            CardCareの特徴
          </h3>


          <div className="mt-6 space-y-4 text-gray-700">


            <p>
              ✓ 一度設定すれば毎年自動更新
            </p>


            <p>
              ✓ カード番号はStripeの決済システムで管理され、
              CardCareでは保持しません
            </p>


            <p>
              ✓ 面倒なアカウント作成なしですぐ利用開始できます
            </p>


          </div>

        </section>




        {/* Stripe Security */}
        <section className="mt-20 rounded-3xl border p-8">


          <h3 className="text-2xl font-bold">
            安心して利用できる決済環境
          </h3>


          <p className="mt-5 text-gray-700">

            CardCareの決済には

            <a
              href="https://stripe.com/jp"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 font-bold text-green-600 underline"
            >
              Stripe
            </a>

            を利用しています。

          </p>



          <p className="mt-3 text-gray-700">
            Stripeは世界中の企業で利用されている
            オンライン決済プラットフォームです。
          </p>



          <p className="mt-3 text-gray-700">
            クレジットカード情報はStripeの決済システム上で管理され、
            CardCareがお客様のカード番号を直接保存することはありません。
          </p>


        </section>





        {/* FAQ */}
        <section className="mt-20">


          <h3 className="text-3xl font-bold">
            よくある質問
          </h3>



          <div className="mt-6 space-y-6">



            <div>

              <h4 className="font-bold">
                Q. カード番号はCardCareに保存されますか？
              </h4>


              <p className="mt-2 text-gray-600">

                A. いいえ。
                カード情報はStripeの決済システムで管理され、
                CardCareではカード番号を保持しません。

              </p>

            </div>





            <div>

              <h4 className="font-bold">
                Q. これで必ず年会費無料になりますか？
              </h4>


              <p className="mt-2 text-gray-600">

                A. CardCareは年会費無料条件の達成をサポートするサービスです。
                ただし、カード会社の規約変更や利用条件変更などにより、
                条件達成を保証するものではありません。
                ご利用前に各カード会社の条件をご確認ください。

              </p>

            </div>


          </div>


        </section>





        {/* CTA */}
        <section className="mt-20 rounded-3xl bg-gray-900 p-10 text-center text-white">


          <h3 className="text-3xl font-bold">
            年120円でカード管理をもっと簡単に
          </h3>



          <button
  onClick={handleCheckout}
  disabled={loading}
  className="mt-8 w-full rounded-full bg-green-500 px-10 py-4 font-bold md:w-auto"
>
  {loading ? "処理中..." : "年120円で始める"}
</button>


          <p className="mt-3 text-sm text-gray-300">
            クレジットカード決済・アカウント作成不要
          </p>


        </section>





        {/* Notice */}
<footer className="mt-12 text-sm text-gray-500">

  <p>
    ※本サービスはカード会社による年会費無料条件の達成を保証するものではありません。
    ご利用前に各カード会社の条件をご確認ください。
  </p>


  <div className="mt-6 flex flex-wrap gap-4">

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
      特定商取引法に基づく表記
    </a>

  </div>


</footer>



      </div>
    </main>
  );
}