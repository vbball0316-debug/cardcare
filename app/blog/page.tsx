import Link from "next/link";

export const metadata = {
  title: "CardCare お役立ち情報｜クレジットカード管理・年会費対策",
  description:
    "クレジットカードの管理方法、年会費無料条件、利用条件、複数カード管理について解説するCardCareのお役立ち記事一覧です。",
};

const articles = [
  {
    title: "年1回利用条件のクレジットカードとは？",
    description:
      "年1回利用することで年会費無料になるカードの仕組みや注意点を解説します。",
    url: "/blog/annual-fee-free-condition",
    category: "年会費・利用条件",
  },
  {
    title: "年1回利用条件のカードを忘れない方法",
    description:
      "利用条件達成のためにカード管理で注意すべきポイントを解説します。",
    url: "/blog/card-use-condition-reminder",
    category: "年会費・利用条件",
  },
  {
    title: "クレジットカードの年会費を払い忘れる原因と防ぐ方法",
    description:
      "知らないうちに発生する年会費請求を防ぐ方法を紹介します。",
    url: "/blog/card-annual-fee-forget",
    category: "年会費・利用条件",
  },
  {
    title: "クレジットカードを複数枚持つデメリット",
    description:
      "複数カードを利用する際の管理上の注意点を解説します。",
    url: "/blog/multiple-credit-cards-management",
    category: "カード管理",
  },
  {
    title: "クレジットカードの解約タイミング",
    description:
      "使わなくなったカードを整理するタイミングについて解説します。",
    url: "/blog/credit-card-cancellation-guide",
    category: "カード管理",
  },
  {
    title: "クレジットカードは何枚まで持っても大丈夫？",
    description:
      "適正なカード枚数や管理のコツについて解説します。",
    url: "/blog/how-many-credit-cards-should-you-have",
    category: "カード管理",
  },
  {
    title: "年会費無料クレジットカードの選び方",
    description:
      "後悔しないために確認したいポイントを解説します。",
    url: "/blog/how-to-choose-annual-fee-free-card",
    category: "カード選び",
  },
  {
    title: "サブカードは必要？メインカードとの使い分け",
    description:
      "サブカードを持つメリットや注意点を解説します。",
    url: "/blog/sub-credit-card-benefits",
    category: "カード選び",
  },
  {
    title: "クレジットカードを使わないとどうなる？",
    description:
      "放置するリスクや管理方法について解説します。",
    url: "/blog/not-using-credit-card",
    category: "カード管理",
  },
  {
    title: "クレジットカード管理アプリを比較",
    description:
      "複数カードを管理する方法やポイントを解説します。",
    url: "/blog/credit-card-management-app",
    category: "カード管理",
  },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">

      <h1 className="text-4xl font-bold">
        CardCare お役立ち情報
      </h1>

      <p className="mt-6 text-gray-600 leading-8">
        クレジットカードの管理方法、
        年会費無料条件、利用条件、
        複数カード管理について解説します。
      </p>


      <div className="mt-10 grid gap-6 md:grid-cols-3">

        {articles.map((article) => (

          <div
            key={article.url}
            className="rounded-2xl border p-6"
          >

            <p className="text-sm text-green-600 font-bold">
              {article.category}
            </p>


            <h2 className="mt-3 text-xl font-bold">
              {article.title}
            </h2>


            <p className="mt-3 text-gray-600">
              {article.description}
            </p>


            <Link
              href={article.url}
              className="mt-5 inline-block font-bold text-green-600"
            >
              記事を読む →
            </Link>


          </div>

        ))}

      </div>


      <section className="mt-16 rounded-2xl bg-green-50 p-8 text-center">

        <h2 className="text-2xl font-bold">
          クレジットカード管理をもっと簡単に
        </h2>


        <p className="mt-4 text-gray-700">
          CardCareは年1回利用条件など、
          カード管理の負担を減らすサポートサービスです。
        </p>


        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-green-500 px-8 py-3 font-bold text-white"
        >
          CardCareを確認する
        </Link>


      </section>


    </main>
  );
}