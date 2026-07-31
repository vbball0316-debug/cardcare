import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY || ""
);

export async function POST(
  request: Request
) {

  try {

    const { session_id } = await request.json();

    const session =
      await stripe.checkout.sessions.retrieve(
        session_id
      );

    const customerId =
      session.customer as string;


    const portalSession =
      await stripe.billingPortal.sessions.create({

        customer: customerId,

        return_url:
          "https://cardcare.vercel.app/success",

      });


    return NextResponse.json({

      url: portalSession.url,

    });


  } catch(error){

    console.error(error);


    return NextResponse.json(

      {
        error:"Portal作成エラー"
      },

      {
        status:500
      }

    );

  }

}
