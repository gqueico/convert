const USD = 5.60;
const EUR = 6.40;
const GBP = 7.41;

const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const footer = document.querySelector("main footer");
const description = document.querySelector("#description");
const result = document.querySelector("#result")

amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break;

    case "EUR":
      convertCurrency(amount.value, EUR, "Є")
      break;

    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break;

    default:
      break;
  }
}

function convertCurrency(amount, price, symbol) {
  try {
    let total = amount * price
    total = formatCurrencyBRL(total).replace("R$", "")

    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
    result.textContent = `${total} Reais`

    footer.classList.add("show-result")
  } catch (error) {
    console.log(error)
    footer.classList.remove("show-result")
    alert("Não foi possível converter. Tente novamente mais tarde")
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}

