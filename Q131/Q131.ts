// Create two modules , one that exports a class and another that imports the class and create an instance.


import { Person } from "./person";

const maria = new Person("Maria");

maria.greet();