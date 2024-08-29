import SearchBar from "../components/searchBar/SearchBar";
import "./Homepage.scss";
function Homepage() {
  return (
    <div className='homepage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            dolorum, rem harum ipsum dolorem ducimus, ipsam, et corporis vitae
            iste aliquam magni natus nobis nihil saepe minima fuga. Id, natus.
          </p>
          <SearchBar />

          <div className='boxes'>
            <div className='box'>
              <h1>24/7</h1>
              <h2>Support Availability</h2>
            </div>
            <div className='box'>
              <h1>200+</h1>
              <h2>Happy Clients</h2>
            </div>
            <div className='box'>
              <h1>1200+</h1>
              <h2>Poperty Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='imageContainer'>
        <img src='./bg.png' alt='background-img' />
      </div>
    </div>
  );
}

export default Homepage;
