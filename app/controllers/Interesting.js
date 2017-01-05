var Interesting = require('../models/interestings');
var _ = require('underscore');
var fs = require("fs");

exports.all = function(req,res){
	// var number = 4;
	// var num = 1;
	// if (req.query.number) {
	// 	num = req.query.number;
	// }
	// Interesting.count({},function(err,count){
	// 	var allnum = Math.round(count/4);
	// 	if (num == 0) num = 1;
	// 	if (num > allnum) num = allnum;
	// 	for (var i = 1,Anum = []; i <= allnum; i++) {
	// 		Anum.push(i);
	// 	}
	// 	Interesting.find({}).limit(num*number).skip((num-1)*number).exec(function(err,interestings){
	// 	})
	// });
	res.render('interesting');
}
exports.pageinteresting = function(req,res){
	res.render('admin_interesting',{
		title:'小玩意后台页面'
	})
}
exports.save = function(req,res){
	var _interesting = req.body.interesting;

	// var _new;
	// Interesting.findOne({title:_interesting.title},function(err,interesting){
	// 	if (err) console.log(err);
	// 	if (interesting) {
	// 		_new = _.extend(interesting, _interesting)
	// 		_new.save(function(err,interesting){
	// 			if (err) console.log(err);
	// 			res.redirect('/')
	// 		})
	// 	}else{ 
	// 		var interesting = new Interesting(_interesting);
	// 		interesting.save(function(err,interesting){
	// 			if (err) console.log(err);
	// 			res.redirect('/');
	// 		})
	// 	}
	// })
}