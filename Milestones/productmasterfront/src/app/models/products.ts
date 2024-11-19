export class products {
    productId: number = -1;
    name: string = "";
    price: number = -1;
    description: string = "";
    onHand: number = -1;
    image: string = "";

    constructor(productId: number, name: string, price: number, description: string, onHand: number, image: string) {
        this.productId = productId;
        this.name = name;
        this.price = price;
        this.description = description;
        this.onHand = onHand;
        this.image = image;
    }
}
