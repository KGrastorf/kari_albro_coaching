var mongoose = require('mongoose');



var leadsSchema = new mongoose.Schema({
    name: String,
    email: String,
    time : { type : Date, default: Date.now }
});


module.exports = mongoose.model("Leads", leadsSchema);
