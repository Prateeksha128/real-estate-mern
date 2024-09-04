import Slider from "../../components/slider/Slider";
import "./SinglePage.scss";
import { singlePostData, userData } from "../../lib/devdata";

function SinglePage() {
  return (
    <div className='singlePage'>
      <div className='details'>
              <div className='wrapper'>
                  <Slider images={ singlePostData.images} />
                  <div className="info">
                      <div className="top">
                          <div className="postInfo">
                              <h1>{singlePostData.title}</h1>
                              <div className="address">
                                  <img src="/pin.png" alt="pin-img" />
                                  <span>{ singlePostData.address}</span>
                              </div>
                              <div className="price">${singlePostData.price }</div>
                          </div>
                          <div className="userInfo">
                              <img src={userData.img} alt="" />
                              <span>{userData.name }</span>
                          </div>
                      </div>
                      <div className="bottom">
                          {singlePostData.description}
                      </div>
                  </div>
        </div>
      </div>

      <div className='features'>
        <div className='wrapper'></div>
      </div>
    </div>
  );
}

export default SinglePage;
