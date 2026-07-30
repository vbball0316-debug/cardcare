export default function Privacy() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-12">

        <h1 className="text-3xl font-bold">
          プライバシーポリシー
        </h1>


        <div className="mt-8 space-y-6 text-gray-700">


          <section>
            <h2 className="font-bold">
              取得する情報
            </h2>

            <p>
              本サービスでは決済処理およびサービス提供のため、
              メールアドレス等の情報を取得する場合があります。
            </p>
          </section>


          <section>
            <h2 className="font-bold">
              決済情報について
            </h2>

            <p>
              クレジットカード情報はStripeの決済システムで管理され、
              本サービスがカード番号を保存することはありません。
            </p>
          </section>


          <section>
            <h2 className="font-bold">
              利用目的
            </h2>

            <p>
              取得した情報はサービス提供、
              決済管理、お問い合わせ対応のため利用します。
            </p>
          </section>


        </div>

      </div>
    </main>
  );
}