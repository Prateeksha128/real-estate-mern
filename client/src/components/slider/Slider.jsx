import { useState } from "react";
import "./Slider.scss";
function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  function changeSlide(direction) {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  }
  return (
    <div className='slider'>
      {imageIndex !== null && (
        <div className='fullSlider'>
          <div className='arrow' onClick={() => changeSlide("left")}>
            <img src='/arrow.png' alt='arrow-icon' />
          </div>
          <div className='imageContainer'>
            <img src={images[imageIndex]} alt='property-images' />
          </div>
          <div className='arrow' onClick={() => changeSlide("right")}>
            <img src='/arrow.png' alt='arrow-icon' className='right' />
          </div>
          <div className='close' onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className='bigImage'>
        <img
          src={images[0]}
          alt='front-image'
          onClick={() => setImageIndex(0)}
        />
      </div>
      <div className='smallImages'>
        {images.slice(1).map((img, index) => (
          <img
            src={img}
            alt='side-image'
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
