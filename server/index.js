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

mc.connect(config.DB_URI, function(err, db) {
    if (err) throw err;
    dbo = db.db("mydb");
    const sampleData = new SampleData();
    sampleData.seed_DB()

    dbo.createCollection("shopping_cart", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
    });
    dbo.collection('shopping_cart').deleteMany({});
  }); 

app.get('/api/v1/products', function(req, res) {

    var cursor = dbo.collection('products').find({}).toArray(function(err, result) {
        // if (err) throw err;
        // console.log(result);
        res.json(result)
        // db.close();
    });

});
app.post('/api/v1/shoppingcart', function(req, res){
    let p;
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        p = JSON.parse( body);
        // console.log(p._id);
        const newProduct = new Product(p);
        dbo.collection('shopping_cart').insertOne(newProduct, function(err, res) {
            if (err) throw err;
            console.log("Document inserted");
    
        }); 
        res.end('ok');
    });
  
});

app.post('/api/v1/shoppingcart_r', function(req, res){
    let p;
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        p = JSON.parse( body);
        // console.log(p._id);
        const newProduct = new Product(p);
        dbo.collection('shopping_cart').removeOne({ title: p.title }, function(err, res) {
            if (err) throw err;
            console.log("Document remove");
    
        }); 
        res.end('ok');
        res.json({'success': 'item removed from cart'});
    });
  
});

app.get('/api/v1/shoppingcart', function(req, res){
  
  var cursor = dbo.collection('shopping_cart').find({}).toArray(function(err, result) {
    // if (err) throw err;
    // console.log(result);
    res.json(result)
});

});

app.get('/api/v1/sendemail', function(req, res){
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'ora.collins@ethereal.email',
            pass: 'YGE9B5jaNCAJSTaevC'
        }
    });

    const mailOptions = {
        from: 'ora.collins@ethereal.email', // sender address
        to: 'mir99999abbas@gmail.com', // list of receivers
        subject: 'Subject of your email', // Subject line
        html: '<p>Testing Node mailer</p>'// plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
    res.json({'success': 'true'});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log("Node Server Running at port: ",PORT);
});