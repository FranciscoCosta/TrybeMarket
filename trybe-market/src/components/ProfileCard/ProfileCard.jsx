import React, {useEffect,useState} from 'react'
import './ProfileCard.css'
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { useNavigate } from "react-router-dom";


function ProfileCard() {
  const [email, setEmail] = useState('');
  const [img, setImg] = useState('');
  const [fav, setFav] = useState([])
  const [name, setname] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    handleUserInfo();
    handleFav();
  }, [])

  const handleUserInfo=()=>{
    const dataLocal = JSON.parse(localStorage.getItem("user")) || [];
    console.log(dataLocal)
    if(dataLocal.email !== '' ){
      setEmail(dataLocal.email)
    }
    if(dataLocal.userImg !== ''){
      console.log(dataLocal.userImg)
      setImg(dataLocal.userImg)
    }
    if(dataLocal.display !== ''){
      setname(dataLocal.display)
    }
  
  }

  const handleFav=()=>{
    const oldFav = JSON.parse(localStorage.getItem("Favorites")) || [];
    setFav(oldFav)
  }

  const handleRemoveFav=(id)=>{
    const oldFav = JSON.parse(localStorage.getItem("Favorites")) || [];
    const newFav = oldFav.filter((fav)=>fav.id !== id)
    setFav(newFav)
    localStorage.setItem('Favorites',JSON.stringify(newFav))
  }
  return (
    <div className='ProfileCard'>
      <div className='ProfileCard__container'>
        <div className='ProfileCard__user-account'>
          {name && <h2 className='ProfilceCard__email'> {name}</h2>}
          {email && <h2 className='ProfilceCard__email'>Email: {email}</h2>}
          {img ? <img src={img} alt="User Img" className='ProfilceCard__img'/> : <AiOutlineUser size={40}/>}
        </div>
      <div className='ProfileCard__Favorite'>
        {fav.length > 0 ? 
        <div className='ProfileCard__Favorite-container'>
            {fav.map((favorite)=>(
              <div className='ProfileCard__item-container' key={`${favorite.id}-${favorite.title}`}>
                <img className='ProfileCard__item-img'src={favorite.img} alt={favorite.title} onClick={() => navigate(`/productDetails/${favorite.id}`)}/>
                <h4 className='ProfileCard__item-title' onClick={() => navigate(`/productDetails/${favorite.id}`)}>{favorite.title} </h4>
                <h4 className='ProfileCard__item-price'>$R {favorite.price}</h4>
                <AiFillHeart size={30} color="crimson" cursor="pointer" onClick={()=>handleRemoveFav(favorite.id)}/>
              </div>
            ))}
          </div>
        : <h4 className='ProfilCard__noItems'>Não possui favoritos</h4>}
      </div>
      </div>
    </div>
  )
}

export default ProfileCard;