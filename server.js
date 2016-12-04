var PORT = 3000;
var DB = "'mongodb://user:user123@ds119748.mlab.com:19748/db_tasklist'";

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

// App modules
var indexRouter = require('./routes/index');
var tasksRouter = require('./routes/tasks');
var apiRouter = require('./routes/api');


// Create applicaion
var app = express();

// View Engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// Set Static Folder
app.use(express.static(path.join(__dirname, 'clinet')));

// Add Middlewares
// Body Parser Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/tasks', tasksRouter);

//
mongoose.connect(DB, function(err){
    if(err){
        return err;
    }
    else{
        console.log('Successfully connected to' + DB);
    }
});

// Start app
app.listen(PORT, function () {
    console.log('Server started on port' + PORT);
});