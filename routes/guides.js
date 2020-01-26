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
    guide.type = req.body.type;
    guide.save().then((guide) => {
            res.json(guide);
        })
        .catch(err => res.status(400).json(err));
});

router.get('/:guide_slug', function (req, res, next) {
    Guide.findOne({ slug: req.params.guide_slug }, function(err, guide) {
        if(err){
            res.status(400).json(err);
        }
        res.json(guide);
    });
});

router.get('/user/:id', function (req, res, next) {
    Guide.find({ user_id: req.params.id }, function(err, guides) {
        if(err){
            res.status(400).json(err);
        }
        res.json(guides);
    });
});

router.get('/latest', function(req, res, next) {
    Guide.find({}).sort({time: -1}).execFind(function(err, guides){ 
        if(err){
            res.status(400).json(err);
        }
        res.json(guides);
    });
});

module.exports = router;