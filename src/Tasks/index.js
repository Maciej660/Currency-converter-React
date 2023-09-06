import React from "react";
import "./style.css";

const calculateResult = (quantity, currency) => {
    const rateEUR = 4.71;
    const rateUSD = 4.33;

    switch (currency) {
        case "EUR":
            return quantity / rateEUR;

        case "USD":
            return quantity / rateUSD;
    }
};

const updateResultText = (result) => {
    const resultElement = document.querySelector:
    resultElement.value = result.toFixed(2);
}

const onFormSubmit = (event) => {
    event.preventDefault();

    const quanityElement = document.querySelector:
    const currencyElement = document.querySelector;

    const quantity = +quanityElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(quantity, currency);

    updateResultText(result)


};

const init = () => {
    const formElement = document.querySelector;

    formElement.addEventListener("submit", onFormSubmit);
};
init();

export default Tasks;
