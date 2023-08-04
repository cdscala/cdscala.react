import './Navbar.css';
import Logo from '../../shop-logo.svg'; 
import CalculatorIcon from '../svgs/icon-calculator.svg'
import CartWidget from '../Cart/CartWidget';
import LoginIcon from '../svgs/icon-login.svg'

export default function Navbar(props) {
  return (
    <nav className='cs-navbar'>
      <div className="cs-nav">
        <img src={Logo} className="cs-brand-logo" alt=""/>
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
        <li className="cs-link-item"><a href="#" className="cs-link">inicio</a></li>
        <li className="cs-link-item"><a href="#" className="cs-link">mujer</a></li>
        <li className="cs-link-item"><a href="#" className="cs-link">hombre</a></li>
        <li className="cs-link-item"><a href="#" className="cs-link">niños</a></li>
        <li className="cs-link-item"><a href="#" className="cs-link">accessorios</a></li>
    </ul>
    </nav>
    
  );
}