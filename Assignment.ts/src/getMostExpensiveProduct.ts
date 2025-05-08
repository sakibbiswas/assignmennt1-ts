{
    // Problem 6

    interface Product {
        name: string;
        price: number;
    }

    const getMostExpensiveProduct = (products: Product[]): Product | null => {
        if (products.length === 0) {
            return null;
        }
         else{
            return products.reduce((max, product) => product.price > max.price ? product : max);
         }  
          
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

console.log(getMostExpensiveProduct(products));
      // Output: { name: "Bag", price: 50 }
      
}