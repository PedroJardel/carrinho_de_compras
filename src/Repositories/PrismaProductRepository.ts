import { Prisma, PrismaClient, Product } from "@prisma/client";
import { ProductRespository } from "./Interfaces/ProductRepository.js";

export class PrismaProductRespository implements ProductRespository {
  constructor(private prisma: PrismaClient) {}

  async findAll(): Promise<Product[]> {
    return await this.prisma.product.findMany();;
  }

  async findById(id: string): Promise<Product | null> {
    return await this.prisma.product.findUnique({ where: { id } });
  }

  async create(data: Prisma.ProductUncheckedCreateInput): Promise<Product> {
    return await this.prisma.product.create({ data });

  }

  async update(id: string, data: Prisma.ProductUpdateInput): Promise<Product> {
   return await this.prisma.product.update({ where: { id }, data });

  }

  async delete(id: string): Promise<Product> {
   return await this.prisma.product.delete({ where: { id } });
  }
}
