import { Router } from 'express';
import { ProductController } from '../../Controllers/ProductController.js';
import { ProductService } from '../../Services/ProductService.js';
import { ProductRespository } from '../../Repositories/ProductRepository.js';
import { PrismaClient } from '@prisma/client';

const procuctRouter = Router();

const prisma = new PrismaClient();
const productRepository = new ProductRespository(prisma);
const productServive = new ProductService(productRepository);
const productController = new ProductController(productServive);

procuctRouter.get('/', async (__, res) => {
   await productController.getAll(res);
});

procuctRouter.get('/:id', async (req, res) => {
    await productController.getById(req, res);
});

procuctRouter.post('/create', async (req, res) => {
   await productController.create(req, res);
});

procuctRouter.put('/:id', async (req, res) => {
   await productController.update(req, res);
});

procuctRouter.delete('/:id', async (req, res) => {
    await productController.destroy(req, res);
});

export default procuctRouter