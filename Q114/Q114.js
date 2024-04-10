// Iterate over a Map of student IDs and names,and log each pair to the console.
var students = new Map();
students.set(1, "Maria");
students.set(2, "Jannat");
students.set(3, "Iqra");
students.forEach(function (name, id) {
    console.log("Student ID : ".concat(id, ", Name: ").concat(name));
});
