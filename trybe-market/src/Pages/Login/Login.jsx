import React, { Suspense } from 'react'
import { Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import {Model} from '../../components/Store'
import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle';
import logo from '../../Assets/LOGO.png'
import './Login.css'

function Login() {
  return (
    <div className='Login'>
      <div className='Login__container'>
        <div className='Login__form'>
        <div className="Login__container-logo">
          <img src={ logo } alt="trybe recepies logo" />
        </div>
          <input
            type="email"
            className="Login__input-email"
            placeholder="Email"
            data-testid="email-input"
            required
            name="email"
            // onChange={ handleChange }
            // value={ email }
          />
          <input
            type="password"
            className="Login__input-password"
            placeholder="Password"
            data-testid="password-input"
            required
            name="password"
            // onChange={ handleChange }
            // value={ password }
          />
          <button
            className="Login__button"
            // onClick={ handleClick }
            type="button"
            // disabled={ !valid }
            data-testid="login-submit-btn"
          >
            Enter
          </button>
          <button
            // onClick={ GoogleLogin }
            type="button"
            className="Login__google-button"
          >
            <FcGoogle size={ 20 } className="google-svg" />
            Sign in using Google
          </button>
        </div>
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2,5,2]} intensity={1} />
        <Suspense fallback={null}>
          <Model/>
          </Suspense>
      </Canvas>
      </div>
    </div>
  )
}

export default Login;