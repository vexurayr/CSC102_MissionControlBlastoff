function countdownTimer() {
    var timer = 50;
    //start at 50 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 000);
    //45 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 5000);
    //40 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 10000);
    //35 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 15000);
    //30 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 20000);
    //25 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 25000);
    //20 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 30000);
    //15 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 35000);
    //10 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 40000);
    //5 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 45000);
    //4 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 46000);
    //3 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 47000);
    //2 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 48000);
    //1 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 49000);
    //Blastoff
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = "Blastoff!";
    }, 50000);
}

function play() {
    var die1 = Math.ceil(Math.random() * 6);


    var die2 = Math.ceil(Math.random() * 6);



    var sum = die1 + die2
    document.write("Die 1 = " + die1)
    document.write("<br/>")
    document.write("Die 2 = " + die2)
    document.write("<br/>")
    document.write("Sum = " + sum)
    document.write("<br/>")
    if (sum == 7 || sum == 11) {
        document.write("CRAPS - you lose")
        document.write("<br/>")
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.write("DOUBLES - you win")
        document.write("<br/>")
    }

}