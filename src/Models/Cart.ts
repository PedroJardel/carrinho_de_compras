import { Product } from "./Product.js";

export class Cart 
{
    constructor ( 
        protected products: Product[],
        protected quantity: number,
    ){}
}