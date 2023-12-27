// exporting module 
console.log('Exporting Module');


const shippingCost = 10;
export const cart = [];

export const addToCart = function(product, quantity)
{
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
};

const tottalPrice = 237;
const totalQuantity = 23;

export {tottalPrice, totalQuantity as tq };


// default export 
export default function (product, quantity){
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
};