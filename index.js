var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
const { v4: uuidv4 } = require("uuid");
// var multer = multer();

app = express();
app.use(bodyParser.json());

// app.use(function(req, res, next){
//   console.log('Inn....');
//   next();
// });
// app.use(multer.array());
// app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("Home Page");
});

app.get("/about", function (req, res) {
  res.send("About Page");
});

app.get("/query", function (req, res) {
  const name = req.query.name;
  console.log(req.query);
  res.end(name);
});

const storage = multer.diskStorage({
  destination: function (req, file, callBack) {
    callBack(null, "./uploads");
  },
  filename: function (req, file, callBack) {
    const fileName = uuidv4() + file.originalname.replace(/\s/g, "");
    callBack(null, fileName);
  },
});

var upload = multer({ storage: storage }).single("myfile");
app.post("/post", function (req, res) {
  upload(req, res, function (error) {
    const imageName = req.file.originalname;
    if (error) {
      res.send("File Upload Field");
    } else {
      res.send("File upload success");
    }
  });
});

app.get("/gurd", function (req, res, next) {
  next();
  res.send("Gurd Call!");
});

app.listen(8000, function () {
  console.log(`Server run with port: 8000`);
});
