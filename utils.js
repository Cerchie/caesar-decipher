const lowerCaseAlphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
]

exports.caesarShift = (inputText, shiftDegrees) => {
    if (shiftDegrees > 26 || shiftDegrees < -26) {
        return 'use a shift between -26 and 26'
    }

    if (typeof shiftDegrees != 'number') {
        return 'shiftDegree must be a number'
    }
    if (typeof inputText != 'string') {
        return 'inputText must be string'
    }
    const inputTextToLowerCase = inputText.toLowerCase()
    let arrayOfAlphaIdxes = []
    //for loops that output array of idxes corresponding to the idx of each letter in inputText
    for (let i = 0; i < inputText.length; i++) {
        for (let j = 0; j < lowerCaseAlphabet.length; j++) {
            if (inputTextToLowerCase[i] === lowerCaseAlphabet[j]) {
                arrayOfAlphaIdxes.push(j)
            }
        }
    }

    let arrayOfMovedAlphaIdxes = []

    //for loop that changes the arrayindex by shift number
    for (let i = 0; i < arrayOfAlphaIdxes.length; i++) {
        let distanceFromEndIncludingCurrentLetter = 27 - arrayOfAlphaIdxes[i]
        //nice thing is that our array is fixed-length!
        // this is where we need to check if shiftDegrees > distance from the end.
        if (shiftDegrees < distanceFromEndIncludingCurrentLetter) {
            let newIdx = arrayOfAlphaIdxes[i] + shiftDegrees

            arrayOfMovedAlphaIdxes.push(newIdx)
        } else {
            let differenceBtw =
                shiftDegrees - distanceFromEndIncludingCurrentLetter

            arrayOfMovedAlphaIdxes.push(differenceBtw)
        }
    }
    // for loop that creates an array of new letters with the new shifted indexes
    arrayWithNewLetters = []
    for (let i = 0; i < arrayOfMovedAlphaIdxes.length; i++) {
        for (let j = 0; j < lowerCaseAlphabet.length; j++) {
            if (arrayOfMovedAlphaIdxes[i] === j) {
                arrayWithNewLetters.push(lowerCaseAlphabet[j])
            }
        }
    }

    const stringWithCommas = arrayWithNewLetters.toString()

    const removedCommas = stringWithCommas.split(',').join('')

    return removedCommas
}
