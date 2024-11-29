// game speed
let slow = document.getElementById('slow');
let medium = document.getElementById('medium');
let fast = document.getElementById('fast');

// user score
let userScore = document.getElementById('userScore');
let highScore = document.getElementById('highScore');

// game board
let board = document.getElementById('board');

// snake body and food generate randomly
let snakeDir = {x:1,y:0};
let snakeArr = [{x:Math.round((Math.random()*18)+2),y:Math.round((Math.random()*18)+2)}];
let food = {x:Math.round((Math.random()*18)+2),y:Math.round((Math.random()*18)+2)};

let lastPaintTime = 0;

// initially game is paused
let isPlay = false;

// user score and high score
let snakeScore = 0;
let snakeHighScore = 0;

// increase the speed of snake game
let speed = JSON.parse(localStorage.getItem('speed')) ?? 5;

// click to slow the game speed
slow.addEventListener('click',()=>{
    speed = 2;
    localStorage.setItem('speed',JSON.stringify(speed));
});

// click to medium the game speed
medium.addEventListener('click',()=>{
    speed = 5;
    localStorage.setItem('speed',JSON.stringify(speed));
});

// click to fast the game speed
fast.addEventListener('click',()=>{
    speed = 8;
    localStorage.setItem('speed',JSON.stringify(speed));
});

// checking the condition whether snake has collided with wall or itself
let iscollide = (snakeBody)=>{
    for(let i=1;i<snakeBody.length;i++){
        if(snakeBody[i].x === snakeBody[0].x && snakeBody[i].y === snakeBody[0].y){
            return true;
        }
    }
    if(snakeBody[0].x >= 20 || snakeBody[0].x <= 0 || snakeBody[0].y >= 20 || snakeBody[0].y <= 0){
        return true
    }
}

// getting Stars based on snakeHighScore
let getStars = (snakeHighScore)=>{
    if(snakeHighScore >= 250){
        stars[0].children[0].classList.add('fa-solid');
        stars[0].children[0].classList.remove('fa-regular');
        stars[1].children[0].classList.add('fa-solid');
        stars[1].children[0].classList.remove('fa-regular');
        stars[2].children[0].classList.add('fa-solid');
        stars[2].children[0].classList.remove('fa-regular');
        stars[3].children[0].classList.add('fa-solid');
        stars[3].children[0].classList.remove('fa-regular');
        stars[4].children[0].classList.add('fa-solid');
        stars[4].children[0].classList.remove('fa-regular');
    }
    else if(snakeHighScore >= 200){
        stars[0].children[0].classList.add('fa-solid');
        stars[0].children[0].classList.remove('fa-regular');
        stars[1].children[0].classList.add('fa-solid');
        stars[1].children[0].classList.remove('fa-regular');
        stars[2].children[0].classList.add('fa-solid');
        stars[2].children[0].classList.remove('fa-regular');
        stars[3].children[0].classList.add('fa-solid');
        stars[3].children[0].classList.remove('fa-regular');
    }
    else if(snakeHighScore >= 150){
        stars[0].children[0].classList.add('fa-solid');
        stars[0].children[0].classList.remove('fa-regular');
        stars[1].children[0].classList.add('fa-solid');
        stars[1].children[0].classList.remove('fa-regular');
        stars[2].children[0].classList.add('fa-solid');
        stars[2].children[0].classList.remove('fa-regular');
    }
    else if(snakeHighScore >= 100){
        stars[0].children[0].classList.add('fa-solid');
        stars[0].children[0].classList.remove('fa-regular');
        stars[1].children[0].classList.add('fa-solid');
        stars[1].children[0].classList.remove('fa-regular');
    }
    else if(snakeHighScore >= 50){
        stars[0].children[0].classList.add('fa-solid');
        stars[0].children[0].classList.remove('fa-regular');
    }
}


// repeating the main function again and again
let main = (currTime)=>{
    window.requestAnimationFrame(main);
    if(((currTime - lastPaintTime)/1000) < (1/speed)) return;
    lastPaintTime = currTime;
    if(isPlay){
        snakeGame();
    }
}

// creating starting of snake game 
let snakeGame = ()=>{
    // checking the condition whether snake has collided with wall or itself
    if(iscollide(snakeArr)){
        alert('Game Over!!');
        location.replace('index.html');
        snakeArr = [{x:Math.round((Math.random()*18)+2),y:Math.round((Math.random()*18)+2)}];
        snakeDir = {x:0,y:0};
        isPlay = false;
    }
    
    // creating if snake has been eaten the food
    if(snakeArr[0].x === food.x && snakeArr[0].y === food.y){
        snakeScore += 1;
        if(snakeScore > snakeHighScore){
            snakeHighScore = snakeScore;
            getStars(snakeHighScore);
            localStorage.setItem('snakeHighScore',JSON.stringify(snakeHighScore));
            highScore.innerHTML = `High Score : <span id="highScoreValue">${snakeHighScore}</span>`;
        }
        userScore.innerHTML = `Score : <span id="scoreValue">${snakeScore}</span>`;
        snakeArr.unshift({x:snakeArr[0].x + snakeDir.x , y:snakeArr[0].y + snakeDir.y});
        let a = 2;
        let b = 18;
        food = {x:Math.floor(a + (b-a) * Math.random()), y:Math.floor(a + (b-a) * Math.random())};
    }
    
    // creating the moving snake with snake body
    for(let i = snakeArr.length-2; i>=0; i--){
        snakeArr[i+1] = {...snakeArr[i]};
    }

    // creating a moving of snake only without snake body
    snakeArr[0].x += snakeDir.x; 
    snakeArr[0].y += snakeDir.y; 
    
    // the board on which snake moves
    board.innerHTML = '';

    // creating snake's head and body
    snakeArr.forEach((snakeValue,index)=>{
        let snakeHead = document.createElement('div');
        snakeHead.style.gridRowStart = snakeValue.y;
        snakeHead.style.gridColumnStart = snakeValue.x;
        if(index === 0){
            snakeHead.classList.add('head');
        }
        else{
            snakeHead.classList.add('snake-body');
        }
        board.appendChild(snakeHead);
    });

    // creating snake's food
    let snakeFood = document.createElement('div');
    snakeFood.style.gridRowStart = food.y;
    snakeFood.style.gridColumnStart = food.x;
    snakeFood.classList.add('food');
    board.appendChild(snakeFood);
}

