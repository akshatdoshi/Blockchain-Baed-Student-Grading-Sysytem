var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var routes = require('./routers/pages.js');
var modules = require('./routers/module.js');

var port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || port);



app.post('/signin',modules.teacherIdCheck);
app.get('/signin',routes.teacherIdCheckGet);

app.get('/signup',routes.adminget);
app.post('/signup',modules.adminpost);


app.get('/addStudentData',modules.addStudentDataGet);
app.post('/addStudentData',modules.addStudData);

app.get('/addTeacherData',modules.addTeacherDataGet);
app.post('/addTeacherData',modules.addTeacherData);

app.get('/teacherMarks',modules.addMarks);
app.post('/teacherMarks',modules.addStudMarks);

app.get('/grades',modules.grades);
app.post('/grades',modules.gradesfinal);

app.get('/studentDataTable',modules.studentDataTable);


app.get('/error',routes.error);
app.get('/error1',routes.error1);


app.listen(port, function() {
  console.log("Listening on " + port);

});
