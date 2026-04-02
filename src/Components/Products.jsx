import React, { use} from 'react';
import Product from './Product';

const Products = ({ productsPromise, cart, setCart }) => {
    const products = use(productsPromise);
   


    return (
        <section className='mb-20 w-11/12 mx-auto grid grid-cols-3 not-md:grid-cols-1 gap-7'>
            {
                products.map(product =>
                    <Product key={product.id} product={product} cart={cart} setCart={setCart}></Product>
                )
            }

        </section>
    );
};

export default Products;