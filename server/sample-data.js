const Product = require('./models/productSchema');

class SampleData{
    constructor(){

        this.products = [{
            id: 1,
            title: "Product 1",
            price: "30",
            description: "Product 1 Description",
            image: "http://via.placeholder.com/450x300",
            quantityAvailable: 150
          },
          {
            id: 2,
            title: "Product 2",
            price: "40",
            description: "Product 2 Description",
            image: "http://via.placeholder.com/450x300",
            quantityAvailable: 5
          },
          {
            id: 3,
            title: "Product 3",
            price: "70",
            description: "Product 3 Description",
            image: "http://via.placeholder.com/450x300",
            quantityAvailable: 10
          },
          {
            id: 4,
            title: "Product 4",
            price: "35",
            description: "Product 4 Description",
            image: "http://via.placeholder.com/450x300",
            quantityAvailable: 150
          },
          {
            id: 5,
            title: "Product 5",
            price: "55",
            description: "Product 5 Description",
            image: "http://via.placeholder.com/450x300",
            quantityAvailable: 150
          }];
    }

    pushDataToMongoDB(){
        this.products.forEach((product) => {
            const newProduct = new Product(product);

            newProduct.save();
        });
    }

    seed_DB(){
        this.cleanAtStart();
        this.pushDataToMongoDB();
        console.log("Data pushed");
        
    }

    async cleanAtStart(){

        try {
            return await Product.deleteMany({});
          } catch (err) {
            console.log( err.message)
          }
    }

}


module.exports = SampleData;