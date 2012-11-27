
/* Required Modules -------------------------------------------------------- */
var request = require('request');
var FeedParser = require('feedparser');
var mongodb = require('mongodb');

var Db = mongodb.Db,
    Cursor     = mongodb.Cursor,
    Collection = mongodb.Collection,
    Server     = mongodb.Server;
    


/* Module Exports ---------------------------------------------------------- */

/**
 * Fetch the latest photos from a user's Flickr account
 *
 * This function obtains and parses the Flickr RSS feed for the given 
 * id, and returns a data structure containing information about the
 * photographs. Note that at the moment the Flickr RSS service is
 * returning 20 elements/articles per request. This function makes use
 * of the 'feedparser' (https://npmjs.org/package/feedparser) API for
 * parsing the Flickr RSS stream. The callback function provided as the
 * second argument to this function should therefore conform to the 
 * expectations of that API.
 *
 * @param id   string    The unique id of the Flickr account to fetch
 * @param next function  A callback for processing the result
**/
exports.fetchLatestFlickrPhotos = function (id, fn) {

    request('http://api.flickr.com/services/feeds/photos_public.gne'
        + '?id=' + id + '&lang=en-us&format=rss_200', function (error, response, body) {
        
        if (!error && response.statusCode == 200) {
            var fp = new FeedParser();
            fp.parseString(body, fn);
        }
    });
}

/** -------------------------------------------------------------------------
 **
 ** INTERESTING LINKS TO SHARE
 ** 
 ** -------------------------------------------------------------------------
 */

/**
 * Store a link in the linklog
 *
 * This function expects a url and optionally a comment and some classifying
 * tags, and creates an entry in the linklog.
 *
 * @param url     string  The unique url of the resource to store
 * @param comment string  An optional comment about the url
 * @param tags    array   An optional collection of classifiers for the url
 **/
exports.logLink = function (url, comment, tags, title, next) {

    var client = new Db('experiments', new Server("127.0.0.1", 27017,{}), {safe:false});
    var insertLink = function (err, collection) {
        collection.insert({
            'time': Date.now(),
            'url': url,
            'comment': comment,
            'tags': tags,
            'title': title}, function(err, docs) {
                // Let's close the db
                client.close();
                next();
            });
        };

    client.open(function(err, p_client) {
      client.collection('linklog', insertLink);
    });
}

/**
 * Return a set of links from the linklog
 *
 * This function expects a set of filters that will be used to search
 * the linklog for matching results.
 *
 * @param filters anrray  The set of filters to apply when searching
 **/
exports.fetchLinks = function( filters, options, next ) {
    var client = new Db('experiments', new Server("127.0.0.1", 27017,{}), {safe:false});
    var fetchLinks = function (err, collection) {
        // Locate all the entries using find
        collection.find(filters,options).toArray(function(err, results) {
          // Let's close the db
          client.close();
          next(results);
        });
    }
    
    client.open(function(err, p_client) {
      client.collection('linklog', fetchLinks);
    });
}

/** -------------------------------------------------------------------------
 **
 ** NOTEWORTHY NEWS ITEMS
 ** 
 ** -------------------------------------------------------------------------
 */

/**
 * Add a piece of noteworthy news
 *
 * This function expects some markdown-formatted text that will be added
 * to the noteworthy news section.
 *
 * @param date   string  The date of occurrence/publication
 * @param text   string  The text to display
 * @param title  array   An optional title for the piece
 * @param tags   array   An optional collection of classifiers for the url
 **/
exports.addNoteworthy = function (date, url, title, comment, tags, next) {

    var client  = new Db('experiments', new Server("127.0.0.1", 27017,{}), {safe:false});
    var addNews = function (err, collection) {
        collection.insert({
            'date': new Date(date),
            'url': url,
            'text': comment,
            'title': title,
            'tags': tags}, function(err, docs) {
                // Let's close the db
                client.close();
                next();
            });
        };

    client.open(function(err, p_client) {
      client.collection('noteworthy', addNews);
    });
}

/**
 * Obtain noteworthy items from the database
 *
 * This function expects a set of filters that will be used to search
 * the noteworthy news for matching results.
 *
 * @param filters anrray  The set of filters to apply when searching
 **/
exports.fetchNoteworthy = function( filters, options, next ) {

    var client = new Db('experiments', new Server("127.0.0.1", 27017,{}), {safe:false});
    var fetchNews = function (err, collection) {

        // Locate all the entries using find
        collection.find(filters,options).toArray(function(err, results) {
          // Let's close the db
          client.close();
          next(results);
        });
    }
    
    client.open(function(err, p_client) {
      client.collection('noteworthy', fetchNews);
    });
}
