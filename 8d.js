let student = {
    name: "Ravi",
    age: 20,
    course: "CSE"
};
for (let key in student) {
    console.log(key + ": " + student[key]);
}
let arr = ["A", "B", "C"];
for (let value of arr) {
    console.log(value);
}
arr.forEach(function(item) {
    console.log(item);
});