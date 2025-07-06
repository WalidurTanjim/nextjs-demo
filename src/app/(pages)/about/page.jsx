import "@/app/globals.css"

export const metadata = {
    title: "About page",
    description: "This is a About page of NextJS Demo web application. It will show all info in here.",
    authors: [
        {name: "Walidur Tanjim"},
        {name: "MD WALIDUR RAHMAN TANJIM", url: "https://www.honeygain.com"}
    ],
    keywords: ['nextjs', 'reactjs', 'mongodb', 'mern stack', 'mernstack', 'full stack', 'fullstack']
}

const About = () => {
    return (
        <div>
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
                <h1>Hello, About page</h1>
            </div>
        </div>
    );
};

export default About;