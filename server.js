import express, { request } from 'express';
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send("Welcome to John's server");
});

app.get('/home', (req, res)=> {
  res.send("Welocme to John's server homepage");
});

app.get('/about', (req, res)=>{
  res.send("welcome to John's about page");
});

app.get('/products', (req, res)=>{
  res.send("welcome to John's products page");
});

app.get('/contact', (req, res)=>{
  res.send("welcome to John's contact page");
});

app.listen(port, ()=> {
  console.log(`Server is running on: http://localhost:${port}`);
});