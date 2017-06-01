var index = require('../model/index.js');
var util = require('../lib/util.js');


/**
 * 无论是get还是post请求,都先经过module.exports处理函数,
 * 再进入各自的METHOD函数。将module.exports函数视为URL级别的
 * 通用处理逻辑
 * @param req
 * @param res
 */
module.exports = function(req, res){
    res.render('home/page/index.tpl', index.getData());
};