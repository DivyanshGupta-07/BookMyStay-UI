import React from 'react'
import './featuredProperties.css'
const FeaturedProperties = () => {
  return (
    <div className='fp'>
        <div className="fpItem">
            <img src="https://www.fohlio.com/hubfs/The-Psychology-of-Hotel-Interior-Design-Part-3-Acoustics-Fohlio-Peninsula-Shanghai-1.jpg" alt="" className="fpImg" />
            <span className="fpName">
Aparthotel Stare Miasto</span>
            <span className="fpCity">Old Town, Poland, Kraków</span>
            <span className="fpPrice">₹10208</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Fabolous</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://www.thespruce.com/thmb/vV_-8n5NBQw8HNXVd1aHR2lVk94=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/modern-living-room-design-ideas-4126797-hero-a2fd3412abc640bc8108ee6c16bf71ce.jpg" alt="" className="fpImg" />
            <span className="fpName">3 Epoques Apartments by Adrez Living</span>
            <span className="fpCity">Prague 1, Czech Republic, Praha 1</span>
            <span className="fpPrice">₹19381</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Superb</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://www.essexapartmenthomes.com/-/media/Project/EssexPropertyTrust/Sites/EssexApartmentHomes/Blog/2021/2021-01-12-Studio-vs-One-Bedroom-Apartment-How-They-Measure-Up/Studio-vs-One-Bedroom-Apartment-How-They-Measure-Up-1.jpg" alt="" className="fpImg" />
            <span className="fpName">7Seasons Apartments Budapest</span>
            <span className="fpCity">06. Terézváros, Hungary, Budapest</span>
            <span className="fpPrice">₹10631</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="http://www.shiningsandbeachhotel.com/assets/img/rooms/cottage%203.jpg" alt="" className="fpImg" />
            <span className="fpName">Villa Domina</span>
            <span className="fpCity">Split City Centre, Croatia, Split</span>
            <span className="fpPrice">₹4349</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Nice</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties