import { Request, Response } from "express";
import { ProductService } from "../Services/ProductService.js";

export class ProductController {
  constructor(private productServive: ProductService) {}

  getAll = async (res: Response) => {
    try {
      const products = await this.productServive.getAllProducts();
      return res.json(products);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

  getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const product = await this.productServive.getProductById(id);
      return res.json(product);
    } catch (error) {
      res.status(404).json({ message: error });
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const product = await this.productServive.createProduct(req.body);
      return res.json(product);
    } catch (error) {
      res.status(500).json({ message: error || "Erro interno"});
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const{ id }  = req.params
      const product = await this.productServive.updateProduct(id, req.body);
      return res.json(product);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

  destroy = async (req: Request, res: Response) => {
    try { 
      const{ id }  = req.params
      const product = await this.productServive.deleteProduct(id);
      return res.json(product);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
}
