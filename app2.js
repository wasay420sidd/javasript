function calc(){
    var distance = parseFloat(document.getElementById("meterinput").value);
    var unit = document.getElementById("unit").value;

    if (unit == "gg") {
        var convertdistance = distance / 202.38;
        document.getElementById("answer").value = convertdistance + " Dollar";
    }
    else if (unit == "CM ") {
        var convertdistance = distance /55.10;
        document.getElementById("answer").value = convertdistance + " Dirham";
    }
    else if (unit == "MM") {
        var convertdistance = distance / 2.30;
        document.getElementById("answer").value = convertdistance + " Taka";
    }
    else if (unit == "KM") {
        var convertdistance = distance / 216.74;
        document.getElementById("answer").value = convertdistance + " Euro";
    }
    else if (unit == "sd") {
        var convertdistance = distance / 53.95;
        document.getElementById("answer").value = convertdistance + " Riyal";
    }
    else if (unit == "fg") {
        var convertdistance = distance / 661.79;
        document.getElementById("answer").value = convertdistance + " Dinar";
    }
    else if (unit == "cv") {
        var convertdistance = distance / 254.34;
        document.getElementById("answer").value = convertdistance + " Pound";
    }
    else if (unit == "gh") {
        var convertdistance = distance / 2.61;
        document.getElementById("answer").value = convertdistance + " Indian";
    }
    else  {
        document.getElementById("answer").value = "Choose Input Correctly";
    }


}