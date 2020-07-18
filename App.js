// Chapters # 38 - 42
// Task # 1
function calcPower() {
    var b = document.getElementById("pow").value;
    var e = document.getElementById("exp").value;
    var res;
    res = PowerOfNumber(b, e);
    document.getElementById("res").innerHTML = res;
}

function PowerOfNumber(b, e) {
    var i, pow = 1;

    for (i = 0; i < e; i++) {
        pow = pow * b;
    }
    return pow;
}

// Task # 2
function isLeapYear() {
    var year = document.getElementById("year").value;

    document.getElementById("GFG").innerHTML = (year % 100 === 0) ? (year % 400 === 0) :
        (year % 4 === 0);
}

// Task # 3
function triangleArea(a, b, c) {
    let sp = (a + b + c) / 2;
    let area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
    console.log(area);
}
triangleArea(2, 4, 3.5);

// Task # 4
var sub1marks = +prompt("Enter marks obtained in First Subject: ");
var sub2marks = +prompt("Enter marks obtained in Second Subject: ");
var sub3marks = +prompt("Enter marks obtained in Third Subject: ");
var grandtotalMarks = 350;

function averageMarks(x, y, z) {
    var avg = (x + y + z) / 3;
    return avg;
}

function percentofMarks(m1, m2, m3) {
    var perc = (m1 + m2 + m3) / grandtotalMarks * 100;
    return perc;
}

function mainFunc() {
    var averMarks = averageMarks(sub1marks, sub2marks, sub3marks);
    alert(averMarks);

    var percMarks = percentofMarks(sub1marks, sub2marks, sub3marks);
    alert(percMarks);
}