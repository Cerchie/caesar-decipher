# caesar-decipher
Deciphers strings that are encoded with caesar ciphers.

To use:

First, sign up for a [DetectLanguage account](https://detectlanguage.com/documentation) for the api key you'll need. 


`git clone https://github.com/Cerchie/caesar-decipher.git && cd caesar-decipher && npm install`

You'll need a .env as well with this value:

```
APIKEY={{API KEY VAL HERE}}
```

Once you've done that, insert the value of the text you want to decode where you see 'ifmmp' here:

```
detectMeaning('ifmmp').then((data) => {
    console.log(data)
})
```


Then run `node app.js` to view the answer in your console.

_Limitations:_

Only works for shifts 1-26, or -1 to -26. 

If you want to use it for a language other than English, you'll need to change line 28 to catch the language code of your choice:
`      result[0].language === 'en' &&`

API response comes back slowly. Would appreciate suggestions for performance improvement! 

### PS: If you're interested in the thought process behind this project, I wrote a [blog post](https://dev.to/cerchie/writing-a-caesar-shift-de-cipher-function-with-javascript-part-2-5df) on it!

Here's the repo where I wrote the original utility code that ENcodes this: https://github.com/Cerchie/caesar-cipher
