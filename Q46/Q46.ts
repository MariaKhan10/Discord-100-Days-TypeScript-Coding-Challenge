// Enhanced Laptop Object: Construct an object for a laptop including properties make,model,year and a method describe() that logs a sentence about the laptop.



let laptop = {
    make: "Dell",
    model : "E5540",
    year : 2019,
    describe : function(){
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}`)
    }
};

laptop.describe();