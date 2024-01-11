import "./banner.css"
import {useState, useEffect} from "react";
const Banner = ({images, Message}) => {
 const [currentSlide, setCurrentSlide] = useState(0);

 useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  }, 30000);

  return () => clearInterval(intervalId);
 },[images, 30000]);
 const goToSlide = (index) => {
  setCurrentSlide(index);
 }
return (
        
    <div className = "banner">
    <div className = "container">
        <div className = "wrapper">
            <div className = "myslider">
                <div className = "wrapper">
                    <div className = "slide">
                        <div className = "item">
                        <div className ="image object-cover">
                            {images.map((image, index) =>(
                                             <div className= {`slideImg ${index === currentSlide ? 'active' : ''}`}
                                                   key = {index}
                                                       onClick = {() => goToSlide(index)}>
                                                            <img src= {image} alt= {`Slide ${index + 1}}`} />
                                                                 </div>
                                                              ))}
                                        </div>
                            <div className = "text-content flexcol">
                                <h4>{Message}</h4>
                                <h2><span>Come And Get it!</span><br/> <span>Brand New Shoes!</span></h2>
                                <a href="" className = "primary-button">Shop Now!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      

        
        )
}
export default Banner;
