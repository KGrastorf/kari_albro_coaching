var mongoose = require('mongoose');



var blogSchema = new mongoose.Schema({
    name: String,
    pic: [{
    name: String,
    url: String,
}],

});


module.exports = mongoose.model("Blog", blogSchema);
