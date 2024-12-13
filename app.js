const express = require('express');
const app = express();
const axios = require('axios')
const Redis = require('ioredis')
require('dotenv').config()




// redis-14445.c301.ap-south-1-1.ec2.redns.redis-cloud.com:14445
// nVUI1wi0lkEKVgOxjUwkSlQ1BmCGNgZd

const redis = new Redis({
    host:process.env.HOST,
    port:process.env.PORT,
    password:process.env.PASSWORD
})

redis.on('connect',()=>{
    console.log('redis connnected')
})

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/create-ride',async (req,res)=>{
    const isDataCached = await redis.get('indrapuri&MP')

    if(isDataCached) return res.send(isDataCached);

    const result = await axios.get('http://localhost:3001/distance')
    const data = result.data

    redis.set('indra&MP',JSON.stringify(data))

    res.send(data);


    
})

app.listen(3000, () => {
    console.log(`Server is running http://localhost:3000`);
});
