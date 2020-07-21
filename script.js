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
        var depositAmount = getInputValue("depositAmount")

        updateValue("currentDeposit",depositAmount);
        updateValue("currentBalance",depositAmount);

        document.getElementById("depositAmount").value = "";

    })

    // withdraw event
    var withdrawBtn = document.getElementById("withdrawBtn");
    withdrawBtn.addEventListener("click", function(){
        //from withdraw input field
        var withdrawAmount = getInputValue("withdrawAmount");

        updateValue("currentWithdraw",withdrawAmount);
        updateValue("currentBalance",-withdrawAmount);

        document.getElementById("withdrawAmount").value = "";
    })


    //-------------------------------------------------------------------
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
        
        var value = getCurrentValue(id);
        if (depositAmount >0 || depositAmount <0) {
            value += depositAmount;
            document.getElementById(id).innerText = value;
        }
    }
}