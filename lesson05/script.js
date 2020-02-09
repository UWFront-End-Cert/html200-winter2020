let input;
let availableBalance = 1000;
let withdrawAmount = 0;
let depositAmount = 0;
const depositLimit = 50000;
let withdrawLimit;

function transaction() {
	do {

		input = prompt("What transaction do you want to do ?");

		if (input == "w") {
			withdrawAmount = prompt("Enter withdraw amount");
			if (withdrawAmount > availableBalance) {
				alert(" Your can not withdraw more than your available balance  which is " + "$" + availableBalance);
			} else {

				if ((availableBalance - withdrawAmount) <= 300) {
					withdrawLimit = prompt("Your balance becomes lower than $300, do you still want to withdraw ? \n Enter Y to proceed or N to cancel the withdraw");
					if (withdrawLimit == "y")
						availableBalance = availableBalance - withdrawAmount;
				} else
					availableBalance = availableBalance - withdrawAmount;
				alert(" Your balance is " + availableBalance);
			}

		}
		if (input == "d") {
			depositAmount = prompt("Enter deposit amount");
			if (depositAmount >= 50000)
				alert("You can not deposit more than $50000");
			else
				availableBalance = parseInt(availableBalance) + parseInt(depositAmount);
			alert(" Your balance is " + availableBalance);
		}
		if (input == "b") {
			alert(" Your balance is " + availableBalance);
		}
	} while (input != "q");
}
