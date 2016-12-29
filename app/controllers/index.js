var Article = require('../models/articles');

exports.index = function(req,res){
	Article.find({}).limit(3).exec(function(err,articles){
		res.render('index',{
			articles:articles
		})
	})
}