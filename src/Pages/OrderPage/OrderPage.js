import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../shared/Navigation/Navigation';

const OrderPage = () => {
    const[order, setOrder]=useState([]);

    const { id } = useParams();

    useEffect(()=>{
        fetch(`http://localhost:5000/product/${id}`)
        .then(res=> res.json())
        .then(data=> setOrder(data));
    },[id])

    return (
        <div>
            <Navigation></Navigation>
            {order._id} <br />
            {order.productName}
        </div>
    );
};

export default OrderPage;