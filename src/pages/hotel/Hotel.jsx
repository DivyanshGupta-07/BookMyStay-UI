import React, { useState } from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { IoLocationOutline } from "react-icons/io5";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleXmark } from "react-icons/fa6";


const Hotel = () => {

const [slideNumber,setSlideNumber] = useState(0)
const [openSLider,setOpenSlider] = useState(false)

  const photos = [
    {
      src: "https://www.tajhotels.com/content/dam/luxury/hotels/taj-palace-delhi/new-images-2021/5a.jpg/_jcr_content/renditions/cq5dam.web.756.756.jpeg",
    },
    {
      src: "https://www.tajhotels.com/content/dam/luxury/hotels/taj-palace-delhi/new-images-2021/4a.jpg/_jcr_content/renditions/cq5dam.web.756.756.jpeg",
    },
    {
      src: "https://www.tajhotels.com/content/dam/luxury/hotels/taj-palace-delhi/new-images-2021/3b.jpg/_jcr_content/renditions/cq5dam.web.756.756.jpeg",
    },
    {
      src: "https://www.tajhotels.com/content/dam/luxury/hotels/taj-palace-delhi/new-images-2021/3a.jpg/_jcr_content/renditions/cq5dam.web.756.756.jpeg",
    },
    {
      src: "https://www.tajhotels.com/content/dam/luxury/hotels/taj-palace-delhi/new-images-2021/8b.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
    },
    {
      src: "https://www.tajhotels.com/content/dam/luxury/hotels/taj-palace-delhi/new-images-2021/7a.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
    },
  ];

  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpenSlider(true);
  }

  const handlemove = (direction)=>{
    let newSlideNumber ;
    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber -1;
    }
    else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber +1;
    }
    setSlideNumber(newSlideNumber);
  }

  return (
    <div className="hotel">
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {
          openSLider && 
          <div className="slider">
            <FaCircleXmark className="close" onClick={()=>setOpenSlider(false)}/>
            <FaCircleArrowLeft className="arrow" onClick={()=>handlemove("l")}/>
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FaCircleArrowRight className="arrow" onClick={()=>handlemove("r")}/>
          </div>
        }
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Taj Palace</h1>
          <div className="hotelAddress">
            <IoLocationOutline />
            <span>2 Sardar Patel Marg Diplomatic Enclave, New Delhi</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ₹8900 at this property and get a free airport taxi.
          </span>
          <div className="hotelImages">
            {photos.map((photo,i) => (
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="images" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in heart of India</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                incidunt possimus! Dolorum, facilis quaerat modi temporibus,
                error ea ex quae quidem consequatur maiores aspernatur tempora
                rerum. Laudantium placeat fugit magni cum dolorum odio ex
                temporibus suscipit illum, dolore modi sunt, autem enim omnis
                ipsam excepturi aliquam non explicabo quis ipsa.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of india, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>₹8900 </b>( 9 nights )
              </h2>
              <button>Reserve a book Now!</button>
            </div>
          </div>
        </div>
      <MailList />
      <Footer />
      </div>
    </div>
  );
};

export default Hotel;
