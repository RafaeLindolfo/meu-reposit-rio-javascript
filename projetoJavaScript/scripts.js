const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor do Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas
    console.log(currencySelect.value)

    const dolarToDay = 4.74
    const euroToDay = 5.22
    const pesoToDay = 0.017
    const libraToDay = 6.25
    const ieneToDay = 0.034

    if (currencySelect.value == "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToDay)
    }
    if (currencySelect.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("fr", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToDay)
    }
    if (currencySelect.value == "Peso") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-ar", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue / pesoToDay)
    }
    if (currencySelect.value == "Libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("uk",{
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToDay)
    }
    if (currencySelect.value == "Iene"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja",{
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / ieneToDay)
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    console.log(convertedValue)
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-change")
    const currencyImage = document.querySelector("#img-country")
    if (currencySelect.value == "Dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/USA.png"
    }
    
    if (currencySelect.value == "Euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "Peso"){
        currencyName.innerHTML = "Peso"
        currencyImage.src = "./assets/pesoargentino.png"
    }
    if(currencySelect.value == "Libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    if (currencySelect.value == "Iene"){
        currencyName.innerHTML = "Iene"
        currencyImage.src = "./assets/iene.png"
    }
    convertValues()
}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)