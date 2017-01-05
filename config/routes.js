var fs = require("fs");
var Index = require('../app/controllers/index');
var User = require('../app/controllers/user');
var Article = require('../app/controllers/article');
var Message = require('../app/controllers/meg');
var Other = require('../app/controllers/otherpages');
var Interesting = require('../app/controllers/interesting');
var Cr = require('../app/controllers/cr');
var _ = require('underscore');

module.exports = function(app) {
	app.use(function(req,res,next){
		var _user = req.session.user;
		app.locals.user = _user;
		next();
	})

	app.get('/',Index.index);
	app.get('/article',Article.all);
	app.get('/admin/article',Article.pagearticle);
	app.post('/admin/article',Article.save);
	app.get('/admin/list',Article.pagelist );
	// 爬文章接口
	app.post('/Crawler',Cr.cr);

	app.get('/interesting',Interesting.all);
	app.get('/admin/interesting',Interesting.pageinteresting);
	app.post('/admin/interesting',Interesting.save);

	app.get('/register',User.pagereg);
	app.get('/login',User.pagelogin);
	app.get('/logout',User.logout);
	app.post('/user/signup',User.signup);
	app.post('/user/signin',User.signin);

	// 留言板
	app.get('/connect',Message.see);
	app.post('/connect/message',Message.save);

	app.get('/about',Other.about);
	app.get('*', Other.P404);





















	// demo
	app.post('/reg', function (req, res) {
	   response = {
	       user:req.body.user,
	       password:req.body.password
	   };
	   console.log(req);
	   res.end(JSON.stringify(response));
	});

	//  主页输出 "Hello World"
	app.get('/', function (req, res) {
	   console.log("主页 GET 请求");
	   res.send('Hello GET');
	})
	//  POST 请求
	app.post('/', function (req, res) {
	   console.log("主页 POST 请求");
	   res.send('Hello POST');
	})

	//  /del_user 页面响应
	app.get('/del_user', function (req, res) {
	   console.log("/del_user 响应 DELETE 请求");
	   res.send('删除页面');
	})

	//  /list_user 页面 GET 请求
	app.get('/list_user', function (req, res) {
	   console.log("/list_user GET 请求");
	   res.send('用户列表页面');
	})

	// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
	app.get('/ab*cd', function(req, res) {
	   console.log("/ab*cd GET 请求");
	   res.send('正则匹配');
	})
	app.get('/cookies', function(req, res) {
	  console.log("Cookies: ", req.cookies)
	})
	// demo app.get('/index',function(req,res){
	// 	res.sendFile( __dirname + "/" + "demo.html" );
	// })


	app.get('/up',function(req,res){
		res.sendFile( __dirname + "/" + "demo2.html" );
	})

	app.get('/process_post', function (req, res) {
	   // 输出 JSON 格式
	   response = {
	       first_name:req.query.user,
	       last_name:req.query.password
	   };
	   console.log(req);
	   res.end(JSON.stringify(response));
	})

	app.post('/file_upload', function (req, res) {
	   console.log(req.files[0]);  // 上传的文件信息
	   var des_file = __dirname + "/" + req.files[0].originalname;
	   fs.readFile( req.files[0].path, function (err, data) {
	        fs.writeFile(des_file, data, function (err) {
	         if( err ){
	              console.log( err ); 
	         }else{
	               response = {
	                   message:'File uploaded successfully',
	                   filename:req.files[0].originalname
	              };
	          }
	          console.log( response );
	          res.end( JSON.stringify( response ) );
	       });
	   });
	})

	app.get('*', function(req, res){
	   console.log("404");
	   res.send('查无此页面');
	});
}
