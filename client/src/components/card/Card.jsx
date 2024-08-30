import { Link } from "react-router-dom";
import "./Card.scss";
function Card({ item }) {
  return (
    <div className='card'>
      <Link to={`/${item.id}`} className='imageContainer'>
        <img src={item.img} alt='' />
      </Link>
      <div className='textContainer'>
        <h2 className='title'>
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className='address'>
          <img src='/pin.png' alt='' />
          <span>{item.address}</span>
        </p>
        <p className='price'>${item.price} </p>
        <div className='bottom'>
          <div className='features'>
            <div className='feature'>
              <img src='/bed.png' alt='bedroom-img' />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className='feature'>
              <img src='/bath.png' alt='bathroom-img' />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className='icons'>
            <div className='icon'>
              <img src='/save.png' alt='save-icon' />
            </div>
            <div className='icon'>
              <img src='/chat.png' alt='chat-icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
