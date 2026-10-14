
function getGrade(mark) {
    if (mark >= 90) {
        return "A";
    } else if (mark >= 80) {
        return "B";
    } else if (mark >= 70) {
        return "C";
    } else if (mark >= 60) {
        return "D";
    } else {
        return "F";
    }
}


let mark = 85;
console.log("Marks:", mark);
console.log("Grade:", getGrade(mark));

mark = 92;
console.log("Marks:", mark);
console.log("Grade:", getGrade(mark));

mark = 55;
console.log("Marks:", mark);
console.log("Grade:", getGrade(mark));