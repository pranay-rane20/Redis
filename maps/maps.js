const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send('maps server')
})

app.get('/distance',(req,res)=>{
    setTimeout(()=>{
        res.status(200).json({
            distance:'55km'
        })
    },2000);
})
app.listen(3001,()=>{
    console.log('Maps server is running on port 3001')
})