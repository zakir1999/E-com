import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {

  const products= await stripe.products.list({
    expand:["data.default_price"],
    limit:5,
  });
  console.log(products);
  return (

     <div>
      <section>
        <div>
          <div>
            <h2>Welcom to My Ecommerce</h2>
            <p>Discover the latest product at the best Price.</p>
            <Button asChild variant="default">
              <Link href="/products">Browse all Products</Link>
              
            </Button>
          </div>
          <Image alt="Banner Image" width={450} height={450} src={products.data[0].images[0]}></Image>

        </div>
      </section>
     </div>
  );
}
