import {getProducts} from "@/lib/stripe-server"; 

import Stripe from "stripe";
import { ProductList } from "@/components/product-list";
import { stripe } from "@/lib/stripe";

export default async function ProductsPage(){


     const products = await getProducts(9);

    return (
        <div>
            <h1>All Products</h1>
            <ProductList products={products}/>
            
        </div>


    );
}