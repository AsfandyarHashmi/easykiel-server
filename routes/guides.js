var express = require('express');
var passport = require('passport');
var urlslug = require('url-slug');
var router = express.Router();

var User = require('../models/User');
var Guide = require('../models/Guide');

router.post('/create', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    var guide = new Guide();
    guide.user_id = req.user._id;
    guide.title = req.body.title;
    guide.desc = req.body.desc;
    guide.steps = req.body.steps;
    guide.coords = req.body.coords;
    guide.slug = urlslug(req.body.title);
    guide.save().then((guide) => {
            res.json(guide);
        })
        .catch(err => res.status(400).json(err));
});

module.exports = router;