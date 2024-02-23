const express = require('express');
const app = express();
const path = require('path');
const Product = require('./Models/product');
app.set('views',path.join(__dirname,'views'));
app.set('views engine','ejs');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
.then(()=>{
        console.log('Mongo Connection Open');
})
.catch(err=>{
        console.log('Mongo error');
})


app.get('/products',async (req,res)=>{
        const products = await Product.find({})
        console.log(products)
        res.render('products/index.ejs',{ products})
})

app.get('/products/:id', async (req,res)=>{
        const {id} = req.params;
        const product = await Product.findById(id);
        console.log(product)
        res.render('products/show.ejs',{product})
})

app.listen(3000, ()=>{
        console.log("Listening");
})