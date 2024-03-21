import React from 'react'
import ProductItem from './ProductItem'

function ProductList({ productList }) {
    return (
        <div className='mt-10'>
            <h2 className='text-primary font-bold text-2xl'>Our Popular Products</h2>
            <div className='grid gap-5 mt-6
                    grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4'>
                {productList.map((product, index) =>index<8 && (
                    <ProductItem product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductList