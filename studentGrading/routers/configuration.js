//var db = require('../Database/db.js');
var express = require('express');
var Web3 =require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider ("http://localhost:8545"));
web3.eth.defaultAccount = web3.eth.accounts[0];

var studentGrading = web3.eth.contract([
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "studentData",
      "outputs": [
        {
          "name": "studentID",
          "type": "uint256"
        },
        {
          "name": "studentName",
          "type": "string"
        },
        {
          "name": "std",
          "type": "uint256"
        },
        {
          "name": "division",
          "type": "string"
        },
        {
          "name": "maths",
          "type": "uint256"
        },
        {
          "name": "science",
          "type": "uint256"
        },
        {
          "name": "ss",
          "type": "uint256"
        },
        {
          "name": "gujarati",
          "type": "uint256"
        },
        {
          "name": "english",
          "type": "uint256"
        },
        {
          "name": "parcentage",
          "type": "uint256"
        },
        {
          "name": "finalGrade",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "teacherData",
      "outputs": [
        {
          "name": "teacherID",
          "type": "uint256"
        },
        {
          "name": "teacherName",
          "type": "string"
        },
        {
          "name": "subjectcode",
          "type": "uint256"
        },
        {
          "name": "teacherpassword",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_errorLog",
          "type": "string"
        }
      ],
      "name": "errorLog",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_teacherID",
          "type": "uint256"
        },
        {
          "name": "_teacherName",
          "type": "string"
        },
        {
          "name": "_subjectcode",
          "type": "uint256"
        },
        {
          "name": "_pass",
          "type": "string"
        }
      ],
      "name": "addTeacherData",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_studentID",
          "type": "uint256"
        },
        {
          "name": "_studentName",
          "type": "string"
        },
        {
          "name": "_std",
          "type": "uint256"
        },
        {
          "name": "_division",
          "type": "string"
        }
      ],
      "name": "addStudentData",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_teacherAddress",
          "type": "uint256"
        },
        {
          "name": "_studentID",
          "type": "uint256"
        },
        {
          "name": "_marks",
          "type": "uint256"
        }
      ],
      "name": "addMarks",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "grade",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]);


var studentResult = studentGrading.at("0x3a42c82863c7d819c71e8e1ae33f312793c9be60");


exports.studentResult = studentResult;
exports.web3Module = web3;
