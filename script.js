function feed()
{
    const feedbtn = document.querySelector(".feed"); 
    const animdisplay = document.querySelector(".animal-display")
    // Add a click event listener to the button
    feedbtn.addEventListener('click', () => {
        // Code to execute when the button is clicked
        console.log("Feeding pet...");








    }); 
}

function rest()
{
    const restbtn = document.querySelector(".rest")
    restbtn.addEventListener('click', () => {
        // Code to execute when the button is clicked
        console.log("Fish sleeping now");
        const img = document.createElement('img');
        img.src = 'FishSleep.png';
        document.querySelector('.fish').replaceWith(img);
    }); 
}

function wakeup()
{
    const wakebtn = document.querySelector(".")
}

function play()
{
    const playbtn = document.querySelector(".play")
    playbtn.addEventListener('click', () => {
        // Code to execute when the button is clicked
        console.log("Fish playing now");
        const img = document.createElement('img');
        img.src = 'FishPlay.gif';
        document.querySelector('.fish').replaceWith(img);
    }); 
}


feed();
rest();
play();

