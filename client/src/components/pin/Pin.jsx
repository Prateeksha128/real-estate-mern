import { Marker, Popup } from "react-leaflet";
import "./Pin.scss";
import { Link } from "react-router-dom";
function Pin({ item }) {
  console.log(item);
  return (
    <div className='pin'>
      <Marker position={[item.latitude, item.longitude]}>
              <Popup>
                  <div className="popupContainer">
                      <img src={item.img} alt="Property-image" />
                      <div className="textContainer">
                          <Link to={`/${item.id}`}>{item.title}</Link>
                          <span>{item.bedroom} bedroom </span>
                          <b>${ item.price}</b>
                      </div>
                </div>
        </Popup>
      </Marker>
    </div>
  );
}

export default Pin;
