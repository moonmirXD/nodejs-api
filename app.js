const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')

// Import routes
const postsRoute = require('./routes/posts');
app.use(bodyParser.json());
//Middleware
app.use('/posts', postsRoute);



//Routes
app.get('',(req,res) => {
    res.send("Hello world!");
})


//DB
mongoose.connect(process.env.DB_CONNECTION ,{ useNewUrlParser: true, useUnifiedTopology: true  } , () =>{
    console.log("Connected to DB");
})

//Listen
app.listen(3000);

