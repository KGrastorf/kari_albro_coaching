var mongoose = require('mongoose');



var leadsSchema = new mongoose.Schema({
    name: String,
    email: String
});


module.exports = mongoose.model("Leads", leadsSchema);
