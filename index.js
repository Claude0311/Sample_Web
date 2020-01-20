//Maker0121/index.js
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//用 URL/filename 可檢視public下的檔案
//詳細資訊看：https://expressjs.com/zh-tw/starter/static-files.html
app.use(express.static('public'));

//post, get時的解碼
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

//首頁設定
app.get('/',function(req,res){
	//render回傳html碼(可以是檔案或文字(?))
	//詳細資訊看：https://expressjs.com/zh-tw/api.html的res.render
    res.render('index',__dirname+"public/index.html");
})

//URL+addUser會執行以下程式
//req是要求物件，get用query，post用body(記得加BodyParser)，詳細看：https://expressjs.com/zh-tw/4x/api.html#req
//res是回應物件，詳細資訊看：https://expressjs.com/zh-tw/guide/routing.html
app.post('/addUser',require('./srcs/addUser'))

app.post('/findUser',require('./srcs/findUser'))

var server = app.listen(process.env.PORT||1993,function(){
    console.log('server connect');
	console.log('port name: ',process.env.PORT||1993);
})