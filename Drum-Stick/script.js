// let keys = document.querySelectorAll(".key")

document.addEventListener("keydown", (e)=>{
    const pressKey = e.keyCode;
    const codeKey = `div.key[data-key="${pressKey}"]`;
    const matchKey = document.querySelector(codeKey);

    const getMusic = matchKey.querySelector("audio");
    
    if( matchKey ) {
        matchKey.classList.add("playing")
        getMusic.currentTime = 0;
        getMusic.play();
    } else {    
        console.log(`Key bukan ${pressKey}`)
    }

});

document.addEventListener("keyup", (e)=>{
    const pressKey = e.keyCode;
    const codeKey = `div.key[data-key="${pressKey}"]`;
    
    const matchKey = document.querySelector(codeKey);

    if( matchKey ) {
        matchKey.classList.remove('playing')
    } else {
        console.log(`setelah dilepas ${pressKey}`);
    }
})

