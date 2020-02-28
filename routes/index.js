
/*
 * GET home page.
 */
var data = require('../data.json');

exports.view = function(req, res){
	//console.log(data);
    data['viewAlt'] = false;
  	res.render('index', data);
};

exports.viewAlt = function(req, res){
  data['viewAlt'] = true;
  res.render('index', data);
};
