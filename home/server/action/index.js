var index = require('../model/index.js');
var util = require('../lib/util.js');

// 无论是get
module.exports = function(req, res){
    res.render('home/page/index.tpl', index.getData());
};

module.exports.get = function(req, res) {

};

module.exports.post = function (req, res) {

};

module.exports.put = function (req, res) {

};

module.exports.delete = function (req, res) {

};
