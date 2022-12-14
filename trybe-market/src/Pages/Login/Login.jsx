import React, { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "../../components/Store";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import logo from "../../Assets/LOGO.png";
import "./Login.css";
import {
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { auth } from '../../utils/firebase';


function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setvalid] = useState(false);
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user)
      const user = {
        display: result.user.displayName,
        email: result.user.email,
        userImg: result.user.photoURL,
      };
      const newLocal = localStorage.setItem('user', JSON.stringify((user)));
      console.log(newLocal)
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
    const MIN_LENGTH_PASS = 6;
    const regex = /\S+@\S+\.\S+/;
    const verifyEmail = email && regex.test(email);
    const verifyName = password.length >= MIN_LENGTH_PASS;
    if (verifyEmail && verifyName) {
      setvalid(true);
    } else {
      setvalid(false);
    }
  };
  const handleClick = async () => {
    const user = {
      email,
    };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/home");
  };

  return (
    <div className="Login">
      <div className="Login__container">
        <div className="Login__form">
          <div className="Login__container-logo">
            <img src={logo} alt="TrybeMarket logo" />
          </div>
          <div className="Login__form-acc">
          <input
            type="email"
            className="Login__input-email"
            placeholder="Email"
            data-testid="email-input"
            required
            name="email"
            onChange={handleChange}
            value={email}
          />
          <input
            type="password"
            className="Login__input-password"
            placeholder="Password"
            data-testid="password-input"
            required
            name="password"
            onChange={handleChange}
            value={password}
          />
          </div>
          <button
            className="Login__button"
            onClick={handleClick}
            type="button"
            disabled={!valid}
            data-testid="login-submit-btn"
          >
            Enter
          </button>
           
          <button
            onClick={ GoogleLogin }
            type="button"
            className="Login__google-button"
          >
            <FcGoogle size={20} className="google-svg" />
            Sign in using Google
          </button>
        </div>
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default Login;
