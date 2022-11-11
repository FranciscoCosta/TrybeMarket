import React, { Suspense } from 'react'
import { Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import {Model} from '../../components/Store'
import './Login.css'

function Login() {
  return (
    <div className='Login'>
      <div className='Login__container'>
        <div className='Login__form'>
          <h1>Enter</h1>
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