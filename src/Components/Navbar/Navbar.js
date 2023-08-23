import './Navbar.css'
import Logo from '../../shop-logo.svg'
import CalculatorIcon from '../svgs/icon-calculator.svg'
import CartWidget from '../Cart/CartWidget'
import LoginIcon from '../svgs/icon-login.svg'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className='cs-navbar'>
      <div className="cs-nav">
        <Link to={``}><img src={Logo} className="cs-brand-logo" alt=""/></Link>
        <div className="cs-nav-items">
            <div className="cs-search">
                <input type="text" className="cs-search-box" placeholder="buscar marca, producto"/>
                <button className="cs-search-btn">buscar</button>
            </div>
            <a href="#"><img src={LoginIcon} alt=""/></a>
            <a href="#"><CartWidget cantidad={3} /></a>
            
            <div className="cs-div-button" id="cs-calculator"><img src={CalculatorIcon} alt=""/></div>
        </div>
    </div>
    <ul className="cs-links-container">
        <li className="cs-link-item"><Link to={``} className="cs-link">inicio</Link></li>
        <li className="cs-link-item"><Link to={`category/mujer`} className="cs-link">mujer</Link></li>
        <li className="cs-link-item"><Link to={`category/hombre`} className="cs-link">hombre</Link></li>
        <li className="cs-link-item"><Link to={`category/niños`} className="cs-link">niños</Link></li>
        <li className="cs-link-item"><Link to={`category/accesorios`} className="cs-link">accessorios</Link></li>
    </ul>
    </nav>
    
  );
}