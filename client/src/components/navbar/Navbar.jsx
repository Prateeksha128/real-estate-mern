import "./Navbar.scss"
function Navbar() {
    return (
      <nav>
        <div className='left'>
          <a href='/' className="logo">
            <img src='/logo.png' alt='logo' />
            <span>HomeHunt</span>
          </a>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
          <a href='/'>Agents</a>
        </div>
        <div className='right'>
          <a href='/'>Login</a>
          <a href='/' className="signup">SignUp</a>
        </div>
      </nav>
    );
}

export default Navbar;
