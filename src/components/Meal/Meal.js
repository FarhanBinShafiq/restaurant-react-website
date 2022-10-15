import React from 'react';
import './Meal.css'

const Meal = (props) => {
       const {handleToCart,meal}=props;
    const { strCategory, strCategoryThumb, strCategoryDescription } = props.meal;
    return (
        <div className='menu-food-cart'>
            <img  className='menu-image' src={strCategoryThumb} alt=""  />
            <p className='menu-categrory'>{strCategory} <br></br><br></br><button onClick={()=>handleToCart(meal)}>Place Your Order</button></p>
            <p className='menu-cart-description '>{strCategoryDescription}</p>
        </div>
    );
};

export default Meal;

  

