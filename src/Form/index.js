import React from "react"
import "./style.css";

const Form = () =>
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kalkulator walutowy</legend>
            <p>
                <label>
                    <span className="form__labelText">
                        Kwota PLN:*
                    </span>
                    <input className="form__field" type="number" name="quantity" step="1" min="1" required
                        placeholder="wpisz walutę">
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">
                        Wybierz walute
                    </span>
                </label>
                <select className="currency">
                    <option value="EUR" selected>Euro(EUR)</option>
                    <option value="USD">Amreykański dolar (USD)</option>
                </select>
            </p>
            <div className="form__result">
                <p className="form__result">
                    Wynik: <input className="result" readonly />
                </p>
            </div>
            <p>

        </fieldset>
    </form>

export default Form;
