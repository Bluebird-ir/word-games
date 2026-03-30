const inputPhrase = (process.argv[2]);
const inputAllWords = inputPhrase.split(' ');
console.log(inputAllWords);
const vowels = ['a', 'A', 'u', 'U', 'i', 'I', 'o', 'O', 'e', 'E'];
let result = '';


const cv = function (inputWord) {
    const pigLatinWord = inputWord.slice(1) + inputWord[0] + 'ay';
    return (pigLatinWord);
}


const cc = function (inputWord) {
    const pigLatinWord = inputWord.slice(2) + inputWord[0] + inputWord[1] + 'ay';
    return (pigLatinWord);
}

const v = function (inputWord) {
    const pigLatinWord = inputWord + 'way';
    return (pigLatinWord);
}


for (i = 0; i < inputAllWords.length; i++) {
    if (!vowels.includes(inputAllWords[i][0]) && vowels.includes(inputAllWords[i][1])) {
        result += cv(inputAllWords[i]);
    } else if (!vowels.includes(inputAllWords[i][0]) && !vowels.includes(inputAllWords[i][1])) {
        result += cc(inputAllWords[i]);
    } else if (vowels.includes(inputAllWords[i][0])) {
        result += v(inputAllWords[i]);
    }
    result += ' ';
}

console.log(result);