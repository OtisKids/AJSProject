var Deals = require('../models/deal');

module.exports.create = function (req, res) {
  var deal = new Deal(req.body);
  deal.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Deal.find({}, function (err, results) {
    res.json(results);
  });
}