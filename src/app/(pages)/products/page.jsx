import React from 'react';

export const metadata = {
    title: "All Products",
    description: "Here is all products of our website"
}

const Products = async() => {
    const res = await fetch(`http://localhost:3000/api/items`);
    const data = await res.json();
    // console.log(data);

    return (
        <div>
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
                <h1 className="common_heading">Products Page</h1>

                <div className="mt-5">
                    {
                        data?.map(product => {
                            return (
                                <div key={product?._id}>
                                    <h1>{product?.productName}</h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;