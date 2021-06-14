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

    document.getElementById("result").innerHTML="If you deposit "+principal+", \<br\>at an amount rate of "+rate+"%\<br\>You will receive an amount of "+amount+", \<br\>in the year "+year+"\<br\>";
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        