var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var blogCtrl = require('./controllers/blogCtrl.js');

var app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get("/blog", blogCtrl.read);
app.post("/blog", blogCtrl.create);
app.put("/blog/:id", blogCtrl.change);
app.delete("/blog/:id", blogCtrl.destroy);

mongoose.Promise = global.Promise;
var promise =  mongoose.connect('mongodb://localhost/myapp', {
  useMongoClient: true,
  /* other options */
});
// mongoose.connect("mongodb://localhost: 27017/universeDB");
mongoose.connection.once('openUri()', function(){
  console.log("Connected to Mongo");
});

app.listen(3000, function(){
console.log("Touron is listening to 3000");
});
