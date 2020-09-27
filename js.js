var boxes = document.querySelector(".box");
var grid = document.querySelector(".grid-container");
var currentPlayer = '';
var player = '';
var computer = '';
var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
var box5 = document.querySelector("#box5");
var box6 = document.querySelector("#box6");
var box7 = document.querySelector("#box7");
var box8 = document.querySelector("#box8");
var box9 = document.querySelector("#box9");
var choice = document.querySelector(".choice");
var xbutton = document.querySelector("#X");
var obutton = document.querySelector("#O");
var win;


function Winner() {
    if(box1.textContent === currentPlayer && box2.textContent === currentPlayer && box3.textContent === currentPlayer) {
        win = 'true';
    }
    else if(box4.textContent === currentPlayer && box5.textContent === currentPlayer && box6.textContent === currentPlayer) {
        win = 'true';
    }
    else if(box7.textContent === currentPlayer && box8.textContent === currentPlayer && box9.textContent === currentPlayer) {
        win = 'true';
    }
    else if(box1.textContent === currentPlayer && box4.textContent === currentPlayer && box7.textContent === currentPlayer) {
        win = 'true';
    }
    else if(box2.textContent === currentPlayer && box5.textContent === currentPlayer && box8.textContent === currentPlayer) {
        win = 'true';
    }
    else if(box3.textContent === currentPlayer && box6.textContent === currentPlayer && box9.textContent === currentPlayer) {
        win = 'true';
    }
    else if(box1.textContent === currentPlayer && box5.textContent === currentPlayer && box9.textContent === currentPlayer) {
        win = 'true';
    }
    else if(box3.textContent === currentPlayer && box5.textContent === currentPlayer && box7.textContent === currentPlayer) {
        win = 'true';
    } else {
        win = false;
        draw();
    }
}

function draw() {
}


function computerLogic(computer) {
    var random;
    while(true) {
        random = Math.floor(Math.random() * 9) + 1;
        if (document.querySelector("#box" + random).textContent === "") {
            setTimeout(function() {
                document.querySelector("#box" + random).textContent = computer;
                currentPlayer = computer;
                Winner();
            }, 500);
            break;
        }
    }
    
}

xbutton.addEventListener('click', function() {
    player = 'X';
    computer = 'O';
})

obutton.addEventListener('click', function() {
    computer = 'X';
    player = 'O';
    computerLogic(computer);
})

grid.addEventListener("click", function(e) {
    if(e.target.textContent === '') {
        currentPlayer = player;
        e.target.textContent = player;
        Winner();
        if (!win) {
            computerLogic(computer);
        }
    }
})