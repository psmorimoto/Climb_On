const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3010;

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});