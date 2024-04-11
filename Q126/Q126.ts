// Explain how the "this" keyword changes its value when used inside a nested function within a method.


const myObject = {
    property : "Value",
    outerMethod : function (){
        console.log(this.property); // works as expected,logs "Value" 


    const innerMethod = () => {
        console.log(this.property); // still accesses myObjects "property" due to arrrow function capturing "this" from outer scope.
    }    ;

    innerMethod();
    },
};

myObject.outerMethod();

// this example shows that using an arrow function for thhe inner method preserves the "this" context from the outer method.