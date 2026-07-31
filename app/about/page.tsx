export const metadata = {
  title: "CardCareについて｜年1回利用条件のカード利用サポート",
  description:
    "CardCareは、年1回利用することで年会費無料になるクレジットカードの利用条件達成をサポートするサービスです。",
};


export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">

      <h1 className="text-4xl font-bold">
        CardCareについて
      </h1>


      <section className="mt-10">

        <h2 className="text-2xl font-bold">
          CardCareとは
        </h2>

        <p className="mt-4 text-gray-700 leading-8">
          CardCareは、年1回利用することで年会費無料になる
          クレジットカードの利用条件達成をサポートするサービスです。
        </p>

      </section>


      <section className="mt-10">

        <h2 className="text-2xl font-bold">
          サービス提供の目的
        </h2>

        <p className="mt-4 text-gray-700 leading-8">
          クレジットカードを複数利用する中で、
          年会費無料条件のための利用を忘れてしまう問題を解決するため、
          CardCareを提供しています。
        </p>

      </section>


      <section className="mt-10">

        <h2 className="text-2xl font-bold">
          決済情報について
        </h2>

        <p className="mt-4 text-gray-700 leading-8">
          CardCareではカード番号を直接保持しません。
          決済処理にはStripeを利用し、安全な決済環境を提供しています。
        </p>

      </section>


      <section className="mt-10">

        <h2 className="text-2xl font-bold">
          お問い合わせ
        </h2>

        <p className="mt-4 text-gray-700 leading-8">
          サービスに関するお問い合わせは、
          お問い合わせ窓口よりご連絡ください。
        </p>

      </section>


    </main>
  );
}