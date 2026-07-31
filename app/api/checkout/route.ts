import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY || ""
);

export async function POST() {

  console.log(
    "Stripe Key:",
    process.env.STRIPE_SECRET_KEY ? "存在します" : "ありません"
  );

  try {

    const session = await stripe.checkout.sessions.create({

      mode: "subscription",

      line_items: [
        {
          price: "price_1TypvhDsoTO311Dt9Jf3kExe",
          quantity: 1,
        },
      ],


      success_url:
        "http://localhost:3000/success",

      cancel_url:
        "http://localhost:3000",

    });


    return NextResponse.json({
      url: session.url,
    });


  } catch (error) {

    console.error(
  "STRIPE ERROR:",
  JSON.stringify(error, null, 2)
);


    return NextResponse.json(
  {
    error: String(error),
  },
  {
    status: 500,
  }
);

  }

}