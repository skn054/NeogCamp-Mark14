const intialPrice = document.querySelector("#intial-value");
const noOfStock = document.querySelector("#no-of-stocks");
const currentPrice = document.querySelector("#current-value");
const btn = document.querySelector("#tell-me");
const output = document.querySelector("#output");



function calculateProfitAndLoss(intialStocksValue,NoOfStocks,currentStocksValue){

    var costprice = intialStocksValue * NoOfStocks;
    var sellingprice = currentStocksValue * NoOfStocks;

    if (sellingprice < costprice) {
        var lossperShare = intialStocksValue - currentStocksValue;
        output.innerText = "Hey, the loss is" + " " + lossperShare * NoOfStocks + " and the loss percent is " + (lossperShare / intialStocksValue) * NoOfStocks * 100 + " %"
    }
    else if (sellingprice > costprice) {
        var profitpershare = currentStocksValue - intialStocksValue;
        output.innerText = "Hey, the profit is" + " " + profitpershare * NoOfStocks + " and the profit percent is " + (profitpershare / intialStocksValue) * NoOfStocks * 100 + " %"

    }
    else {
        output.innerText = "No Loss & No profit"
    }
}

function clickHandler() {


    var intialStocksValue = Number(intialPrice.value);
    var NoOfStocks = Number(noOfStock.value);
    var currentStocksValue = Number(currentPrice.value);

    

    if (intialStocksValue == '' || NoOfStocks == '' || currentStocksValue == '' || intialStocksValue <= 0 || NoOfStocks <= 0 || currentStocksValue <= 0) {
        output.classList.add("text");
        output.innerText = "Enter Valid input."

    }
    else {
        output.classList.remove("text");
        calculateProfitAndLoss(intialStocksValue, NoOfStocks, currentStocksValue);
    }

    
}



btn.addEventListener('click', clickHandler);
