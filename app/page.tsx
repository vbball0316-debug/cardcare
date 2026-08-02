"use client";
import Image from "next/image";

import { useState } from "react";

export default function Home() {

  const [loading, setLoading] = useState(false);


  const handleCheckout = async () => {

  setLoading(true);

  if (typeof window !== "undefined" && "gtag" in window) {
  (window as any).gtag("event", "begin_checkout", {
    currency: "JPY",
    value: 120,
  });
}

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "CardCare",
  "image": "https://www.cardcare.jp/og-image.png",
  "description":
    "クレジットカードの年会費無料条件や利用タイミングを管理するカード管理サポートサービスです。",
  "brand": {
    "@type": "Brand",
    "name": "CardCare"
  },
  "offers": {
    "@type": "Offer",
    "price": "120",
    "priceCurrency": "JPY",
    "priceValidUntil": "2027-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://www.cardcare.jp"
  },
  "url": "https://www.cardcare.jp"
};
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "カード番号はCardCareに保存されますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "いいえ。カード情報はStripeの決済システムで管理され、CardCareではカード番号を保持しません。"
      }
    },
    {
      "@type": "Question",
      "name": "利用開始日はいつになりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "決済完了日がサービス開始日となり、以降毎年同日に年額料金の決済が行われます。"
      }
    },
    {
      "@type": "Question",
      "name": "解約はいつでもできますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "はい、いつでも解約可能です。Stripeの管理画面からお手続きいただけます。"
      }
    },
    {
      "@type": "Question",
      "name": "クレジットカード1枚につき年額120円ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "クレジットカード1枚につき年額120円を頂戴しております。複数枚登録による割引制度は現在ございません。"
      }
    }
  ]
};

  return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqJsonLd),
  }}
/>

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
            年1回利用条件のクレジットカード
            <br />
            もう使い忘れでの年会費の支払いにさよならしよう。
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-600">
            無駄なクレジットカードの年会費を回避したい方々へ向けて立ち上げた、
            月額換算にしてわずか10円、年120円でその年の利用条件達成をサポートします。
          </p>

          <button
  onClick={handleCheckout}
  disabled={loading}
  className="mt-10 w-full rounded-full bg-green-500 px-10 py-4 text-lg font-bold text-white shadow md:w-auto"
>
  {loading ? "処理中..." : "年120円で条件達成をサポート"}
</button>

          <p className="mt-3 text-sm text-gray-500">
            クレジットカード決済・アカウント作成不要
          </p>
          <Image
  src="/images/home.png"
  alt="CardCare サービスイメージ"
  width={1200}
  height={800}
  priority
  className="mx-auto mt-10 w-full max-w-3xl rounded-2xl"
 />

        </section>


        


        {/* SEO Article Link */}
        <section className="mt-12 rounded-3xl border p-6 text-center">

          <h3 className="text-xl font-bold">
            年1回利用条件のカードについて詳しく知る
          </h3>

          <p className="mt-3 text-gray-600">
            年会費無料条件の仕組みや、
            使い忘れによる年会費発生を防ぐ方法を解説しています。
          </p>

          <a
            href="/blog/annual-fee-free-condition"
            className="mt-4 inline-block font-bold text-green-600"
          >
            年1回利用条件のカードとは？ →
          </a>

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
            CardCareは、年1回の利用などで年会費無料条件が設定されている
            クレジットカードの条件達成をサポートするサービスです。
            管理負担を減らすために毎年自動で決済を行い、忘れがちなカードの管理を解決します。
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




{/* Articles */}

