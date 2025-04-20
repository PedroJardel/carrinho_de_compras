import { Router } from 'express';
import { ProductControllerFactory } from 'Factories/ProductControllerFactory.js';

const procuctRouter = Router();
const productController = ProductControllerFactory();

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