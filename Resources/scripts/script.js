function calculateTip(){
    const billAmount = document.getElementById("billamount").value;
    const quality = document.getElementById("servicequality").value;
    let people = document.getElementById("people").value;


    let tip = 0;

    if (billAmount === "") {
        alert('Please enter a value for the bill.')
    }

    if (people === '' || people === 0) {
        people = 1
    }

    tip = Math.round((billAmount * quality) / people, 2)
    console.log(tip)
    document.getElementById("tip").innerHTML = '£' + tip
    document.getElementById("totaltip").style.visibility = "visible";


    if (tip === 0) {
        document.getElementById("totaltip").style.visibility = "hidden";
    }
}

document.getElementById("totaltip").style.visibility = "hidden";

document.getElementById("calculate").onclick = function() {
    calculateTip();
}