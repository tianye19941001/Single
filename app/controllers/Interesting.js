exports.all = function(req,res){
	// var number = 4;
	// var num = 1;
	// if (req.query.number) {
	// 	num = req.query.number;
	// }
	// Article.count({},function(err,count){
	// 	var allnum = Math.round(count/4);
	// 	if (num == 0) num = 1;
	// 	if (num > allnum) num = allnum;
	// 	for (var i = 1,Anum = []; i <= allnum; i++) {
	// 		Anum.push(i);
	// 	}
	// 	Article.find({}).limit(num*number).skip((num-1)*number).exec(function(err,articles){
	// 	})
	// });
	res.render('article');
}
exports.pageinteresting = function(req,res){
	res.render('admin_interesting',{
		title:'小玩意后台页面'
	})
}