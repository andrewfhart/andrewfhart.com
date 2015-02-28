
/**
 * Module dependencies.
 */
var express = require('express')
  , stylus  = require('stylus')
  , routes  = require('./routes')
  , portfolio = require('./routes/portfolio');

var app = module.exports = express.createServer();

/**
 * Configuration
 */
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {
    layout: 'layouts/default.jade',
    pretty: true});
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(stylus.middleware({
    src:  __dirname + '/views',         // .styl files live here
    dest: __dirname + '/public',        // compiled .css in /public/stylesheets
    compress:true
  }));
  
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});


/**
 * Route Definitions
 */
app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/publications', routes.publications);
app.get('/presentations', routes.presentations);
app.get('/reading', routes.reading);

/* LINKLOG ROUTES ---------------------------------------------------*/
app.get('/linklog/submit', routes.linklog_submission_form);
app.get('/linklog/submit/:url', routes.linklog_submission_form);
app.get('/linklog/submit/:url/:title', routes.linklog_submission_form);
app.get('/linklog/search', routes.linklog_search_form);
app.post('/linklog/submit', routes.linklog_do_submit);
app.post('/linklog/search', routes.linklog_do_fetch);

/* NEWS ROUTES ------------------------------------------------------*/
app.get('/news/submit',  routes.news_submission_form);
app.post('/news/submit', routes.news_do_submit);

/* PORTFOLIO ROUTES -------------------------------------------------*/
app.get('/portfolio', portfolio.index);
app.get('/portfolio/edrn', portfolio.edrn);
app.get('/portfolio/snow', portfolio.snow);
app.get('/portfolio/vfastr', portfolio.vfastr);
app.get('/portfolio/rcmes',  portfolio.rcmes);
app.get('/portfolio/furnace', portfolio.furnace);
app.get('/portfolio/cositu', portfolio.cositu);

app.listen(3017, function(){
  console.log("andrewfhart.com is up on port %d in %s mode", 
	      app.address().port, app.settings.env);
});
