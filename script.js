function changeCalculationType() {
    var calculationType = document.getElementById("calculationType").value;
    
    if (calculationType === "luas") {
        document.getElementById("luasPage").style.display = "block";
        document.getElementById("kelilingPage").style.display = "none";
    } else if (calculationType === "keliling") {
        document.getElementById("luasPage").style.display = "none";
        document.getElementById("kelilingPage").style.display = "block";
    }
}

function calculateArea() {
    var sideLength = parseFloat(document.getElementById("luasSideLength").value);
    var area = sideLength * sideLength;

    var calculationDetails = "Luas = " + sideLength + " × " + sideLength;

    document.getElementById("luasCalculationDetails").innerHTML = calculationDetails + "</li>";
    document.getElementById("luasAreaResult").innerText = area.toFixed(2);
}

function calculatePerimeter() {
    var sideLength = parseFloat(document.getElementById("kelilingSideLength").value);
    var perimeter = 4 * sideLength;

    var calculationDetails = "Keliling = 4 × " + sideLength;

    document.getElementById("kelilingCalculationDetails").innerHTML = calculationDetails + "</li>";
    document.getElementById("kelilingPerimeterResult").innerText = perimeter.toFixed(2);
}

function goBack() {
    document.getElementById("luasSideLength").value = "";
    document.getElementById("luasCalculationDetails").innerHTML = "";
    document.getElementById("luasAreaResult").innerText = "-";

    document.getElementById("kelilingSideLength").value = "";
    document.getElementById("kelilingCalculationDetails").innerHTML = "";
    document.getElementById("kelilingPerimeterResult").innerText = "";
}
