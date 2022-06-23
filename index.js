var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var multer = multer();

app = express();
app.use(bodyParser.json());
app.use(multer.array());
app.use(express.static('public'));


app.get('/', function(req, res){
  res.send("Home Page");
});

app.get('/about', function(req, res){
  res.send("About Page");
});


app.get('/query', function(req, res){
   const name = req.query.name;
   console.log(req.query);
   res.end(name);
});

app.post('/post', function(req, res){
  console.log(req.body);
  const name = req.body.name;
  const age = req.body.age;
  res.send(name +" " + age);
});


app.listen(8000, function(){
  console.log(`Server run with port: 8000`);
});