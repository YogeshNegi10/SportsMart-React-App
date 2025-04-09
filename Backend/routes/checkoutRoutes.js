
import express from "express";
import Stripe from "stripe";
import dotenv from 'dotenv';
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

router.post("/create-checkout", async (req, res) => {
  try {
    const { cart, addressInfo, email, userid } = req.body;

    const line_items = cart.map((item, index) => {
      if (!item.title || !item.price || !item.quantity) {
        throw new Error(
          `Cart item at index ${index} is missing required fields`
        );
      }

      return {
        price_data: {
          currency: "usd",
          unit_amount: parseInt(item.price) * 100, // ensure it's an integer
          product_data: {
            name: item.title,
            description: item.description || "No description",
            images: item.image ? [item.image] : [],
          },
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      customer_email: email,
      metadata: {
        userid,
        address: JSON.stringify(addressInfo),
      },


      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });



    res.json({ id: session.id });
  } catch (error) {
    console.error("Stripe session creation failed:", error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;
