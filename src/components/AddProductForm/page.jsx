"use client"

import { useState } from "react";

const AddProductForm = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const productName = form.product_name.value;
        const payload = { productName };
        // console.log("Payload:", payload);

        const res = await fetch(`http://localhost:3000/api/items`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const result = await res.json();
        // console.log(result);
        if(result?.insertedId){
            setLoading(false);
            form.reset();
        }
    }

    return (
        <form className="w-full" onSubmit={handleSubmit}>
            <input type="text" name="product_name" id="product_name" placeholder="product name" required className="outline-none border border-gray-200 focus:border-gray-300 py-1.5 px-5 focus:ring-2 ring-gray-200 w-full rounded-md" />
            <button type="submit" className="px-5 py-1.5 rounded-md bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white font-medium uppercase mt-2">{loading ? "Pending..." : "Submit"}</button>
        </form>
    );
};

export default AddProductForm;