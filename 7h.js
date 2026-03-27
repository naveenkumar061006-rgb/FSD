// Constructor function
function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;

    // Method
    this.display = function() {
        return this.name + " is studying " + this.course;
    };
}
let s1 = new Student("Ravi", 20, "CSE");
console.log(s1.name);
console.log(s1.age);
console.log(s1.display());
Object.defineProperty(s1, "details", {
    get: function() {
        return this.name + " - " + this.age;
    }
});

console.log("Accessor:", s1.details);