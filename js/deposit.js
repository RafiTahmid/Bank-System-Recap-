/*
1. Add event listener to the deposit button
2. Get deposit from the deposit input field
2.5 Convert string deposit to number type
3. Clear the deposit input field after getting the value
4. Get the previous deposit total
5. Calculate new deposit total and set the value total deposit field
6. Get current balance 
7. Calculate the new balance and set it to the balance total element
*/

document. getElementById('btn-deposit'). addEventListener('click', function(){
    const depositField = document. getElementById('deposit-field');
    const newDepositAmountString = depositField. value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = '';

    // Step-4:
    const depositTotalElement = document. getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement. innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Step-5:
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement. innerText = newDepositTotal;

    // Step-6:
    const balanceTotalElement = document. getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement. innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step-7:
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement. innerText = newBalanceTotal;
})