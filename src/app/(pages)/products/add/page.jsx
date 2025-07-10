import AddProductForm from "@/components/AddProductForm/page";

const AddProduct = () => {
    return (
        <div>
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
                <h1 className="common_heading">Add Product</h1>

                <div className="mt-5">
                    <AddProductForm />
                </div>
            </div>
        </div>
    );
};

export default AddProduct;