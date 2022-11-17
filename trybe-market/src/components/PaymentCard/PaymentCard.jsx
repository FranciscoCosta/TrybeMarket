import React, { useState } from "react";
import "./PaymentCard.css";

function PaymentCard() {
  const [firstname, setfirstname] = useState("");
  const [surname, setsurname] = useState("");
  const [cep, setCep] = useState(0);
  const [adress, setAdress] = useState("");
  const [payment, setPayment] = useState("cash");

  const handleData = (event) => {
    if (event.target.name === "FirstName") {
      setfirstname(event.target.value);
    } else if (event.target.name === "SurName") {
      setsurname(event.target.value);
    } else if (event.target.name === "CEP") {
      setCep(event.target.value);
    } else if (event.target.name === "Endereço") {
      setAdress(event.target.value);
    } else if (event.target.name === "payment") {
      setPayment(event.target.value);
    }
  };

  const sendData=()=>{
    const paymentInfo = {
      firstname,
      surname,
      cep,
      adress,
      payment,
    }
    localStorage.setItem('paymentData', JSON.stringify(paymentInfo));
  }

  return (
    <div className="PaymentCard">
      <div className="PaymentCard__container">
        <div className="PaymentCard__left">
          <form className="Payment__form">
            <h1>Dados para o pagamento:</h1>
            <div className="Payment__form-Name">
              <>
                <label for="FirstName">Nome:</label>
                <input
                  onChange={handleData}
                  name="FirstName"
                  type="text"
                  id="FirstName"
                />
              </>
              <>
                <label for="SurName">Sobrenome:</label>
                <input
                  onChange={handleData}
                  name="SurName"
                  type="text"
                  id="SurName"
                />
              </>
            </div>
            <div className="Payment__form-row">
              <div className="Payment__form-Name">
                <label for="CEP">CEP:</label>
                <input
                onChange={handleData}
                name="CEP"    
                type="number" id="CEP" />
              </div>
              <div className="Payment__form-adress">
                <label for="Adress">Endereço:</label>
                <input
                                onChange={handleData}
                                name="Endereço"  
                type="text" id="Endereço" />
              </div>
            </div>
            <h2>Método de pagamento :</h2>
            <div className="Payment__form-container-method">
              <div className="Payment__from-method">
                <input type="radio" id="cash" name="payment" value="cash" onChange={handleData}/>
                <label for="cash">Dinheiro</label>
              </div>
              <div className="Payment__from-method">
                <input
                  type="radio"
                  id="credit-card"
                  name="payment"
                  value="credit-card"
                  onChange={handleData}
                />
                <label for="credit-card">Cartão de Crédito</label>
              </div>
              <div className="Payment__from-method">
                <input
                  type="radio"
                  id="debit-card"
                  name="payment"
                  value="debit-card"
                  onChange={handleData}
                />
                <label for="debit-card">Cartão de debito</label>
              </div>
            </div>
            <button className="PaymentCard__send" type="button" onClick={sendData}>
              Enviar
            </button>
          </form>
        </div>
        <div className="PaymentCard__right">
          <div className="Payment__display">
            <h1>Confime os seus dados:</h1>
            <p>Nome:</p>
            <p>CEP:</p>
            <p>Endereço:</p>
            <p>Metodo de pagamento:</p>
            <p>Total a pagar:</p>
            <button>Finalizar compra:</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
