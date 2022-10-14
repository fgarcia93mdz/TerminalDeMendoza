const createError = require('http-errors');
const express = require('express');
const app = express();
const path = require("path");
const publicPath = path.resolve('../public');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');

//session
app.use(session({
  secret: 'Es un secreto nuestro',
  resave: false,
  saveUninitialized: false,
}))

app.use(cookies());


app.use(express.static('public'));
app.use(express.static(publicPath));
app.use(express.urlencoded({
  extended: false
}));
app.set('view engine', 'ejs');
app.set('views', path.resolve('src/views'));
app.use(methodOverride('_method'));
app.use(cors());
app.use(bodyParser.json());
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//home 
const homeRouter = require('./routes/index');
app.use('/', homeRouter);



app.use('/users', usersRouter);

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
  res.render('error');
});

app.listen(8080, () => {
  console.log('El servidor de la terminal de mendoza esta corriendo');
});
module.exports = app;
