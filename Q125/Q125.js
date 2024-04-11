// Modify a method in an object to use the "this" keyword to access another property in the same object.
var rectangle = {
    length: 4,
    width: 6,
    calculateArea: function () {
        return this.length * this.width;
    }
};
console.log(rectangle.calculateArea());