// creating a direction for snake to move in which direction
let onKeyDown = (e)=>{
    console.log(e.key);
    switch(e.key){
        case 'k':
        case 'K':
        case '5':
        case 'Clear':
        case '0':
        case ' ':
            if(e.key === ' ' || e.key === 'k' || e.key === 'K' || e.key === '5' || e.key === '0' || e.key === 'Clear'){
                if(isPlay === false){
                    isPlay = true;
                }
                else{
                    isPlay = false;
                }
            }
            break;
        case '6':
        case 'l':
        case 'L':
        case 'ArrowRight':
            if((e.key === 'ArrowRight' || e.key === '6' || e.key === 'l' || e.key === 'L') && snakeDir.x === 0){
                snakeDir.x = 1;
                snakeDir.y = 0;
            }
            break;
        case '4':
        case 'j':
        case 'J':
        case 'ArrowLeft':
            if((e.key === 'ArrowLeft' || e.key === '4' || e.key === 'j' || e.key === 'J')&& snakeDir.x === 0){
                snakeDir.x = -1;
                snakeDir.y = 0;
            }
            break;
        case '8':
        case 'ArrowUp':
            if((e.key === 'ArrowUp' || e.key === '8') && snakeDir.y === 0){
                snakeDir.x = 0;
                snakeDir.y = -1;
            }
            break;
        case '2':
        case 'ArrowDown':
            if((e.key === 'ArrowDown' || e.key === '2' ) && snakeDir.y === 0){
                snakeDir.x = 0;
                snakeDir.y = 1;
            }
            break;
        default:
            break;
    }
}

window.addEventListener('keydown',onKeyDown);

let up = document.getElementById('i2');
let left = document.getElementById('i4');
let play = document.getElementById('i5');
let right = document.getElementById('i6');
let down = document.getElementById('i8');

const onKeyClick = (e)=>{
    let key = e.target.getAttribute('data-value');
    switch(key){
        case 'Play':
            if(key === 'Play'){
                isPlay = true;
                if(e.target.children[0]){
                    e.target.setAttribute('data-value','Pause');
                    e.target.children[0].classList.add('fa-pause');
                    e.target.children[0].classList.remove('fa-play');
                    e.target.children[0].setAttribute('data-value','Pause');
                }
                else{
                    e.target.setAttribute('data-value','Pause');
                    e.target.classList.add('fa-pause');
                    e.target.classList.remove('fa-play');
                    e.target.parentElement.setAttribute('data-value','Pause');
                }
            }
            break;
        case 'Pause':
            if(key === 'Pause'){
                isPlay = false;
                if(e.target.children[0]){
                    e.target.setAttribute('data-value','Play');
                    e.target.children[0].classList.add('fa-play');
                    e.target.children[0].classList.remove('fa-pause');
                    e.target.children[0].setAttribute('data-value','Play');
                }
                else{
                    e.target.setAttribute('data-value','Play');
                    e.target.classList.add('fa-play');
                    e.target.classList.remove('fa-pause');
                    e.target.parentElement.setAttribute('data-value','Play');
                }
            }
            break;
        case 'Right':
            if(key === 'Right' && snakeDir.x === 0){
                snakeDir.x = 1;
                snakeDir.y = 0;
            }
            break;
        case 'Left':
            if(key === 'Left' && snakeDir.x === 0){
                snakeDir.x = -1;
                snakeDir.y = 0;
            }
            break;
        case 'Up':
            if(key === 'Up' && snakeDir.y === 0){
                snakeDir.x = 0;
                snakeDir.y = -1;
            }
            break;
        case 'Down':
            if(key === 'Down' && snakeDir.y === 0){
                snakeDir.x = 0;
                snakeDir.y = 1;
            }
            break;
        default:
            break;
    }
}

up.addEventListener('click',onKeyClick);
left.addEventListener('click',onKeyClick);
play.addEventListener('click',onKeyClick);
right.addEventListener('click',onKeyClick);
down.addEventListener('click',onKeyClick);

let stars = document.querySelectorAll('.star');

snakeHighScore = localStorage.getItem('snakeHighScore');
if(snakeHighScore === null){
    snakeHighScore = 0;
    localStorage.setItem('snakeHighScore',JSON.stringify(snakeHighScore));
}
else{
    highScore.innerHTML = `High Score : <span id="highScoreValue">${JSON.parse(snakeHighScore)}</span>`;
    getStars(snakeHighScore);
}

window.requestAnimationFrame(main);