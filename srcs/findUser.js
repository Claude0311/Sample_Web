//Maker0121/srcs/findUser
//搜尋user

//載入user這個schema
var UserSchema = require('../schemas/user');

//URL+addUser會執行以下程式
//req是要求物件，get用query，post用body(記得加BodyParser)，詳細看：https://expressjs.com/zh-tw/4x/api.html#req
//res是回應物件，詳細資訊看：https://expressjs.com/zh-tw/guide/routing.html
module.exports = function(req,res){
	var ReqJson={
		Student_ID: req.body.Student_ID,
	}
	console.log("搜尋學號：\n",ReqJson);
	
	UserSchema.find({Student_ID:ReqJson.Student_ID},function(err,obj){
		if(err){
			console.log("Error for UserSchema.find: ",err);
			res.send(400, 'Bad Request for UserSchema.find:');
		}
		else{
			if(obj.length==0){
				console.log("查無此人");
				res.send({status:'success',message:false});
			}else{
				console.log("查詢結果：\n",obj);//記得用obj[0]
				res.send({status:'success',message:true,data:obj});
			}
		}
	})
}