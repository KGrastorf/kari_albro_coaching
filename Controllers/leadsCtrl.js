var LeadsModel = require("./../models/leadsModel.js");

module.exports = {
    read: function(req, res) {
        LeadsModel
            .find(req.query)
            .populate('posts')
            .exec(function(err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
    },
    create: function(req, res) {
        var info = new LeadsModel(req.body);
        info.save(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    },
    change: function(req, res) {
        LeadsModel
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
        LeadsModel
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
