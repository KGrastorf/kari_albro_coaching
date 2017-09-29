var mongoose = require('mongoose');



var questSchema = new mongoose.Schema({
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    q5: String
});


module.exports = mongoose.model("Quest", questSchema);
