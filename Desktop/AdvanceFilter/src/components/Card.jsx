import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { FaShoppingBag } from "react-icons/fa";

const Card = ({ img, title, hasStar, reviews, prevPrice, newPrice }) => {
  return (
    <div>
               <section className="card">
             <img src={img} alt={title} className='card-img'/>
             <div className="card-details">
                <h3 className="card-title">{title}</h3>
                <section className="card-reviews">
                      <AiFillStar className='rating-star' /> <AiFillStar className='rating-star' /> <AiFillStar className='rating-star' /> <AiFillStar className='rating-star'/>
                      <span className="total-reviews">{reviews}</span>
                </section>

                <section className="card-price">
                    <div className="price">
                        <del>{prevPrice}</del>${newPrice}
                    </div>

                    <div className="bag">
                        <FaShoppingBag  className='bag-icon'/>
                    </div>
                </section>
             </div>
         </section>
    </div>
  )
}

export default Card