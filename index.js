const express = require('express');
const todoRouter = require('./routes/todoRoutes.js');
const app = express();

app.use(express.json());

app.use('/todos',todoRouter);


app.listen(3000,()=>{
    console.log("server running at port 3000");
})

// https://screenrec.com/share/5t2vM64qsQ

