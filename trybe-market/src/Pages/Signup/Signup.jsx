import React from 'react'
import logo from "../../Assets/LOGO.png";
import signupimg from "../../Assets/singup.jpg"
import "./Signup.css"
// import {useAuth} from "../../Context/AuthContext"

function Signup() {
  return (
    <div className="Signup">
    <div className="Signup__container">
      <div className='Signup__img'>
        <img src={signupimg} alt="Signup img" />
      </div>
      <div className="Signup__form">
        <div className="Signup__container-logo">
          <img src={logo} alt="TrybeMarket logo" />
        </div>
        <h1
        className='Signup__title'
        >Sign Up</h1>
        <div className="Signup__form-acc">
        <input
          type="email"
          className="Signup__input-email"
          placeholder="Email"
          data-testid="email-input"
          required
          name="email"
          // onChange={handleChange}
          // value={email}
        />
        <input
          type="password"
          className="Signup__input-password"
          placeholder="Password"
          data-testid="password-input"
          required
          name="password"
          // onChange={handleChange}
          // value={password}
        />
        <input
          type="password"
          className="Signup__input-password"
          placeholder="Confirm password"
          data-testid="password-input"
          required
          name="comfirm password"
          // onChange={handleChange}
          // value={password}
        />
        </div>
        <button
          className="Signup__button"
          // onClick={handleClick}
          type="button"
          // disabled={!valid}
          data-testid="login-submit-btn"
        >
          Sign Up
        </button>
    </div>
    </div>
    </div>
  )
}

export default Signup;