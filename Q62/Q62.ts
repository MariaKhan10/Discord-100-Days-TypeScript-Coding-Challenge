// Making a Student Template: Create a blueprint for student information,including their name,age and the classes they are taking and then fill in this blueprint with an example student.


interface StudentData {
    name : string;
    age : number;
    courses : string[];
}

let student : StudentData = {
    name : "John",
    age : 22,
    courses : ["Science", "Physics", "English"]
};

console.log(student);