import '../css/navbar.css'
import logo from '../img/logo.svg';

function Navbar() {
    return (
    <div className="navbar">
        <div>
            <input placeholder='Search 9,000+ tutorials' />
        </div>
        <img src={logo} height='20' alt='' />
        <a href='/'>Forum</a>
    </div>
    ) 
}

export default Navbar