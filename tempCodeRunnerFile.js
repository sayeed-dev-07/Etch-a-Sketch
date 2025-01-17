function colorChange(){
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let code = "#"
    for (let i = 0; i < 6; i++) {
        let randNum = Math.floor(Math.random()*16)
        code += hexArray[randNum]
    }
    return code;
}
console.log(colorChange());