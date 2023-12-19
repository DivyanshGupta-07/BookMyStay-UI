import React from "react";
import "./propertyList.css";
const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>Hotels</h1>
          <h2>133 Properties</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>Apartments</h1>
          <h2>133 Properties</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>Resorts</h1>
          <h2>133 Properties</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/87879937.jpg?k=e519dfe65d1421c52383659c9e4f5483af8d183ef7703597a70709b8e8e61247&o=&hp=1"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>Villas</h1>
          <h2>133 Properties</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/279857/pexels-photo-279857.jpeg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>Cabins</h1>
          <h2>133 Properties</h2>
        </div>
      </div>
      
    </div>
  );
};

export default PropertyList;
