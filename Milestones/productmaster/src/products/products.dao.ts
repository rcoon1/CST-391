import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { products } from "./products.model";
import { productsQueries } from './products.queries';

export const getProducts = async () => {
    return execute<products[]>(productsQueries.getProducts, []);
};

export const getProductsByDescription = async (search: string) => {
    console.log('search param', search);
    return execute<products[]>(productsQueries.getProductsByDescription, [`%${search}%`]);
};

export const getProductsByProductId = async (productId: number) => {
    return execute<products[]>(productsQueries.getProductsByProductId, [productId]);
};

export const createProduct = async (products: products) => {
    return execute<OkPacket>(productsQueries.createProduct,
        [products.name, products.price, products.description, products.onHand, products.image]);
};

export const updateProduct = async (products: products) => {
    return execute<OkPacket>(productsQueries.updateProduct,
        [products.name, products.price, products.description, products.onHand, products.image]);
};

export const deleteProduct = async (productId: number) => {
    return execute<OkPacket>(productsQueries.deleteProduct, [productId]);
};

