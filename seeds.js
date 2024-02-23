const mongoose = require('mongoose');

const Product = require('./Models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
.then(()=>{
        console.log('Mongo Connection Open');
})
.catch(err=>{
        console.log('Mongo error',err);
})

// const p = new Product({
//     name:'Grapefruit',
//     price:1.99,
//     category:'fruit'
// })

// p.save().then(p=>{
//     console.log(p)
// })
// .catch(e=>{
//     console.log(e)
// })

const seedProducts = [{
    name:'Apple',
    price:1.50,
    category:'fruit'
},
{
    name:'Milk',
    price:2.99,
    category:'dairy'
},
{
    name:'Cucumber',
    price:3.99,
    category:'vegetable'
},
{
    name:'Tomatoes',
    price:0.99,
    category:'vegetable'
},
{
    name:'Banana',
    price:2.99,
    category:'fruit'
}]

Product.insertMany(seedProducts)
    .then(res =>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })  