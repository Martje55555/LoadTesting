const createError = require('http-errors');
const express = require('express');

const indexRouter = require('./routes/index');
const sendMessageRouter = require('./routes/sendMessage');
const createEventRouter = require('./routes/createEvent');

const app = express();

// Include routes here!
app.use('/', indexRouter);
app.use('/createMessage', sendMessageRouter);
app.use('/createEvent', createEventRouter);

// catch 404 and forward to error handler
app.use( async (req, res, next) => {
  next(createError(404));
});

// error handler
app.use( async (err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = await err.message;
  res.locals.error = await req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
