"use strict";
// Create two modules , one that exports a class and another that imports the class and create an instance.
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var maria = new person_1.Person("Maria");
maria.greet();
