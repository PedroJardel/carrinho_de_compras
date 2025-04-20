import { ProductRespository } from "../Repositories/PrismaProductRepository.js";
import { Prisma, Product } from "@prisma/client";

export class ProductService {
  constructor(private productRepository: ProductRespository) {}

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }

  async getProductById(id: string): Promise<Product> {
    const product = await this.productRepository.findById(id);
    if (!product) {
      throw new Error("This product not exists!");
    }
    return product;
  }

  async createProduct(data: Prisma.ProductUncheckedCreateInput): Promise<Product> {
    const product = await this.productRepository.create(data);
    if (!product) {
      throw new Error("Unable to create product");
    }
    return product;
  }

  async updateProduct(
    id: string,
    data: Prisma.ProductUpdateInput
  ): Promise<Product> {
    const product = await this.productRepository.update(id, data);
    if (!product) {
      throw new Error("Unable to update product");
    }
    return product;
  }

  async deleteProduct(id: string): Promise<Product> {
    const product = await this.productRepository.delete(id);
    if (!product) {
      throw new Error("Unable to delete product");
    }
    return product;
  }
}
