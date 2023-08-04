const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv').config()

const indexRouter = require('./routes/index');
const categoriesRouter = require('./routes/equipmentCategories');
const subCategoriesRouter = require('./routes/equipmentSubcategory');
const arsenalRouter = require('./routes/weapon_arsenal');
const weaponsRouter = require('./routes/weapons');
const upgradesRouter = require('./routes/weapon_upgrades');
const statsRouter = require('./routes/weapon_stats');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/equipmentCategories', categoriesRouter);
app.use('/equipmentSubcategory', subCategoriesRouter);
app.use('/weapon_arsenal', arsenalRouter);
app.use('/weapons', weaponsRouter);
app.use('/weapon_upgrades', upgradesRouter);
app.use('/weapon_stats', statsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});

module.exports = app;
