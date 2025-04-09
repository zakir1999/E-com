// lib/stripe-server.ts
import { stripe } from "./stripe";

export async function getProducts() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 6,
  });

  return products.data;
}
