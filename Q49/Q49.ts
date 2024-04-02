// Function with Rest Parameters: Write a Funtion that takes a rest parameter representing multiple hobbies.it should log each hobby with a statement saying you enjoy that hobby.


function hobbies(...hobbies:string[]){
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}`)
    })
}

hobbies("Writing","Reading","Coding");