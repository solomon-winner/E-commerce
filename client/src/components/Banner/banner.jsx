import "./banner.css"
import {useState, useEffect} from "react";
const Banner = ({images, interval}) => {
 const [currentSlide, setCurrentSlide] = useState(0);

 useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  }, interval);

  return () => clearInterval(intervalId);
 },[images, interval]);
 const goToSlide = (index) => {
  setCurrentSlide(index);
 }
return (
    <div className="banner">
       {images.map((image, index) =>(
        <div className= {`slide ${index === currentSlide ? 'active' : ''}`}
        key = {index}
        onClick = {() => goToSlide(index)}>
          <img src= {image} alt= {`Slide ${index + 1}}`} />
        </div>
       ))}
        </div>

   

)
}
export default Banner;