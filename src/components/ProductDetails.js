import React from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import { PRODUCTS } from './Products';
export default function ProductDetails() {
    let { productId } = useParams()
    const product = PRODUCTS[productId]
    return (
        <div>
            <h2>Details</h2>
            <p>{product.name}</p>
            <img src={product.image} alt={product.name} height="100px" width="100px" />
        </div>

    )

}