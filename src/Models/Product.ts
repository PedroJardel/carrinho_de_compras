import { create } from "domain";

class Product {
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly title: string;
    readonly description: string;
    readonly stock: number;
    readonly categopry: string;
    readonly thumbnail?: string;

    constructor(
        createdAt: string = new Date().toLocaleString(), 
        updatedAt: string = new Date().toLocaleString(), 
        title: string,
        description: string,
        stock: number,
        categopry: string,
        thumbnail?: string
    ) {
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.title = title
        this.description = description
        this.stock = stock
        this.categopry = categopry
        this.thumbnail = thumbnail ?? "NA"
    }
}