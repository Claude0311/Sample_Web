//maker0121/schemas/user.js
var mongoose = require('./database'),
    Schema = mongoose.Schema;

//範例：https://mongoosejs.com/docs/schematypes.html
var User_Schema = new Schema({
    Student_ID: {
		type: String,
		minlength:9,
		maxlength:9
	},
	Card_ID: {
		type: String
	},
	Name: {
		type: String
	},
	Department: { //學系 ex:電機
		type: String
	},
	Grade: { //年級
		type: Number,
		min: 1
	}
})

module.exports = mongoose.model('User',User_Schema);