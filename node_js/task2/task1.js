const express=require('express');
const config= require('./config');
const mongoose= require('mongoose');
const app=express();

mongoose.connect(config.database)
var port=process.env.port||8000;
app.listen(port,function(){
    console.log('connected successfully',port)
});