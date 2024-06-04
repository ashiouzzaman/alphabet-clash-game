function continueGame(){

    // Step 1: Generate a random Alphabet
    const alphabet = getArandomAlphabet();
    console.log(alphabet)

    // Step 2: Show the random alphabet to the screen
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet

    // Step 3: Set bg color
    setBackgroundColor(alphabet)
}




function play(){
    
    // Step 1: hide home
    hideElementById('home-section')
    
    // Step 2: show playground
    showElementById('play-ground')

    // Step 3: Play the game
    continueGame();
}







// function play(){
    
//     // Step 1: hide home
//     hideElementById('home-section')

//     // const homeSection = document.getElementById('home-section')
//     // homeSection.classList.add('hidden')
    
//     // Step 2: show playground
//     showElementById('play-ground')
//     // const playGround = document.getElementById('play-ground')
//     // playGround.classList.remove('hidden')
// }