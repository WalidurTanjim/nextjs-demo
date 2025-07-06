import style from "@/app/(pages)/blogs/blogs.module.css"
import Image from "next/image";
import img_01 from "../../../../public/images/doraemon.jpg"
import img_02 from "../../../../public/images/doraemon_2.jpg"
import "@/app/globals.css"

export const metadata = {
    title: "Blogs page",
    description: "This is a Blogs page of NextJS Demo web application. It will show all blogs in here.",
    authors: [
        {name: "Walidur Tanjim"},
        {name: "MD WALIDUR RAHMAN TANJIM", url: "https://www.honeygain.com"}
    ],
    keywords: ['nextjs', 'reactjs', 'mongodb', 'mern stack', 'mernstack', 'full stack', 'fullstack']
}

const Blogs = () => {
    return (
        <div className="font-roboto">
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
                <h1 className={`${style.common_heading} font-roboto`}>Hello, Blogs page</h1>

                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
                    <div className="border rounded-md p-3 text-center">
                        <h1 className="font-work-sans">Walidur Tanjim</h1>
                        <p>MERN Stack Developer</p>
                        <p>Uttara University</p>
                    </div>

                    <div className="border rounded-md p-3 text-center relative h-[250px]">
                        <Image src={img_01} fill={true} quality={100} priority={false} placeholder="blur" blurDataURL="" alt="Card Image" className="w-full h-[250px] rounded-md" />
                    </div>

                    <div className="border rounded-md p-3 text-center relative h-[250px]">
                        <Image src={img_02} fill={true} quality={100} priority={false} placeholder="blur" blurDataURL="" alt="Card Image" className="w-full h-[250px] rounded-md" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;