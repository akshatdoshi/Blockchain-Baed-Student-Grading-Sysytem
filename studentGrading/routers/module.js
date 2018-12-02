var studentModule = require('./configuration.js');
//var db = require('../Database/db.js');
var express = require('express');

var studentResult = studentModule.studentResult;
var Web3 = studentModule.web3Module;
var listAccount = Web3.eth.accounts;
var data1 = "";
var temp = "";
var teacherID = "";

exports.adminpost = function(req,res){
	
	var adminID = req.body.adminID;
	var adminPass = req.body.adminPass;
	
	if(adminID == "admin" && adminPass == "admin")
	{
		res.redirect('/addTeacherData');
	}
	else
	{
		res.redirect('/error1');
	}
	
}


exports.addStudentDataGet = function(req,res){
	
	res.render('addStudentData', {page_title:"student details"});
}


exports.addStudData = function(req,res){
	
	res.render('addStudentData', {page_title:"student details"});

	var studentId = req.body.studentId;
	var studentName = req.body.studentName;
	var std = req.body.std;
	var division = req.body.division;
	
	var bodyParser = require('body-parser');
	
	console.log(studentId);
	console.log(studentName);
	studentResult.addStudentData(studentId, studentName, std, division,{gas:400000});
};




exports.addTeacherDataGet = function(req,res){
	
	res.render('addTeacherData', {page_title:"Teacher details"});

	
}


exports.addTeacherData = function(req,res){
	
	res.render('addTeacherData', {page_title:"Teacher details"});

	var teacherId1 = req.body.teacherID;
	var teacherName = req.body.teacherName;
	var subjectCode = req.body.subjectCode;
	var teacherPassword = req.body.teacherPassword;
	
	var bodyParser = require('body-parser');
	
	console.log(teacherId1, teacherName, subjectCode, teacherPassword);

	studentResult.addTeacherData(teacherId1, teacherName, subjectCode, teacherPassword, {gas:400000});
};




exports.addMarks = function(req,res){
	
	res.render('teacherMarks', {page_title:"student Marks",data:teacherID});	
}

exports.addStudMarks = function(req,res){
	
	res.render('teacherMarks', {page_title:"student Marks",data:teacherID});

	//var teacherId = req.body.TeacherId;
	var studentId = req.body.studentId;
	var marks = req.body.marks;

	
	var bodyParser = require('body-parser');
	
	console.log(teacherID, studentId, marks);
	console.log(data1);
	
	studentResult.addMarks(teacherID, studentId, marks,{gas:400000});
};




exports.grades = function(req,res){

	res.render('grades', {page_title:"student final grades"});	
}

exports.gradesfinal = function(req,res){
	
	//res.render('grades', {page_title:"student final grades"});

	var studentId = req.body.studentId;

	
	var bodyParser = require('body-parser');
	
	studentResult.grade(studentId,{gas:400000});
	
	//res.setHeader('Content-Type','text/plain');
	res.redirect('/studentDataTable');
	
	data1 = studentResult.studentData(studentId).toString();
	data1=data1.split(',');
	console.log(data1);
		
};


exports.studentDataTable = function(req,res){

	res.render('studentDataTable', {page_title:"student final grades",data:data1});	
}


exports.teacherIdCheck = function(req,res) {
  teacherID = req.body.teacherID;
  teacherPassword = req.body.teacherPassword;
  console.log(teacherID);
  console.log(teacherPassword);
  
  var t_id = studentResult.teacherData(teacherID).toString();
	
	t_id=t_id.split(',');
	
	console.log(t_id);
  
   if (t_id[0]==teacherID && t_id[3]==teacherPassword)
   {
	  //res.redirect('/teacherMarks');
		res.render('teacherMarks', {page_title:"student Marks",data:teacherID});

		//var teacherId = req.body.TeacherId;
		var studentId = req.body.studentId;
		var marks = req.body.marks;

		
		var bodyParser = require('body-parser');
		
		console.log(teacherID, studentId, marks);
		//console.log(data1);
		
		studentResult.addMarks(teacherID, studentId, marks,{gas:400000});
   }
	else
	{
		res.redirect('/error');
	}
}
