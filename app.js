var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

//show request details in th console
app.use(logger('combined'));
//append body object to the request 
app.use(express.json());
//handle requests where content-type is multipart/formdata
app.use(express.urlencoded({ extended: false }));
//Parse HTTP request cookies
app.use(cookieParser());
//To serve static files such as images
app.use(express.static(path.join(__dirname, 'public')));

const midd = (req, res, next) => {
  const { user } = req.headers;
  console.log({ user });
  if (user == '1') {
    //append user object to the request
    req.user = { id: 1, name: "foulen", email: "mail@google.com" }
    //execute the middleware succeeding the current middleware
    next();
  } else {
    //returning response to the client
    return res.status(401).end();
  }
}


app.get("/event", midd, (req, res) => {
  //retrieving user object from the request
  const user = req.user;
  res.json({ message: "ok", user })
})
app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
