import { Router } from "express";
import productController from "../controller/product.controller";

const productRouter = Router();
productRouter.get('/', productController.getAll);
productRouter.get('/:id', productController.getById)

export default productRouter;
 