const isIsogram = (string) => {
    const splitted = string.toLowerCase().split('')
    return splitted.every( (v, i) => splitted.indexOf(v) === i )
}

console.log(isIsogram('ambidExtrously')) // true
console.log(isIsogram('patteRN')) // false