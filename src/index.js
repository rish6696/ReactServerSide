import express from 'express'
import Renderer from '../src/helper/renderer'
import React from 'react'


const app =  express();
const PORT = 5896


app.use(express.static('public'))



app.get('/',(req,res,next)=>{
    res.send(Renderer(req))
})


app.listen(PORT,()=>{
    console.log("listening at the port",PORT)
})