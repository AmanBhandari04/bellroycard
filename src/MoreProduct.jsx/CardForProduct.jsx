import React from 'react';
import bag from '../assets/bag-removebg-preview.png';
import redBag from '../assets/red_bag-removebg-preview.png';
import ProductCard from '../CardForbellroy/ProductCard';

const CardForProduct = () => {
  return (
    <main className="card-div">
      <ProductCard defaultImage={bag} />
      <ProductCard defaultImage={redBag} />
      <ProductCard defaultImage={bag} />
    </main>
  );
};

export default CardForProduct;
