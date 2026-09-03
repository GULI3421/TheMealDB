import React from 'react';
import "./ProductList.css"
import Card from '../card/Card';

export default function ProductList({food}) {
  return (
    <div className='food-flex'>
      {
        food?.map((item)=>(
            <Card data={item}/>
        ))
      }
    </div>
  );
}
