var util  = require('util');
var utils = require('../utils.js');

/*
 * GET home page.
 */
exports.index = function (req, res){

  var reading_filters = {'tags':'whatimreading'};
  var reading_options = {'limit':5,'sort': [['_id',-1]]}
  
  var news_filters    = {};
  var news_options    = {'limit':1,'sort': [['date',-1]]}

  utils.fetchLatestFlickrPhotos('83711730@N06', function (error, meta, articles) {
    utils.fetchLinks(reading_filters, reading_options, function (online_reading) {
      utils.fetchNoteworthy(news_filters, news_options, function (latest_news) {
        res.render('index', {
            title: 'Andrew F. Hart',
            layout: 'layouts/home.jade',
            reading: online_reading,
            flickr: {'meta': meta, 'articles' : articles.slice(0,20)},
            news: latest_news
        });
      });
    }); 
  });
};

/*
 * GET about page
 */
exports.about = function (req, res) {
  res.render('about', {
    title: 'Andrew F. Hart - About'
  });
};

/*
 * GET publications page
 */
exports.publications = function (req, res) {
  res.render('publications', {
    title: 'Andrew F. Hart - Publications'
  });
}

/*
 * GET presentations page
 */
exports.presentations = function (req, res) {
    res.render('presentations', {
	title: 'Andrew F. Hart - Presentations'
    });
}

/*
 * GET reading (latest) page
 */
exports.reading = function (req, res) {
  var reading_filters = {'tags':'whatimreading'};
  var reading_options = {'sort': [['_id',-1]]}
  
  utils.fetchLinks(reading_filters, reading_options, function (online_reading) {
    res.render('reading', {
        title: "Andrew F. Hart - Latest Reading",
        reading: online_reading,
    });
  }); 
}


/*
 * GET link submission page
 */
exports.linklog_submission_form = function (req, res) {
  var url = req.params.url;
  var pageTitle = req.params.title;
  res.render('linklog_submit', {
    title: "Submit a new link...",
    url: (url) ? url : '',
    pageTitle: (pageTitle) ? pageTitle : ''
  });
}


/*
 * GET link search page 
 */
exports.linklog_search_form = function (req,res) {
  var filters = {};
  var options = {
    'limit':15,
    'sort' :[['_id',-1]]
  }
  utils.fetchLinks( filters, options, function (results) {
    res.render('linklog_search', {
      title: "Search for links...",
      results: results
    });
  });
}

/*
 * POST link submission
 */
exports.linklog_do_submit = function (req, res) {
  var url = req.body.url;
  var comment = req.body.comment;
  var tags    = req.body.tags.split(',').map(function(t) {return t.trim();});
  var title   = req.body.title;
  
  if (url.length == 0)
    res.redirect('back');
  
  utils.logLink( url, comment, tags, title, function () {
    res.redirect('/linklog/submit');
  });
}

/*
 * POST link retrieval
 */
exports.linklog_do_fetch = function (req, res) {

  var needle  = req.body.needle;
  var filters = {'tags' : needle};
  var options = {'limit': 15};

  utils.fetchLinks( filters, options, function (results) {
    res.render('linklog_search', {
      title: 'Search for links...',
      results: results
    });
  });
}

/*
 * GET news submission page
 */
exports.news_submission_form = function (req, res) {
  res.render('news_submit', {
    title: "Submit a new piece of news...",
  });
}

/*
 * POST news submission
 */
exports.news_do_submit = function (req, res) {

  var date = req.body.date
  var url = req.body.url;
  var comment = req.body.comment;
  var tags    = req.body.tags.split(',').map(function(t) {return t.trim();});
  var title   = req.body.title;
  
  if (url.length == 0)
    res.redirect('back');
  
  utils.addNoteworthy( date, url, title, comment, tags, function () {
    res.redirect('/news/submit');
  });
}





