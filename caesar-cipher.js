const inputString = (process.argv[2]).toLowerCase();
const inputNumber = parseInt((process.argv[3]));

if ((typeof inputString) !== 'string' || (Number.isNaN(inputNumber))) {
    console.log('ERROR - You should write a string followed by a number');

} else {

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let finalPhrase = '';

    for (let i = 0; i < inputString.length; i++) {
        const charIndex = alphabet.indexOf(inputString[i]);
        if (charIndex === -1) {
            finalPhrase += inputString[i];
            continue;
        }
        let charOutputIndex = (charIndex + inputNumber) % alphabet.length;
        if ((charIndex + inputNumber) < 0) {
            charOutputIndex = ((charIndex + inputNumber) % alphabet.length + alphabet.length)
        }
        const outputChar = alphabet[charOutputIndex];
        finalPhrase += outputChar;
    }

    console.log(finalPhrase);
}