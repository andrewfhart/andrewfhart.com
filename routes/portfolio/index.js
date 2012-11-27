var util = require('util');

exports.index = function (req, res) {

    res.render('portfolio/index', {
      title: 'My Portfolio'
  });

}

exports.edrn = function (req, res) {
    res.render('portfolio/edrn', {
      title: 'My Portfolio: Early Detection Research Network'
  });
}

exports.snow = function (req, res) {
    res.render('portfolio/snow', {
      title: 'My Portfolio: Snow Data System'
  });
}

exports.vfastr = function (req, res) {
    res.render('portfolio/vfastr', {
      title: 'My Portfolio: V-FASTR Data Portal'
  });
}

exports.rcmes = function (req, res) {
    res.render('portfolio/rcmes', {
      title: 'My Portfolio: Regional Climate Model Evaluation System'
  });
}

exports.furnace = function (req, res) {
    res.render('portfolio/furnace', {
      title: 'My Portfolio: Furnace - Rapid PHP Web Application Development'
  });
}

exports.cositu = function (req, res) {
    res.render('portfolio/cositu', {
      title: 'My Portfolio: Cositu - A Residential Social Network Service'
  });
}
