import React, { useState, useEffect } from "react";
import "./PaymentCard.css";

function PaymentCard() {
  const [firstname, setfirstname] = useState("");
  const [surname, setsurname] = useState("");
  const [cep, setCep] = useState(0);
  const [adress, setAdress] = useState("");
  const [payment, setPayment] = useState("cash");
  const [paymentData, setpaymentData] = useState([]);
  const [totalPrice, settotalPrice] = useState(0)
  const [finish, setfinish] = useState(false)

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
    const paymentInfo = [{
      firstname,
      surname,
      cep,
      adress,
      payment,
    }]
    setpaymentData(paymentInfo);
    localStorage.setItem('paymentData', JSON.stringify(paymentInfo));
  }

  useEffect(() => {
    handleLocalStorage();
  }, [])
  const handleLocalStorage=()=>{
    const data = JSON.parse(localStorage.getItem("paymentData")) || [];
    setpaymentData(data);
    const getValue = JSON.parse(localStorage.getItem("cartItems")) || [];
    const totalPrice = getValue.map((item)=>item.price * item.quantity).reduce((acc,curr)=>acc+curr)
    settotalPrice(parseFloat(totalPrice).toFixed(2));
  };

  const handleBuy=()=>{
    setfinish(true);
  }

  return (
    <div className="PaymentCard">
      <div className="PaymentCard__container">
        <div className="Payment__Modal" style={{display: !finish ? "none" : "block"}}>
          <h1>Obrigado por comprar conosco</h1>
          <div>
            <button>Continuar Comprando</button>
            <button>Log Out</button>
          </div>
        </div>
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
                  required
                />
              </>
              <>
                <label for="SurName">Sobrenome:</label>
                <input
                  onChange={handleData}
                  name="SurName"
                  type="text"
                  id="SurName"
                  required
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
                type="text" id="Endereço" required/>

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
                  required
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
          {console.log(paymentData.length ,"quiiiiiii")}
          {paymentData.length > 0 ? 
          <div className="Payment__display">
            <h1>Confime os seus dados:</h1>
            <p>Nome:{firstname} {surname}</p>
            <p>CEP:{cep}</p>
            <p>Endereço:{adress}</p>
            <p>Metodo de pagamento:{payment}</p>
            <p>Total a pagar:R$ {totalPrice}</p>
            <button
            type="button"
            onClick={handleBuy}
            >Finalizar compra</button>
          </div> : <h4>
            Ainda não temos a sua informação
            </h4>}
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
