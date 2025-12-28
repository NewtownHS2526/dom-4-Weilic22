let totalInCent = 0

const popcornButton = document.querySelector("#popcorn")
const sodaButton = document.querySelector("#soda")
const candyButton = document.querySelector("#candy")
const nachosButton = document.querySelector("#nachos")
const iceCreamButton = document.querySelector("#icecream")

const shoppingCart = document.querySelector("#shopping-cart")
const totalSpan = document.querySelector("#total-span")

const updateTotal = () => {
    totalSpan.textContent = totalInCent / 100
}

const addPopcorn = () => {
    shoppingCart.innerHTML += `<p> Popcorn </p>`
    totalInCent += 450
    updateTotal()
}
const addSoda = () => {
    shoppingCart.innerHTML += `<p> Soda </p>`
    totalInCent += 250
    updateTotal()
}
const addCandy = () => {
    shoppingCart.innerHTML += `<p> Candy </p>`
    totalInCent += 175
    updateTotal()
}
const addNachos = () => {
    shoppingCart.innerHTML += `<p> Nachos </p>`
    totalInCent += 500
    updateTotal()
}
const addiceCream = () => {
    shoppingCart.innerHTML += `<p> Ice Cream </p>`
    totalInCent += 325
    updateTotal()
}


popcornButton.addEventListener("click", addPopcorn)
sodaButton.addEventListener("click", addSoda)
candyButton.addEventListener("click", addCandy)
nachosButton.addEventListener("click", addNachos)
iceCreamButton.addEventListener("click", addiceCream)