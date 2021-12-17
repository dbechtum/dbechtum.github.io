let large = document.querySelector("#inputLarge");
let medium = document.querySelector("#inputMedium");
let small = document.querySelector("#inputSmall");
let total = document.querySelector("#customPriceDisplay");
let discountDisplay = document.querySelector("#discountDisplay");


function updateTotalPrice(){

    let discountPerItem = 0.025; //5%
    let totaldiscount = 1-((large.value * discountPerItem)+(medium.value * discountPerItem)+(small.value * discountPerItem));
    if(totaldiscount <= 0.7) totaldiscount = 0.7;
    let totalValue = ((large.value * 15) + (medium.value * 10) + (small.value * 5)) * totaldiscount;
    totalValue = Math.round(totalValue * 100) / 100;
    total.innerHTML = `&#36;${totalValue}`;
    if(totaldiscount != 1){
        discountDisplay.innerHTML = `-${((1 - totaldiscount) * 100).toFixed(2)}%`;
        discountDisplay.style.display = "block";
    } else {
        discountDisplay.innerHTML = "";
        discountDisplay.style.display = "none";
    }
}