<section className="mt-20">

  <h3 className="text-3xl font-bold">
    CardCareのお役立ち情報
  </h3>


  <div className="mt-8 grid gap-6 md:grid-cols-2">


    <div className="rounded-2xl border p-6">

      <h4 className="text-xl font-bold">
        年1回利用条件のクレジットカードとは？
      </h4>

      <p className="mt-3 text-gray-600">
        年1回利用することで年会費無料になるカードの仕組みや、
        利用条件について解説します。
      </p>

      <a
        href="/blog/annual-fee-free-condition"
        className="mt-4 inline-block font-bold text-green-600"
      >
        記事を読む →
      </a>

    </div>



    <div className="rounded-2xl border p-6">

      <h4 className="text-xl font-bold">
        年1回利用条件のカードを忘れない方法
      </h4>

      <p className="mt-3 text-gray-600">
        使い忘れによる年会費発生を防ぐ方法と、
        利用条件達成をサポートする仕組みを解説します。
      </p>

      <a
        href="/blog/card-use-condition-reminder"
        className="mt-4 inline-block font-bold text-green-600"
      >
        記事を読む →
      </a>



    </div>
        <div className="rounded-2xl border p-6">

      <h4 className="text-xl font-bold">
        クレジットカードの年会費を払い忘れる原因と防ぐ方法
      </h4>

      <p className="mt-3 text-gray-600">
        知らないうちに発生する年会費請求の原因や、
        利用条件を管理する方法について解説します。
      </p>

      <a
        href="/blog/card-annual-fee-forget"
        className="mt-4 inline-block font-bold text-green-600"
      >
        記事を読む →
      </a>

    </div>


        <div className="rounded-2xl border p-6">

      <h4 className="text-xl font-bold">
        クレジットカードを複数枚持つデメリット｜年会費管理で注意するポイント
      </h4>

      <p className="mt-3 text-gray-600">
        複数枚のクレジットカードを持つ場合に起きやすい、
        年会費管理の注意点について解説します。
      </p>

      <a
        href="/blog/multiple-credit-cards-management"
        className="mt-4 inline-block font-bold text-green-600"
      >
        記事を読む →
      </a>

    </div>



    <div className="rounded-2xl border p-6">

      <h4 className="text-xl font-bold">
        クレジットカードの解約タイミング｜使わないカードを整理する方法
      </h4>

      <p className="mt-3 text-gray-600">
        使わなくなったカードを整理するタイミングや、
        年会費発生を防ぐポイントについて解説します。
      </p>

      <a
        href="/blog/credit-card-cancellation-guide"
        className="mt-4 inline-block font-bold text-green-600"
      >
        記事を読む →
      </a>

    </div>

    <div className="rounded-2xl border p-6">

      <h4 className="text-xl font-bold">
        年会費無料クレジットカードの仕組みとは？無料になる条件を解説
      </h4>

      <p className="mt-3 text-gray-600">
        年会費無料カードの種類や、
        条件達成で無料になる仕組みについて解説します。
      </p>

      <a
        href="/blog/annual-fee-free-card-guide"
        className="mt-4 inline-block font-bold text-green-600"
      >
        記事を読む →
      </a>

    </div>



    <div className="rounded-2xl border p-6">

      <h4 className="text-xl font-bold">
        年会費無料カードでも注意が必要な理由｜条件付き無料の落とし穴
      </h4>

      <p className="mt-3 text-gray-600">
        無料だと思っていたカードで年会費が発生する理由や、
        条件管理の重要性について解説します。
      </p>

      <a
        href="/blog/conditional-annual-fee-free-card"
        className="mt-4 inline-block font-bold text-green-600"
      >
        記事を読む →
      </a>

    </div>
    <div className="rounded-2xl border p-6">

  <h4 className="text-xl font-bold">
    クレジットカードは何枚持つのがベスト？管理できる枚数の目安を解説
  </h4>

  <p className="mt-3 text-gray-600">
    クレジットカードは何枚持つのが理想なのか、
    複数枚所有するメリット・デメリットや管理方法を解説します。
  </p>

  <a
    href="/blog/credit-card-how-many-should-you-have"
    className="mt-4 inline-block font-bold text-green-600"
  >
    記事を読む →
  </a>

</div>
<div className="rounded-2xl border p-6">

  <h4 className="text-xl font-bold">
    クレジットカードの年会費はいつ引き落とされる？確認方法と注意点を解説
  </h4>

  <p className="mt-3 text-gray-600">
    クレジットカードの年会費が請求されるタイミングや、
    確認方法、年会費無料条件を忘れないためのポイントを解説します。
  </p>

  <a
    href="/blog/credit-card-annual-fee-payment-timing"
    className="mt-4 inline-block font-bold text-green-600"
  >
    記事を読む →
  </a>

</div>
<div className="rounded-2xl border p-6">

  <h4 className="text-xl font-bold">
    使っていないクレジットカードは解約すべき？放置するリスクを解説
  </h4>

  <p className="mt-3 text-gray-600">
    使わないクレジットカードを放置するリスクや、
    解約前に確認すべきポイントについて解説します。
  </p>

  <a
    href="/blog/unused-credit-card"
    className="mt-4 inline-block font-bold text-green-600"
  >
    記事を読む →
  </a>

</div>

  </div>

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
            <div>

              <h4 className="font-bold">
                Q. 利用開始日はいつになりますか？
              </h4>

              <p className="mt-2 text-gray-600">
                A. 決済完了日がサービス開始日となります。
                以降、毎年同日に年額料金の決済が行われます。
              </p>

            </div>


            <div>

              <h4 className="font-bold">
                Q. 解約はいつでもできますか？
              </h4>

              <p className="mt-2 text-gray-600">
                A. はい、いつでも解約可能です。
                Stripeの管理画面からお手続きいただけます。
              </p>

            </div>


            <div>

              <h4 className="font-bold">
                Q. 解約はどこからできますか？
              </h4>

              <p className="mt-2 text-gray-600">
                A. 当サイトでは、お客様のメールアドレスやクレジットカード情報を保持しておりません。
                解約は決済時にご利用いただいたStripeの決済管理画面よりお手続きください。
              </p>

            </div>


            <div>

              <h4 className="font-bold">
                Q. クレジットカード1枚につき年額120円ですか？複数枚登録した場合の割引はありますか？
              </h4>

              <p className="mt-2 text-gray-600">
                A. クレジットカード1枚につき年額120円を頂戴しております。
                サービスコストを可能な限り抑えることで、低価格でご利用いただける料金設定としております。
                なお、複数枚登録による割引制度は現在ございません。
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
    <a
  href="/about"
  className="underline hover:text-green-600"
>
  CardCareについて
</a>

  </div>


</footer>



      </div>
     
    </main>
    </>
  );
}