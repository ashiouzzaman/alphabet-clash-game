function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getArandomAlphabet(){
    // Step 1: Create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');

    // Step 2: Generate random alphabet
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber)
    const alphabet = alphabets[index]

    return alphabet;

}