import express from 'express';

const app = express()

app.get('/api/products', (req,res)=>{
    const products = [
        {
          id: 101,
          name: "Watch",
          price: 200
        },
        {
          id: 102,
          name: "Phone",
          price: 500
        },
        {
          id: 103,
          name: "Laptop",
          price: 1000
        },
        {
          id: 104,
          name: "Headphones",
          price: 150
        },
        {
          id: 105,
          name: "Tablet",
          price: 300
        }
      ];
      
  setTimeout(()=>{
    res.send(products)
  },2000)

//http://localhost:3000/api/products?search=Watch   //can check on the post man
//to Search any product
// we need to write some code

})


app.listen(3000,()=>{
    console.log("server is running");
});