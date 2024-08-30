import { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className='left'>
        <a href='/' className='logo'>
          <img src='/logo.png' alt='logo' />
          <span>HomeHunt</span>
        </a>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        {/* <Link to="/list">About</Link> */}
        <a href='/'>Contact</a>
        <a href='/'>Agents</a>
      </div>
      <div className='right'>
        <a href='/'>Login</a>
        <a href='/' className='signup'>
          SignUp
        </a>
        <div className='menuIcon'>
          <img
            src='./menu.png'
            alt='sidebar-icon'
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          />
        </div>

        <div className={isOpen ? "menu active" : "menu"}>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
          <a href='/'>Agents</a>
          <a href='/'>Login</a>
          <a href='/'>SignUp</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
