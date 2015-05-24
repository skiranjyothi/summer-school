'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    Department=require("../department/department.model")

var StudentsSchema = new Schema({
  name: String,
  rollNumber:{type:String,required:true},
  department:{type:Schema.Types.ObjectId,ref:"Department"}, 
  email:String
});

module.exports = mongoose.model('Students', StudentsSchema);