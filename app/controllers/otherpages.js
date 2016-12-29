exports.about = function(req,res) {
	res.render("about",{
		title:"简介"
	})
}
exports.P404 = function(req,res){
	res.render("404")
}