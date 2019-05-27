const Product = require('./models/productSchema');

class SampleData {
    constructor() {

        this.products = [{
                title: "Product 1",
                price: "30",
                description: "Product 1 Description",
                image: "http://via.placeholder.com/450x300",
                stocklevel: 150,
                quantity: 1
            },
            {

                title: "Product 2",
                price: "40",
                description: "Product 2 Description",
                image: "http://via.placeholder.com/450x300",
                stocklevel: 5,
                quantity: 1
            },
            {

                title: "Product 3",
                price: "70",
                description: "Product 3 Description",
                image: "http://via.placeholder.com/450x300",
                stocklevel: 10,
                quantity: 1
            },
            {
                title: "Product 4",
                price: "35",
                description: "Product 4 Description",
                image: "http://via.placeholder.com/450x300",
                stocklevel: 150,
                quantity: 1
            },
            {
                title: "Product 5",
                price: "55",
                description: "Product 5 Description",
                image: "http://via.placeholder.com/450x300",
                stocklevel: 150,
                quantity: 1
            }
        ];
    }
    getData(){
        return this.products;
    }

}


module.exports = SampleData;