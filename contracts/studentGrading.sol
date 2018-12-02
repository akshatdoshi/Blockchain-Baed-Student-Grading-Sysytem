pragma solidity ^0.4.17;

contract studentGrading{
    struct studentDetail{
        uint studentID;
        string studentName;
        uint std;
        string division;
        uint maths;
        uint science;
        uint ss;
        uint gujarati;
        uint english;
        uint parcentage;
        bool finalGrade;
    }

    struct teacherDetail{
        uint teacherID;
        string teacherName;
        uint subjectcode;
        string teacherpassword;
    }
    
    mapping(uint => studentDetail) public studentData;
    mapping(uint => teacherDetail) public teacherData;

    event errorLog(string _errorLog);
    
    address owner;
    uint Result;
    
    
    function addTeacherData(uint _teacherID, string _teacherName, uint _subjectcode, string _pass) public {
        
        if(teacherData[_teacherID].teacherID == _teacherID){
            emit errorLog("Teacher is Registered!");
        }
        else{
            teacherData[_teacherID] = teacherDetail( _teacherID, _teacherName, _subjectcode, _pass);
        }
        
    }
    
    function addStudentData(uint _studentID, string _studentName, uint _std, string _division) public {
        if(studentData[_studentID].studentID == _studentID){
            emit errorLog("Student is Registered!");
        }
        else{
            studentData[_studentID] = studentDetail( _studentID, _studentName, _std, _division, 0, 0, 0, 0, 0, 0, false);
        }
    }
    
    function addMarks(uint _teacherAddress, uint _studentID, uint _marks) public{
        
        
        if(studentData[_studentID].finalGrade == false)
        {
            if(teacherData[_teacherAddress].subjectcode == 1){
                studentData[_studentID].maths = _marks;
            }
            
            else if(teacherData[_teacherAddress].subjectcode == 2){
                studentData[_studentID].science = _marks;
            }
            
            else if(teacherData[_teacherAddress].subjectcode == 3){
                studentData[_studentID].ss = _marks;
            }
            
            else if(teacherData[_teacherAddress].subjectcode == 4){
                studentData[_studentID].gujarati = _marks;
            }
            
            else if(teacherData[_teacherAddress].subjectcode == 5){
                studentData[_studentID].english = _marks;
            }
            
            else{
                emit errorLog("Please Enter Valid Teacher Address!");
            }
        }
        
        else
        {
            emit errorLog("You can not change marks now!");
        }
    }
    
    function grade(uint _id) public{
        Result = (studentData[_id].maths + studentData[_id].science + studentData[_id].ss + studentData[_id].gujarati + studentData[_id].english)/5;
        
        studentData[_id].parcentage = Result;
        studentData[_id].finalGrade = true;
        
    }
    
    function getStudentData(uint _id) private view returns(uint, string, uint, string, uint, uint, uint, uint, uint, uint, bool){
        return (studentData[_id].studentID,studentData[_id].studentName,studentData[_id].std,studentData[_id].division,studentData[_id].maths, studentData[_id].science, studentData[_id].ss, studentData[_id].gujarati, studentData[_id].english, studentData[_id].parcentage, studentData[_id].finalGrade);
    }
    
}