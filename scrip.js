// Started at 1:58 2-6-2022

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven'],
    true
];

// 0, 1 ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights reptition ${rep}`)
    }
};

// // for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// };

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♂️`);
    rep++;
};

// Ended at 2:58 2-6-2022

// 2nd hour 2-6-2022 

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("Loop is about to end...");
}

// Cdoing challenge #4 


const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2
}
const bills = [22, 295, 176, 440, 37, 105, 10, 110, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
}

console.log(bills, tips, totals);

// ended at 6:00 2-6-2022
