function print() {
    for (var i = 0; i < arguments.length; i++)
        console.log(i + " --> " + arguments[i] + " ");
}
//-----------------------------------------

window.onload = function () {
    //code starting from here

    //login event
    var loginBtn = document.getElementById("login-btn");
    loginBtn.addEventListener("click", function () {
        const loginArea = document.getElementById("login-area");
        loginArea.style.display = "none";
        //print(typeof(loginArea));
        const transArea = document.getElementById("transaction-area");
        transArea.style.display = "block";
    });

    //deposit event
    var depositBtn = document.getElementById("depositBtn");
    depositBtn.addEventListener("click", function () {
        //from deposit input field
        // var getDepositAmount = document.getElementById("depositAmount").value;
        // var depositAmount = parseFloat(getDepositAmount);
        var depositAmount = getInputValue("depositAmount")
        updateValue("currentDeposit",depositAmount);
        updateValue("currentBalance",depositAmount);

        // //from html deposit
        // var getCurrentDeposit = document.getElementById("currentDeposit").innerText;
        // var currentDeposit = parseFloat(getCurrentDeposit);
        
        // //from html balance
        // var getCurrentBalance = document.getElementById("currentBalance").innerText;
        // var currentBalance = parseFloat(getCurrentBalance);

        // if (depositAmount > 0) {
        //     currentDeposit = currentDeposit + depositAmount;
        //     document.getElementById("currentDeposit").innerText = currentDeposit;
            
        //     currentBalance = currentBalance + depositAmount;
        //     document.getElementById("currentBalance").innerText = currentBalance;
        // }
        document.getElementById("depositAmount").value = "";

    })

    function getInputValue(id){
        var inputValue = document.getElementById(id).value;
        var value = parseFloat(inputValue);
        return value;
    }

    function getCurrentValue(id){
        var currentValue = document.getElementById(id).innerText;
        var value = parseFloat(currentValue);
        return value;
    }

    function updateValue(id,depositAmount){
        
        // var getValue = document.getElementById(id).innerText;
        // var value = parseFloat(getValue);
        var value = getCurrentValue(id);
        if (depositAmount > 0) {
            value += depositAmount;
            document.getElementById(id).innerText = value;
        }
    }
}