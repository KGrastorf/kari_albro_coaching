var mongoose = require('mongoose');



var questSchema = new mongoose.Schema({
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    q5: String,
    q6: String,
    q7: String,
    q8: String,
    time : { type : Date, default: Date.now }
});


module.exports = mongoose.model("Quest", questSchema);
