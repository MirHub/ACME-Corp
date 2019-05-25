const express = require("express");
const mongoose = require('mongoose');
const Product = require('./models/productSchema');
const config = require('./configs/dev_config')
const SampleData = require('./sample-data');

const productRoutes = require('./routes/products');

mongoose.connect(config.DB_URI, {useNewUrlParser: true}).then(() => {
    const sampleData = new SampleData();
    sampleData.seed_DB();

});
const app = express();
// Remember the / at the begining and can use middleware
// app.use('/api/v1/products', productRoutes);

app.get('/api/v1/products', function(req, res){
  Product.find({}, function(err, foundProducts) {
      if (err) {
          res.status(422).send({errors: [{title: "Products Error", detials: 'Could not find Products'}]});
      }
      res.json(foundProducts);
  });

  // res.json({'success': true});
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log("Node Server Running at port: ",PORT);
});