var Interesting = require('../models/interestings');
var multer  = require('multer')
var upload = multer({ dest: 'upload/' });
var _ = require('underscore');
var fs = require("fs");

exports.all = function(req,res){
	res.render('interesting');
}
exports.pageinteresting = function(req,res){
	res.render('admin_interesting',{
		title:'小玩意后台页面'
	})
}
exports.save = function(req,res){
	
}