import React from 'react';

const Order =(props) => {

    const {orders}=props;
    
    let foodName=[];

    for(const meal of orders){

        foodName=foodName+meal.strCategory;
         console.log(foodName)
    }


    return (
        <div>
            <p>Total order:{orders.length}</p>
            <p>Ordered Food : {foodName}</p>
        </div>
    );
};

export default Order;