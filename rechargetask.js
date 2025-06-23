let balance = 1000

function mobileRecharge() {
    console.log("MOBILE RECHARGE SYSTEM");
    console.log("check Balance");
    console.log("recharge balance");
    console.log("use data");
    console.log("exit");
}

function checkBalance() {
    console.log(`your account has ${balance} rs left`)
}

function rechargeBalance() {
    let amount = parseFloat(prompt("enter the desired amount to recharge"))

    if (amount > 0 && !isNaN(amount)) {
        console.log("Recharge Successful")
    }
    else {
        console.log("Invalid Amount");
    }
    balance += amount
}

function data() {
    let position = prompt("Is yout mobile data turned on or off??")
    if (position === "on") {
        dataamt = parseFloat(prompt("enter the used amount :"))
        balance -= dataamt
    }
    else {
        console.log("data is off");

    }
}

function exit() {
    console.log("Exited");

}

function recharge() {
    mobileRecharge()
    let choice
    do {
        choice = parseFloat(prompt("enter the choice"))

        switch (choice) {
            case 1: checkBalance()
                break
            case 2: rechargeBalance()
                break
            case 3: data()
                break
            case 4: exit()
                break

            default:
                console.log("invalid option")
        }
    }
    while (choice != 4)

}

recharge()