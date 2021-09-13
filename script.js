const makeMoney = document.getElementById("makeMoney");
makeMoney.addEventListener("submit", (event) => {
    event.preventDefault();
    let number = document.getElementById("number").value;
    let coins = document.getElementById("coins").value;
    for (number; number >= 1; number--) {
        let div = document.createElement("div")
        div.classList.add(coins);
        div.classList.add("coins");
        div.innerHTML = coins;
        document.querySelector("nav").appendChild(div);
    }
    let removeCoin = document.getElementsByClassName("coins");
    for (let i = 0; i < removeCoin.length; i++) {
        removeCoin[i].addEventListener("click", (event) => {
            event.target.remove();
        })
    }
})