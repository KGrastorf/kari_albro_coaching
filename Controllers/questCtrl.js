var QuestModel = require("./../models/questModel.js");

module.exports = {
    read: function(req, res) {
        QuestModel
            .find(req.query)
            .populate('quests')
            .exec(function(err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
    },
    create: function(req, res) {
        var info = new QuestModel(req.body);
        info.save(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    },
    change: function(req, res) {
        QuestModel
            .findByIdAndUpdate(req.params.id, req.body,
                function(err, result) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(result);
                    }
                });
    },
    destroy: function(req, res) {
        QuestModel
            .findByIdAndRemove(req.params.id, req.body,
                function(err, result) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(result);
                    }
                });
    }
};
