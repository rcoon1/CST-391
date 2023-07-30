import { Request, RequestHandler, Response } from "express";
import { OkPacket } from "mysql";
import * as ProductsDao from '../products/products.dao';

export const getProducts: RequestHandler = async (req: Request, res: Response) => {
    try {
        let products;
        let productId = parseInt(req.query.productId as string);

        console.log('productId', productId);
        if (Number.isNaN(productId)) {
            products = await ProductsDao.getProducts();
        } else {
            products = await ProductsDao.getProductsByProductId(productId);
        }
        res.status(200).json(
            products
        );
    } catch (error) {
        console.error('[products.controller][getProducts][Error]', error);
        res.status(500).json({
            message: 'There was an error while fetching products'
        });
    }
};

export const getProductsByDescription: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('searching', req.params.search)
        const products = await ProductsDao.getProductsByDescription('%' + req.params.search + '%');

        res.status(200).json(products);
    } catch (error) {
        console.error('[products.controller][getProductsByDescription][Error] ', error);
        res.status(500).json({
            message: 'There was an error while fetching products'
        });
    }
};


export const createProduct: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await ProductsDao.createProduct(req.body);

        console.log('req.body', req.body);
        console.log('product', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[products.controller][createProduct][Error] ', error);
        console.log('create product ', req.body);
        res.status(500).json({
            message: 'There was an error while creating product'

        });
    }
};

export const updateProduct: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await ProductsDao.updateProduct(req.body);

        console.log('req.body', req.body);
        console.log('product', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[products.controller][updateProduct][Error] ', error);
        console.log('product', req.body);
        res.status(500).json({
            message: 'There was an error while updating product'
        });
    }
};

export const deleteProduct: RequestHandler = async (req: Request, res: Response) => {
    try {
        let productId = parseInt(req.params.productId as string);
        console.log('productId', productId);

        if (!Number.isNaN(productId)) {
            const response = await ProductsDao.deleteProduct(productId);
            res.status(200).json(response);

        } else {
            throw new Error("Integer expected for productId");
        }

    } catch (error) {
        console.error('[products.controller][deleteProduct][Error] ', error);
        res.status(500).json({
            message: 'There was an error while deleting product'
        });
    }
};