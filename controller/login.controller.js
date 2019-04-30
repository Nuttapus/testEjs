const User = require('../model/user.model');

exports.find = (req, res) => {
    User.findOne({ user: req.params.id }).then(doc => {
        if (doc !== null ) {
            res.json({ data: doc, status: true })
        } else {
            res.json({ status: false })
        }
    })
};