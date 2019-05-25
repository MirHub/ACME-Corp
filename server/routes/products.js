const express = require('express');
const router = express.Router();
const Product = require('../models/productSchema');

router.get('products', function(req, res){
    Product.find({}, function(err, foundProducts) {
        if (err) {
            res.status(422).send({errors: [{title: "Products Error", detials: 'Could not find Products'}]});
        }
        res.json(foundProducts);
    });

    res.json({'success': true});
});


module.exports = router;