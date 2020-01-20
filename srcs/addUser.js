//Maker0121/srcs/addUser
//新增user

//載入user這個schema
var UserSchema = require('../schemas/user');

//URL+addUser會執行以下程式
//req是要求物件，get用query，post用body(記得加BodyParser)，詳細看：https://expressjs.com/zh-tw/4x/api.html#req
//res是回應物件，詳細資訊看：https://expressjs.com/zh-tw/guide/routing.html
module.exports = function(req,res){
	var ReqJson={
		Student_ID: req.body.Student_ID,
		Card_ID: req.body.Card_ID,
		Name: req.body.Name,
		Department: req.body.Department,
		Grade: req.body.Grade
	}
	console.log("待註冊資訊：\n",ReqJson);
	
	UserSchema.find({Student_ID:ReqJson.Student_ID},function(err,obj){
		if(err){
			console.log("Error for UserSchema.find: ",err);
			res.send(400, 'Bad Request for UserSchema.find:');
		}
		else{
			if(obj.length==0){
				console.log("即將進行註冊");
				var newUser = new UserSchema(ReqJson);
				newUser.save(function(err,res){
					if(err){
						console.log("Error for newUser.save:",err);
						res.send(400, 'Bad Request for newUser.save:');
					}
				});
				res.send({status:'success',message:true,data:ReqJson.Name});
			}else{
				console.log("帳號已存在");
				res.send({status:'success',message:false});
			}
		}
	})
}