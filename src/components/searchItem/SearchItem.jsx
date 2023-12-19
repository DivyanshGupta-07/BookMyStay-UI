import React from 'react'
import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img className='siImg' src="https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp" alt="" />
        <div className="siDesc">
            <h1 className="siTitle">Hotel Taj Palace</h1>
            <span className="siDistance">500m form center</span>
            <span className="siTaxiOption">Free Airport Taxi</span>
            <span className="siSubtitle">Studio Apartment with Air Conditioning</span>
            <span className="siFeature">Entire studio + 1 bathroom + 1 full bed</span>
            <span className="siCancleOption">Free Cancilation</span>
            <span className="siCancleOptionSubtitle">You can cancel later, so look in this great price today!</span>
        </div>
        <div className="siDetail">
          <div className="siRating">
            <span>Excellent</span>
            <button>9.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">₹8900</span>
            <span className="siTaxOpt">Includes taxes and fees</span>
            <button className='siCheckButton'>Check Availability</button>
          </div>
        </div>
    </div>
  )
}

export default SearchItem