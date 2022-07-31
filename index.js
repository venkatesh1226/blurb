function create() {
    console.log("Hello")
    var name, compName, recAmt, recDate, recNo, appAmt, unappAmt, invoice, receipt, amt, invoice1, receipt1, amt1, total;
    name = document.getElementById("name").value;
    compName = document.getElementById("comp-name").value;
    recAmt = document.getElementById("rec-amt").value;
    recDate = document.getElementById("rec-date").value;
    recNo = document.getElementById("rec-no").value;
    appAmt = document.getElementById("app-amt").value;
    unappAmt = document.getElementById("unapp-amt").value;
    invoice = document.getElementById("invoice").value;
    receipt = document.getElementById("receipt").value;
    amt = document.getElementById("amt").value;
    invoice1 = document.getElementById("invoice1").value;
    receipt1 = document.getElementById("receipt1").value;
    amt1 = document.getElementById("amt1").value;
    total = document.getElementById("total").value;
    var txt = "Hi " + name + ",\n" + "We have received payment from "+compName+" for USD " + recAmt + " on " + recDate + " with receipt no " + recNo + ".\n"
        + "Out of which USD " + appAmt + " is applied, we are left with USD " + unappAmt + " as unapplied which is a duplicate payment.\n Invoice# " + invoice + " is closed with receipt " + receipt + " for USD " + amt + " and Invoice# " + invoice1 + " is closed with receipt " + receipt1 + " for USD " + amt1 +
        "\nRequest you to please confirm if we need to refund the amount of USD "+total+" or apply towards future invoices.\nBanking Details:\n\nAppreciate your prompt response\nThanks & Regards,\nSnehalatha Makkena |FinOps Analyst AR | AWS Cash\nApplications\n\nWork hard. Have fun. Make history.";
    console.log(name );
    document.getElementById("final-txt").innerText = txt;
    
  navigator.clipboard.writeText(txt);
}
