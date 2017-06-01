/**
 * Created by baidu on 17/6/1.
 */
module.exports.get = function (req, res) {
    var persons = [{'name': "sqliang", age:24},{name:'ycy',age:23}];
    res.json(persons);
};
