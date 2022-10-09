import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useContext } from 'react';
import {CartContext} from '../context/Context';
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom';
const CardInfo = ({item}) => {
    const {removeFromCart} = useContext(CartContext)
  // console.log(item)
  return (
     <span className="cartitem">
      <img
      src={item.image}
      className="cartItemImg"
      alt={item.name}
      />
      <div className="cartItemDetail">
        <span>{item.name}</span>
        <span>₹ {item.price.split(".")[0]}</span>
      </div>
      
      <AiFillDelete
        fontSize="20px"
        style={{ cursor: "pointer" }}
        onClick={() =>removeFromCart(item.id) }
          />
          <Link to="/Cart">
            <Button style={{ width: "95%", margin: "0 10px" }}>Go to Cart</Button>
          </Link>

    </span>

 
  )
}

export default CardInfo
