
let marks = [85, 92, 67, 45, 78, 55, 39, 88, 95, 72];

let highest = marks[0];
let lowest = marks[0];
let total = 0;

for (let i = 0; i < marks.length; i++) {
    let mark = marks[i];
    let grade;
    let result;

    if (mark >= 40) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    if (mark >= 90) {
        grade = "A";
    } else if (mark >= 80) {
        grade = "B";
    } else if (mark >= 70) {
        grade = "C";
    } else if (mark >= 40) {
        grade = "D";
    } else {
        grade = "F";
    }

    console.log(
        "Student " + (i + 1) + "mark:" + mark + "grade:" + grade  + "result:" + result
    );
    if (mark > highest) {
        highest = mark;
    }
    if (mark < lowest) {
        lowest = mark;
    }

    total += mark;
}

let average = total / marks.length;
console.log("Highest Mark:", highest);
console.log("Lowest Mark:", lowest);
console.log("Average Mark:", average.toFixed(2));