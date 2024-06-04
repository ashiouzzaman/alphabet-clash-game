function continueGame(){
    const alphabet = getArandomAlphabet();
    console.log(alphabet)
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