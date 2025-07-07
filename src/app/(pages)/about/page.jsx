import "@/app/globals.css"
import SearchBox from "@/components/SearchBox/SearchBox";

export const metadata = {
    title: "About page",
    description: "This is a About page of NextJS Demo web application. It will show all info in here.",
    authors: [
        {name: "Walidur Tanjim"},
        {name: "MD WALIDUR RAHMAN TANJIM", url: "https://www.honeygain.com"}
    ],
    keywords: ['nextjs', 'reactjs', 'mongodb', 'mern stack', 'mernstack', 'full stack', 'fullstack']
}

const About = (props) => {
    const { search } = props?.searchParams;

    return (
        <div>
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
                <SearchBox />
            </div>
        </div>
    );
};

export default About;