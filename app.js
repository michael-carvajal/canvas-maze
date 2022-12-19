
let count = 0;
let x = 20;
let y = 63;
let circleSize = 5;
let pi = Math.PI * 2;
let direction = 0;
function collision() {
    console.log(x, y);
    if (x >= 300 || y >= 200) {

        x = 20;
        y = 63;
    }
    else if (x <= 0 || y <= 0) {

        x = 20;
        y = 63;
    }


}

setInterval(collision, 200);

window.onload = function () {

    var up = document.getElementById("up");
    var left = document.getElementById("left");
    var down = document.getElementById("down");
    var right = document.getElementById("right");
    var button = document.querySelectorAll('button');


    document.onkeydown = checkKey;
    document.onkeyup = direct0;

    function direct0() {
        direction = 0;
        console.log(direction);
    }

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '38') {
            upmousedown();
        }
        else if (e.keyCode == '40') {
            // down arrow
            direction = 3;
            draw();
        }
        else if (e.keyCode == '37') {
            // left arrow
            direction = 2;
            draw();
        }
        else if (e.keyCode == '39') {
            // right arrow
            direction = 4;
            draw();
        }

    }


    let upmousedown = up.onmousedown = function () {
        direction = 1;
        draw();
    }
    let leftmousedown = left.onmousedown = function () {
        direction = 2;
        draw();
    }
    let downmousedown = down.onmousedown = function () {
        direction = 3;
        draw();
    }
    let rightmousedown = right.onmousedown = function () {
        direction = 4;
        draw();
    }

    up.onmouseup = function () {
        direction = 0;
        draw();
    }
    left.onmouseup = function () {
        direction = 0;
        draw();
    }
    down.onmouseup = function () {
        direction = 0;
        draw();
    }
    right.onmouseup = function () {
        direction = 0;
        draw();
    }


    function draw() {


        if (direction == 0) {
            return
        }
        else if (direction == 1) {
            y -= 1;
        }
        else if (direction == 2) {
            x -= 1;
        }
        else if (direction == 3) {
            y += 1;
        }
        else if (direction == 4) {
            x += 1;
        } else { return }
        maze();
        context.beginPath();
        context.arc(x, y, circleSize, 0, pi);

        context.fillStyle = "#de4646";
        context.fill();

        context.lineWidth = 1;
        context.strokeStyle = "#505050";
        context.stroke();

        context.font = "10px Arial";
        context.fillStyle = 'red';
        context.fillText(`Count is ${count}`, 20, 20);

        window.requestAnimationFrame(draw);



    }



    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");


    // circle
    context.arc(x, y, circleSize, 0, pi);

    context.fillStyle = "#de4646";
    context.fill();

    context.lineWidth = 1;
    context.strokeStyle = "#505050";
    context.stroke();


    // maze
    function maze() {
        context.fillRect(0, 0, 300, 150);  // left wall
        context.clearRect(0, 50, 100, 25);  // top left path
        context.clearRect(100, 50, 25, 75);  // top right path
        context.clearRect(125, 100, 75, 25);  // top right path
        context.clearRect(125, 100, 75, 25);  // top right path
        context.clearRect(200, 125, 25, -100);  // top right path
        context.clearRect(225, 25, 50, 25);  // top right path
        context.clearRect(250, 50, 25, 100);  // top right path
    }
};
