import { Product } from "../../generated/prisma/index";

class Cart {
    readonly products: Product[];
    readonly quantity: number;

    constructor (products: Product[], quantity: number) {
        this.products = products
        this.quantity = quantity
    }
}