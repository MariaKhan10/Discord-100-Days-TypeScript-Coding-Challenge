// Iterate over a Map of student IDs and names,and log each pair to the console.

const students = new Map<number,string>();
students.set(1, "Maria");
students.set(2, "Jannat");
students.set(3, "Iqra");

students.forEach((name,id)=> {
    console.log(`Student ID : ${id}, Name: ${name}`)
});

