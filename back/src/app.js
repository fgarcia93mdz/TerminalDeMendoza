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
const platformRouter = require('./routes/platform');
const informesRouter = require('./routes/informes');
const empresasRouter = require("./routes/empresas");


const authRouter = require('./routes/auth');

app.use(cookies());

// Session
app.use(session({
  // token guardado en .env
  secret: "asdsadsadsad",
  resave: false,
  saveUninitialized: false,
}))

app.use(express.static('public'));
app.use(express.static(publicPath));
app.use(express.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');
app.set('views', path.resolve('src/views'));
app.use(methodOverride('_method'));
app.use(cors());


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const plataformasRouter = require('./routes/plataformas');
const serviciosRouter = require('./routes/servicios');

// Home 
const homeRouter = require('./routes/index');

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, `../empresas_img/`)));


// Routes
app.use('/', homeRouter);
app.use('/plataforma', platformRouter) 

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/informes', informesRouter);
app.use('/empresas', empresasRouter);
app.use('/plataformas', plataformasRouter);
app.use('/servicios', serviciosRouter);


// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
// app.use(function(err, req, res, next) {
//   // Set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // Render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.use(function (err, req, res, next) {
  // logic
  return res.status(500).json({error: err});
});

app.listen(8080, () => {
  console.log('API Routes Availables')
  console.log('http://localhost:8080/api/plataforma/arribos - Arrival GET')
  console.log('http://localhost:8080/api/plataforma/partidas - GET')
  console.log('http://localhost:8080/api/plataforma/locales - GET')
  console.log('Terminal Server running at http://localhost:8080');
});
module.exports = app;
