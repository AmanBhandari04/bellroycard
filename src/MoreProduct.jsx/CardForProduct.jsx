import React from 'react';
import bag from '../assets/bag-removebg-preview.png';
import redBag from '../assets/red_bag-removebg-preview.png';
import greenBag from '../assets/green_bag-removebg-preview.png';
import ProductCard from '../Component/CardForbellroy/ProductCard';

const CardForProduct = () => {
  return (
    <main className="card-div">
      <ProductCard defaultImage={bag} />
      <ProductCard defaultImage={redBag} />
      <ProductCard defaultImage={greenBag} />
    </main>
  );
};

export default CardForProduct;
