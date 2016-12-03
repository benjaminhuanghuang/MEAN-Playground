var express = require('express');

var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://user:user123@ds119748.mlab.com:19748/db_tasklist', ['tasks']);

router.get('/tasks', function(req, res, next){
    //res.send('Tasks API');
    db.tasks.find(function(err, docs){
        if(err){
            res.send('Tasks API');
        }
        res.json(docs);
    });
});

module.exports = router;