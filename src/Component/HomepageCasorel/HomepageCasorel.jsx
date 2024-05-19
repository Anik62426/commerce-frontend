import React from "react";
import coursel from "../assets/coursel.jpg";
import { mainCarouselData } from "./MainCarouselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";

function HomepageCasorel() {
  
 const navigate = useNavigate();
  
  const items = mainCarouselData.map( (items)=> <img onClick={()=>navigate("/women")}  className='cursor-pointer rounded  ' 
  role='Presentation'src={items.image} alt = "home"/>)

  return (
    <>

        <div>
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={3000}
        infinite
        animationDuration={1000}
        animationType="fadeout"
        // touchTracking={false}
        // mouseTracking
        // disableDotsControls
        
    />

         
        </div>
    
    </>
  );
}

export default HomepageCasorel;
