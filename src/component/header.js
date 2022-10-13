import '../css/header.css'
import logo from '../img/logo.svg';

function Header() {
    return (
    <header className="header">
        <div>
            <input placeholder='Search 9,000+ tutorials' />
        </div>
        <img src={logo} height='20' alt='' />
        <a href='/'>Forum</a>
    </header>
    ) 
}

export default Header