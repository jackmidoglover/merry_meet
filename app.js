var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')

var app = express();

const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/merryMeet";
const db = require("./models");

var indexRouter = require("./routes/index");
var userRouter = require("./routes/users");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/api/user", (req, res) => {
  res.status(200).json({"Username": "ME!"});
})
app.get("*", (req, res) =>{
  res.sendFile(path.join(__dirname + 'public/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(console.log(error));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
});

//connect to Mongo DB
mongoose.Promise = Promise; 
mongoose.connect(MONGODB_URI, function(err){
  if (err) throw err;
  console.log("connected to MongoDB");
});


// connect express server
var port = process.env.PORT || '3001';
app.listen(port,() => {
  console.log("server started on port ", port);
});


module.exports = app;
