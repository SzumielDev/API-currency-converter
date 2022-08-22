const inputOne = document.querySelector('.amount-one')
const inputTwo = document.querySelector('.amount-two')
const exchangeInfo = document.querySelector('.rate-info')
const currencyOne = document.querySelector('#currency-one')
const currencyTwo = document.querySelector('#currency-two')
const swap = document.querySelector('.swap')

const calculate = () => {
    fetch(`https://api.exchangerate.host/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}`)
    .then(res => res.json())
    .then(data => {
        const currency1 = currencyOne.value
        const currency2 = currencyTwo.value
        const rate = data.rates[currency2]

        exchangeInfo.textContent = `Your current exchange: 1 ${currency1} = ${rate} ${currency2}`

        let change = inputOne.value * 100;
        inputTwo.value = ((change * rate) / 100).toFixed(2)
    })
}

const changePosition = () => {
    let currency1 = currencyTwo.value
    currencyTwo.value = currencyOne.value
    currencyOne.value = currency1
    calculate()
}

inputOne.addEventListener('keyup', calculate)
swap.addEventListener('click', changePosition)