const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use((req, res, next) =>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
  console.log("Acessou o middleware");
  app.use(cors());
  next();
})
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
const websiteRoutes = require('./src/routes/website.routes')
app.use('/api/v1/website', websiteRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});