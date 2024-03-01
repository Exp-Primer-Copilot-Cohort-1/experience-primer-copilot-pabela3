//create new server
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = require('../models/Comment.js');

// GET /comments
router.get('/', function(req, res, next) {
  Comment.find(function (err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

// POST /comments
router.post('/', function(req, res, next) {
  Comment.create(req.body, function (err, comment) {
    if (err) return next(err);
    res.json(comment);
  });
});

// GET /comments/:id
router.get('/:id', function(req, res, next) {
  Comment.findById(req.params.id, function (err, comment) {
    if (err) return next(err);
    res.json(comment);
  });
});

// PUT /comments/:id
router.put('/:id', function(req, res, next) {
  Comment.findByIdAndUpdate(req.params.id, req.body, function (err, comment) {
    if (err) return next(err);
    res.json(comment);
  });
});

// DELETE /comments/:id
router.delete('/:id', function(req, res, next) {
  Comment.findByIdAndRemove(req.params.id, req.body, function (err, comment) {
    if (err) return next(err);
    res.json(comment);
  });
});

module.exports = router;
```
- Now let's create the comment model
```javascript
// Path: Comment.js
var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: String,
