import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

export default function Checkout() {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({
      lineItems: [{ price: "YOUR_PRICE_ID", quantity: 1 }],
      mode: "payment",
      successUrl: "https://buzzbutter.co/success",
      cancelUrl: "https://buzzbutter.co/cancel",
    });
  };

  return <button onClick={handleCheckout}>Buy for $3.99</button>;
}
