var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var blogCtrl = require('./controllers/blogCtrl.js');
var leadsCtrl = require('./controllers/leadsCtrl.js');
var questCtrl = require('./controllers/questCtrl.js');
var config = require('./config.js');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

//Blog  Control
app.get("/blog", blogCtrl.read);
app.post("/blog", blogCtrl.create);
app.put("/blog/:id", blogCtrl.change);
app.delete("/blog/:id", blogCtrl.destroy);

//Questionaire  Control
app.get("/quest", questCtrl.read);
app.post("/quest", questCtrl.create);
app.put("/quest/:id", questCtrl.change);
app.delete("/quest/:id", questCtrl.destroy);

//Leads  Control
app.get("/leads", leadsCtrl.read);
app.post("/leads", leadsCtrl.create);
app.put("/leads/:id", leadsCtrl.change);
app.delete("/leads/:id", leadsCtrl.destroy);


// mongoose.connect(config.mongo_uri);
mongoose.connect('mongodb://localhost/kari', { useMongoClient: true })
mongoose.connection.once('open', function(){
  console.log("Connected to Mongo");
});

app.listen(config.port, function(){
  console.log('listening to port 80 or 3000')
});

//
