// ProductCard.js
import React, { useState } from 'react';
import bag from '../../assets/bag-removebg-preview.png';
import redBag from '../../assets/red_bag-removebg-preview.png';
import greenBag from '../../assets/green_bag-removebg-preview.png';
import { CiShoppingCart } from "react-icons/ci";
import "./CardForBellroy.css";

const ProductCard = ({ defaultImage }) => {
  // use state for color option
  const [hideColor, setHideColor] = useState(false);
  const [selectedColor, setSelectedColor] = useState("default");

// hideColor is used to show and hide the color option
  const toggleColors = () => {
    setHideColor(!hideColor);
  };

  // colors array for color option
  const colors = [
    { id: 1, name: 'red', hex: '#d30b04' },
    { id: 2, name: 'green', hex: '#008000' },
    { id: 3, name: 'brown', hex: '#411e0b' }
  ];

  // handleColorSelect is used to set the selected color
  const handleColorSelect = (colorName) => {
    setSelectedColor(colorName);
    setHideColor(false);
  };

// getImageByColor is used to get the image by color
  const getImageByColor = () => {
    switch (selectedColor) {
      case 'red':
        return redBag;
      case 'green':
        return greenBag;
      case 'brown':
        return bag;
      default:
        return defaultImage || bag;
    }
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={getImageByColor()} alt={`${selectedColor} bag`} />
        <div className="card-image-overlay">
          <h2 className="card-image-title">Bellroy</h2>
         
          </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">NameOfYourProduct</h3>
        <p className="card-price">$76 <CiShoppingCart /></p>
        <p className="card-description">This is the good product of your daily life</p>
        <button className="card-button" onClick={toggleColors}>Color Option</button>
        <div className="morecolor-option" style={{ display: hideColor ? 'flex' : 'none' }}>
          {colors.map((color) => (
            <button
              key={color.id}
              className="color"
              style={{ backgroundColor: color.hex }}
              onClick={() => handleColorSelect(color.name)}
              aria-label={`Select ${color.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
