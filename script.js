function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal<=0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="If you deposit <span id=\"highlight\">"+principal+"</span>, \<br\>at an amount rate of <span id=\"highlight\">"+rate+"%</span>\<br\>You will receive an amount of <span id=\"highlight\">"+amount+"</span>, \<br\>in the year <span id=\"highlight\">"+year+"</span>\<br\>";
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        