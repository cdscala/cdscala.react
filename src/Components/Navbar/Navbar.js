import './Navbar.css'
import Logo from '../../shop-logo.svg'
import CartWidget from '../Cart/CartWidget'
import LoginIcon from '../svgs/icon-login.svg'
import { Link } from 'react-router-dom'
import WishWidget from '../Wishlist/WishWidget'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { auth, db, logout } from "../../firebase";
import { collection, getDocs, query, where } from 'firebase/firestore'
import { cartContext } from '../../Context/CartContext/CartContext'
import CheckOut from '../CheckOut/CheckOut'

export default function Navbar(props) {
  const { state } = useContext(cartContext)
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [info, showInfo] = useState(false);
  const [checkout, showCheckout] = useState(false);
  const [checkOptions,changeCheckOptions] = useState({title:'prueba',page:'',button:false})
  
  
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  const handleShow = () => {
    showInfo(!info)
    console.log(info)
  }
  const handleCheckout = (value) =>{
    switch (value){
      case 'wish':
        changeCheckOptions({title:'lista de deseos',page:'wishlist',button:false})
        break
      case 'cart':
        changeCheckOptions({title:'carro',page:'cart',button:true})
        break
    }
    showCheckout(!checkout)
  }
  
  useEffect(() => {
    if (user) {
      fetchUserName();
    }
    
  }, [user, info, state]);

  return (
    <Fragment>
    <nav className='cs-navbar'>
      <div className="cs-nav">
        <Link to={`/category`}><img src={Logo} className="cs-brand-logo" alt=""/></Link>
        <div className="cs-nav-items">
            <div className="cs-search">
                <input type="text" className="cs-search-box" placeholder="buscar marca, producto"/>
                <button className="cs-search-btn">buscar</button>
            </div>
            {!user?
            <a href="/login"><img src={LoginIcon} alt=""/></a>
            :
            <a>
              <img className='cs-login-image' src={LoginIcon} alt="" onClick={handleShow}/>
              <div className={info?'cs-login':'cs-login hidden'}>
                <div className='cs-login-info'>
                  <div className='cs-login-info-name'>{name}</div>
                  <button className="cs-login-info-btn" onClick={logout}>
                    logout
                  </button>
                </div>
              </div>
            </a>
           
            }
            
            <a onClick={() => { handleCheckout('cart')}}><CartWidget cantidad={state.orders.length} /></a>
            <a onClick={() => { handleCheckout('wish')}}><WishWidget cantidad={state.wishlist.length} /></a>
            
        </div>
    </div>
    <ul className="cs-links-container">
        <li className="cs-link-item"><Link to={`/category`} className="cs-link">inicio</Link></li>
        <li className="cs-link-item"><Link to={`/category/mujer`} className="cs-link">mujer</Link></li>
        <li className="cs-link-item"><Link to={`/category/hombre`} className="cs-link">hombre</Link></li>
        <li className="cs-link-item"><Link to={`/category/niños`} className="cs-link">niños</Link></li>
        <li className="cs-link-item"><Link to={`/category/accesorios`} className="cs-link">accessorios</Link></li>
    </ul>
    <CheckOut show={checkout} options={checkOptions} ></CheckOut>
    </nav>
    
    </Fragment>
  );
}