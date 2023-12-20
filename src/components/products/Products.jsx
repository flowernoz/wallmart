import React from 'react';
import './Products.css'
import { Link } from 'react-router-dom';
import ProductsItem from './ProductsItem';

function Products({ data, title }) {
    return (
        <div className='products'>
            <div className='products_nav'>
                <h3>{title}</h3>
                <Link to={"/"}>View all</Link>
            </div>

            <div className="products__cards">
                {
                    data?.map((product, index) => {
                        return (
                            <ProductsItem key={index} product={product} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Products
