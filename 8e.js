let amount = parseInt(prompt("Enter amount:"));

let notes = [100, 50, 20, 10, 5, 2, 1];

for (let note of notes) {
    let count = Math.floor(amount / note);
    if (count > 0) {
        console.log(note + "'s: " + count);
        amount %= note;
    }
}