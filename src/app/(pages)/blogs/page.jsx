import style from "@/app/(pages)/blogs/blogs.module.css"

const Blogs = () => {
    return (
        <div>
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
                <h1 className={`${style.common_heading}`}>Hello, Blogs page</h1>
            </div>
        </div>
    );
};

export default Blogs;