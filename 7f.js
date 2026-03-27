let text = "My phone number is 9876543210";
let pattern = /\d{10}/;

console.log("Contains number:", pattern.test(text));
console.log("Matched number:", text.match(pattern));