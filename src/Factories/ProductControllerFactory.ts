import { PrismaClient } from '@prisma/client';
import { ProductController } from 'Controllers/ProductController.js';
import { PrismaProductRespository } from 'Repositories/PrismaProductRepository.js';
import { ProductService } from 'Services/ProductService.js';

export function ProductControllerFactory() {
  const prisma = new PrismaClient();
  const repository = new PrismaProductRespository(prisma);
  const productService = new ProductService(repository);
  return new ProductController(productService);
}