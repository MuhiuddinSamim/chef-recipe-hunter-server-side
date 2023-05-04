const express = require('express')
const app = express()
const port =process.env.PORT || 5000;
const cors = require('cors')
const chef=require('./Data/Chef.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chef', (req, res) => {
  res.send(chef)
})

app.get('/chef/:id', (req, res) => {
  const id=parseInt(req.params.id);
  console.log(id);
  const viewRecipes=chef.find(n=>parseInt(n.id) === id );
  res.send(viewRecipes);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})