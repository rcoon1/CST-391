import { Router } from 'express';
import * as ProductsController from './products.controller';

const router = Router();

router
    .route('/products')
    .get(ProductsController.getProducts);

router
    .route('/products/search/:search')
    .get(ProductsController.getProductsByDescription);

router
    .route('/products')
    .post(ProductsController.createProduct);

router
    .route('/products')
    .put(ProductsController.updateProduct);

router
    .route('/products/:productId')
    .delete(ProductsController.deleteProduct);


export default router;