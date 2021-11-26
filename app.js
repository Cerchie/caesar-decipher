require('dotenv').config()
const { caesarShift } = require('./utils')
const DetectLanguage = require('detectlanguage')

const detectlanguage = new DetectLanguage(process.env.APIKEY)

function loopPossibilites(text) {
    let arrayOfPossibilities = []

    for (let i = 0; i <= 26; i++) {
        arrayOfPossibilities.push(caesarShift(text, i))
    }

    return arrayOfPossibilities
}

async function detectMeaning(text) {
    arrayOfPossibleMeanings = []
    let possibilities = loopPossibilites(text)

    for (let i = 0; i <= possibilities.length; i++) {
        try {
            await detectlanguage
                .detect(possibilities[i])
                .then(function (result) {
                    if (
                        result[0] &&
                        result[0].language === 'en' &&
                        result[0].isReliable === true
                    ) {
                        arrayOfPossibleMeanings.push(possibilities[i])
                    }
                })
        } catch (e) {
            console.log('ERROR', e)
        }
    }
    return arrayOfPossibleMeanings
}

detectMeaning('ifmmp').then((data) => {
    console.log(data)
})
