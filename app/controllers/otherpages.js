exports.about = function(req,res) {
	res.render("about",{
		title:"小楼兰的奔跑-简介"
	})
}
exports.P404 = function(req,res){
	res.render("404",{
		title:"小楼兰的奔跑-404"
	})
}