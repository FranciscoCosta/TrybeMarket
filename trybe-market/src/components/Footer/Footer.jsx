import React from 'react'
import'./Footer.css'
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";

function Footer() {
  return (
    <div className='Footer'>
        <div className='Footer__container'>
            <div className='Footer__left'>
            <Link to={"/home"} style={{textDecoration: 'none'}}>
            <h4 className='Links__page'>
                Home
            </h4>
            </Link>
            <Link to={"/profile"} style={{textDecoration: 'none'}}> 
            <h4 className='Links__page'>
                Perfil
            </h4>
            </Link>
            <Link to={"/shoppingcart"} style={{textDecoration: 'none'}}>
            <h4  className='Links__page'>
                Carrinho
            </h4>
            </Link>
            <Link to={"/payment"} style={{textDecoration: 'none'}}>
            <h4 className='Links__page' >
                Pagamento
            </h4>
            </Link>

            </div>
            <div className='Footer__right'>
                <div className='Social'>
                <a href="https://www.linkedin.com/in/francisco-costa-dev/" target="__blank"><AiFillLinkedin size={35}/></a>
                <a href="https://github.com/FranciscoCosta" target="__blank"><AiFillGithub  size={35}/></a>
                <a href="https://www.instagram.com/tuga_no_brasil/" target="__blank"><AiFillInstagram  size={35}/></a>
                </div>
            </div>
            <div className='Footer__legal'>
                <p>Todos os direitos reservados a Francisco Costa 2022 ©</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;