for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= 5; j++) {
        if ((i + j) % 2 === 0) {
            pattern += "X ";
        } else {
            pattern += "O ";
        }
    }

    console.log(pattern);
}
