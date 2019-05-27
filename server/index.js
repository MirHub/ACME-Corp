const express = require("express");
// const mongoose = require('mongoose');
const Product = require('./models/productSchema');
const config = require('./configs/dev_config')
const SampleData = require('./sample-data');
const { parse } = require('querystring');
var mongodb = require('mongodb');
var mc = mongodb.MongoClient;
const productRoutes = require('./routes/products');
var http = require('http');
var bodyParser = require('body-parser');
var url = require('url');

const nodemailer = require("nodemailer");
const app = express();
var products;

var dbo;

mc.connect(config.DB_URI, function (err, db) {
    if (err) throw err;
    dbo = db.db("mydb");
    // dbo.createCollection('products');
    // dbo.createCollection('shopping_cart');
    dbo.collection('products').deleteMany({});
    dbo.collection('shopping_cart').deleteMany({});
    const sampleData = new SampleData();
    products = sampleData.getData();
    products.forEach((product) => {
        const newProduct = new Product(product);

        dbo.collection('products').insertOne(newProduct, function (err, res) {
            if (err) throw err;
            console.log("Document inserted");

        });
    });
});

app.get('/api/v1/products', function (req, res) {

    var cursor = dbo.collection('products').find({}).toArray(function (err, result) {
        // if (err) throw err;
        // console.log(result);
        res.json(result)
        // db.close();
    });

});
app.post('/api/v1/shoppingcart', function (req, res) {
    let p;
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        p = JSON.parse(body);
        console.log(p.title);
        // delete p['_id'];
        var ptitle = String(p.title);
        dbo.collection('shopping_cart').find({ title: p.title }).toArray(function (err, result) {
            // if (err) throw err;
            if (result.length < 1) {
                const newProduct = new Product(p);
                dbo.collection('shopping_cart').insertOne(newProduct, function (err, res) {
                    if (err) throw err;
                    console.log("Document inserted");

                });
            } else {
                var temp = Number(result[0].quantity);
                // if(temp > Number(result[0].stocklevel)){
                //     res.json({stocklevel: "reached"});
                //     return;
                // }
                temp += 1;
                var updatedQuantity = String(temp);
                dbo.collection('shopping_cart').updateOne(
                    {
                        'title': p.title
                    }, {
                        $set: { quantity: updatedQuantity }
                    }, {
                        multi: true
                    });
                //Apply update
                console.log("Increase the quantity", p.quanity);
            }
            // res.json(result)
        });


        // dbo.collection('shopping_cart').findOne({ title: "Product 1" }).then(function(error, user) {
        //     if (error) {
        //         // return callback(error);
        //     } else if (user) {
        //         console.log("hhahahahaha");
        //         // var err = new Error('A user with that email has already registered. Please use a different email.');
        //         // err.status = 401;
        //         // return next(err);
        //     }
        // });



        res.end('ok');
    });

});

app.post('/api/v1/shoppingcart_r', function (req, res) {
    let p;
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        p = JSON.parse(body);
        // console.log(p._id);
        const newProduct = new Product(p);

        dbo.collection('shopping_cart').find({ title: p.title }).toArray(function (err, result) {

            dbo.collection('shopping_cart').removeOne({ 'title': p.title }, function (err, res) {
                if (err) throw err;
                console.log("Document remove");

            });
            //Apply update
            console.log("Increase the quantity", p.quanity);
        });

        res.end('ok');
        res.json({ success: 'item removed from cart' });
    });

});

app.get('/api/v1/shoppingcart', function (req, res) {

    dbo.collection('shopping_cart').find({}).toArray(function (err, result) {
        // if (err) throw err;
        // console.log(result);
        res.json(result)
    });

});

app.post('/api/v1/buynow', function (req, res) {
    
    var productsInCart;
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'ora.collins@ethereal.email',
            pass: 'YGE9B5jaNCAJSTaevC'
        }
    });

    dbo.collection('shopping_cart').find({}).toArray(function (err, result) {
        productsInCart = result;
    });
    const mailOptions = {
        from: 'ora.collins@ethereal.email', // sender address
        to: 'mir99999abbas@gmail.com', // list of receivers
        subject: 'You Receipt', // Subject line
        html: '<p>'+productsInCart+'</p>' // plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
    res.json({ 'success': 'true' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("Node Server Running at port: ", PORT);
});