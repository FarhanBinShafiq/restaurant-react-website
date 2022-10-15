import React, { useEffect, useState } from 'react';
import Order from '../Order/Order'
import Meal from '../Meal/Meal';
import './Restuarants.css'

const Restuarants = () => {

    const [meals, setMeals] = useState([]);
    const [orders,setOrders]=useState([])
    // const [searchText,setsearchText]=useState('');



    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setMeals(data.categories))
    }, [])

const handleToCart=(meal)=>{
      const newOrder=[...orders,meal]
      console.log(newOrder)
      setOrders(newOrder);
     
}


// const handleSearch=(event)=>{
//     const search=event.target.value;
//     console.log(search);

//     const match=meals.filter(m=>m.strCategory.includes(search))
//     setsearchText(match);
// }

    return (
        <div className='restuarants-cart'>
            <div className='menu-cart'>
                <h2>Food Menu</h2>

                 {/* <input type="text" placeholder='Search' onChange={handleSearch} className='search-box' />    */}

                {
                    meals.map(meal => <Meal key={meal.idCategory} handleToCart={handleToCart} meal={meal}></Meal>)
                }

              
            </div>
            <div>
                <Order orders={orders}></Order>
            </div>

        </div>
    );
};

export default Restuarants;