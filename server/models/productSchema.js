const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    _id: { type: String },
    title: { type: String, required: true, max: [128, 'Too long, max is 128 characters'] },
    price: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    stocklevel: { type: String, required: true }
});


module.exports = mongoose.model('Product', productSchema);