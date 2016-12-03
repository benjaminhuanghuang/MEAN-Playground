var express = require('express');

var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://user:user123@ds119748.mlab.com:19748/db_tasklist', ['tasks']);

// Get all tasks
router.get('/tasks', function (req, res, next) {
    //res.send('Tasks API');
    db.tasks.find(function (err, docs) {
        if (err) {
            res.send(err);
        }
        res.json(docs);
    });
});

// Get single task
router.get('/tasks/:id', function (req, res, next) {
    //res.send('Tasks API');
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
});


// Save Task
router.post('/task', function (req, res, next) {
    var task = req.body;
    // validation
    if (!task.title || (task.isDone + '')) {
        res.status(400); //Bad request
        res.json({
            "error": "Bad Data"
        })
    }
    else {
        db.tasks.save(task, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }
});

// Delete task
router.delete('/tasks/:id', function (req, res, next) {
    //res.send('Tasks API');
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
});


// Update Task
router.put('/task/:id', function (req, res, next) {
    var task = req.body;
    var updTask = {};

    if (task.isDone) {
        updTask.isDone = task.isDone;
    }
    if (task.title) {
        updTask.title = task.title;
    }
    // validation
    if (!updTask) {
        res.status(400); //Bad request
        res.json({
            "error": "Bad Data"
        })
    }
    else {
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updTask, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }
});

module.exports = router;