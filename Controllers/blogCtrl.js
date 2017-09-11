var BlogModel = require("./../models/blogModel.js");

module.exports = {
    read: function(req, res) {
        BlogModel
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
        var galaxy = new BlogModel(req.body);
        galaxy.save(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    },
    change: function(req, res) {
        BlogModel
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
        BlogModel
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
