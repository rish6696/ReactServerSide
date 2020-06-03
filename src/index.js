import 'babel-polyfill'
import express from 'express'
import Renderer from '../src/helper/renderer'
import React from 'react'
import CreateStore from '../src/helper/createStore'

import { matchRoutes  } from 'react-router-config'
import Routes from './Routes'



const app =  express();
const PORT = 5896


app.use(express.static('public'))



app.get('*',(req,res,next)=>{

    //some initilaization to load data into the store

    const store = CreateStore();
    
    const promises=matchRoutes(Routes,req.path).map(({route})=>{
        return route.loadData ? route.loadData(store) :null
    })

    Promise.all(promises).then(()=>{
        console.log("promise resolved")
        res.send(Renderer(req,store))
    }) 
})


app.listen(PORT,()=>{
    console.log("listening at the port",PORT)
})