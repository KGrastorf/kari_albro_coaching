var mongoose = require('mongoose');



var blogSchema = new mongoose.Schema({
    name: String,
    icon: String,
    link: String,
    pic: [{
    name: String,
    url: String,
}],

});


module.exports = mongoose.model("Blog", blogSchema);
