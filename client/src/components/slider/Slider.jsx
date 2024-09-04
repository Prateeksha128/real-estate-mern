import "./Slider.scss";
function Slider({ images }) {
  console.log(images);

  return (
    <div className='slider'>
      <div className='fullSlider'>
        <div className='arrow'>
          <img src='/arrow.png' alt='arrow-icon' />
        </div>
        <div className='imageContainer'>
          <img src={images[0]} alt='property-images' />
        </div>
        <div className='arrow'>
          <img src='/arrow.png' alt='arrow-icon' className='right' />
        </div>
        <div className='close'>X</div>
      </div>
      <div className='bigImage'>
        <img src={images[0]} alt='front-image' />
      </div>
      <div className='smallImages'>
        {images.slice(1).map((img, index) => (
          <img src={img} alt='side-image' key={index} />
        ))}
      </div>
    </div>
  );
}

export default Slider;
