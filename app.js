
let count = 0;
let x = 100;
let y = 100;
let circleSize = 10;
let pi = Math.PI * 2;
let direction = 0;
function collision() {
    console.log(x, y);
    if (x >= 300 || y >= 200) {

        x = 141;
        y = 72;
    }
    else if (x <= 0 || y <= 0) {

        x = 141;
        y = 72;
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
            direction = 1;
            draw();
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





    up.onmousedown = function () {
        direction = 1;
        draw();
    }
    up.onmouseup = function () {
        direction = 0;
        draw();
    }

    left.onmousedown = function () {
        direction = 2;
        draw();
    }
    left.onmouseup = function () {
        direction = 0;
        draw();
    }

    down.onmousedown = function () {
        direction = 3;
        draw();
    }
    down.onmouseup = function () {
        direction = 0;
        draw();
    }

    right.onmousedown = function () {
        direction = 4;
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

        //console.log(count, y);
        context.clearRect(0, 0, 600, 400);
        context.beginPath();
        context.arc(x, y, circleSize, 0, pi);

        context.fillStyle = "#de4646";
        context.fill();

        context.lineWidth = 6;
        context.strokeStyle = "#505050";
        context.stroke();

        context.font = "25px Arial";
        context.fillStyle = 'red';
        context.fillText(`Count is ${count}`, 50, 25);
        window.requestAnimationFrame(draw);


    }

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.arc(x, y, circleSize, 0, pi);

    context.fillStyle = "#de4646";
    context.fill();

    context.lineWidth = 6;
    context.strokeStyle = "#505050";
    context.stroke();
};
