export const productsQueries = {
    getProducts:
        `SELECT productid as productId, name as name, price as price, description as description, onHand as onHand, image as image from products.products`,
    getProductsByDescription:
        `SELECT productid as productId, name as name, price as price, description as description, onHand as onHand, image as image from products.products
	   WHERE products.products.name LIKE ?`,
    getProductsByProductId:
        `SELECT productid as productId, name as name, price as price, description as description, onHand as onHand, image as image from products.products
	   WHERE products.products.productid = ?`,
    createProduct:
        `INSERT INTO products.products(name, price, description, onHand, image) VALUES(?,?,?,?,?)`,
    updateProduct:
        `UPDATE products.products
         SET name = ?, price = ?, description = ?, onHand = ?, image = ? 
         WHERE productid = ?`,
    deleteProduct:
        `DELETE FROM products.products where productid = ?`
}