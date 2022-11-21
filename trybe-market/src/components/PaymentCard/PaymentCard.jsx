import React, { useState, useEffect, useContext } from "react";
import "./PaymentCard.css";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { Context } from "../../Context/Context";
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

function  PaymentCard() {
  const [firstname, setfirstname] = useState("");
  const [surname, setsurname] = useState("");
  const [cep, setCep] = useState("");
  const [adress, setAdress] = useState("");
  const [payment, setPayment] = useState("");
  const [paymentData, setpaymentData] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);
  const [finish, setfinish] = useState(false);
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [adressname, setadressname] = useState("");
  const [dataLocaladd, setdataLocaladd] = useState([]);
  const [confirmcep, setconfirmcep] = useState(false);

  const { requestCEP } = useContext(Context);
  const {navigate} = useNavigate();

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

  const handleRequest = async () => {
    const results = await requestCEP(cep);
    setstate(results.state);
    setcity(results.city);
    setadressname(results.address);
    setconfirmcep(true)
  };

  const handleKeepBuying = () => {
    localStorage.removeItem("cartItems");
  };

  const sendData = () => {
    const paymentInfo = [
      {
        firstname,
        surname,
        cep,
        adress,
        payment,
        state,
        city,
        adressname,
      },
    ];
    setpaymentData(paymentInfo);
    localStorage.setItem("paymentData", JSON.stringify(paymentInfo));
    handleDisplay();
  };

  const handleDisplay = () => {
    console.log("aqui");
    const dataLocal = JSON.parse(localStorage.getItem("paymentData")) || [];
    setdataLocaladd(dataLocal);
  };

  useEffect(() => {
    handleLocalStorage();
    handleDisplay();
  }, []);
  const handleLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("paymentData")) || [];
    setpaymentData(data);
    const getValue = JSON.parse(localStorage.getItem("cartItems")) || [];
    const totalPrice = getValue
      .map((item) => item.price * item.quantity)
      .reduce((acc, curr) => acc + curr);
    settotalPrice(parseFloat(totalPrice).toFixed(2));
  };

  const handleBuy = () => {
    setfinish(true);
  };
  const handleLogOut = () => {
    localStorage.clear();
      const authU = getAuth();
                signOut(authU).then(() => {
                  navigate("/")
                }).catch((error) => {
                  console.log(error);
                });
                navigate("/")
              } ;

  return (
    <div className="PaymentCard">
      <div className="PaymentCard__container">
        <div
          className="Payment__Modal"
          style={{ display: !finish ? "none" : "flex" }}
        >
          <div className="Payment__Modal-container">
            <h1 className="Payment__Modal-title">Obrigado pela sua compra! 😁</h1>
            <div className="Payment__Modal-container-btn">
              <Link to={"/home"}>
                <button
                  onClick={handleKeepBuying}
                  className="Payment__Modal-btn"
                >
                  comprar mais
                </button>
              </Link>
              <Link to={"/"}>
                <button onClick={handleLogOut} className="Payment__Modal-btn">
                  Log Out
                </button>
              </Link>
            </div>
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
                  type="number"
                  id="CEP"
                />
              </div>
              {!confirmcep ? (
                <button
                  onClick={handleRequest}
                  type="button"
                  className="Payment__cep-btn"
                >
                  Confirmar CEP
                </button>
              ) : (
                <button
                  type="button"
                  className="Payment__cep-btn-disable"
                  disabled
            
                >
                  CEP confirmado
                </button>
              )}

              <div className="Payment__form-adress">
                <label for="Adress">Complementos:</label>
                <input
                  onChange={handleData}
                  name="Endereço"
                  type="text"
                  id="Endereço"
                  required
                />
              </div>
            </div>
            <h2>Método de pagamento :</h2>
            <div className="Payment__form-container-method">
              <div className="Payment__from-method">
                <input
                  type="radio"
                  id="cash"
                  name="payment"
                  value="Dinheiro"
                  onChange={handleData}
                />
                <label for="cash">Dinheiro</label>
              </div>
              <div className="Payment__from-method">
                <input
                  type="radio"
                  id="credit-card"
                  name="payment"
                  value="Cartão de Crédito"
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
                  value="Cartão de debito"
                  onChange={handleData}
                />
                <label for="debit-card">Cartão de debito</label>
              </div>
            </div>
            <button
              className="PaymentCard__send"
              type="button"
              onClick={sendData}
            >
              Enviar
            </button>
          </form>
        </div>
        <div className="PaymentCard__right">
          {dataLocaladd.length > 0 ? (
            <div className="Payment__display">
              <p>Nome:</p>
              <span>
                {dataLocaladd[0].firstname} {dataLocaladd[0].surname}
              </span>
              <p>CEP:</p>
              <span>{dataLocaladd[0].state}</span>
              <p>Cidade:</p>
              <span>{dataLocaladd[0].city}</span>
              <p>Rua:</p>
              <span>{dataLocaladd[0].adressname}</span>
              <p>CEP:</p>
              <span>{dataLocaladd[0].cep}</span>

              <p>Complementos:</p>
              <span>{dataLocaladd[0].adress}</span>
              <p>Metodo de pagamento:</p>
              <span>{dataLocaladd[0].payment}</span>
              <p>Total a pagar:</p>
              <span>R$ {totalPrice}</span>
              <button type="button" onClick={handleBuy}>
                Finalizar compra
              </button>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
