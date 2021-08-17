const createError = require('http-errors');
const express = require('express');

const indexRouter = require('./routes/index');
const sendMessageRouter = require('./routes/sendMessage');
const createEventRouter = require('./routes/createEvent');
const createAppRouter = require('./routes/createApp');
const createEndpoint = require('./routes/createEndpoint');
const app = express();

// Include routes here!
app.use('/', indexRouter);
app.use('/createMessage', sendMessageRouter);
app.use('/createEvent', createEventRouter);
app.use('/createApp', createAppRouter);
app.use('/createEndpoint', createEndpoint);

// catch 404 and forward to error handler
app.use( async (req, res, next) => {
  next(createError(404));
});

// error handler
app.use( async (err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = await err.message;
  res.locals.error = await req.app.get('env') === 'development' ? err : {};
});

module.exports = app;
