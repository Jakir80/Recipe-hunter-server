
const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello from the chef server site ')
})
const chefes=require('./Chef.json')
app.get('/chefes',(req,res)=>{
    res.send(chefes)
})
const food=require('./foood.json')
app.get('/food',(req,res)=>{
    res.send(food)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const tradiotionals=require("./traditional.json")
app.get('/tradioionals',(req,res)=>{
  res.send(tradiotionals)
})

app.get("/details/:id",(req,res)=>{
  const id=req.params.id;
  const selectedChef=chefes.find(n=>n.id==id)
  res.send(selectedChef)
  console.log(selectedChef)
})
