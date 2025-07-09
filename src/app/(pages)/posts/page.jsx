import Link from "next/link";

export const metadata = {
    title: "All Posts",
    description: "Here is all posts of out website"
}

export const getPosts = async() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try{
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }catch(err){
        console.error(err);
    }
}

const Posts = async() => {
    const posts = await getPosts();
    return (
        <div>
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
                <h1 className="common_heading">All Posts</h1>

                <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
                    {
                        posts?.map(post => {
                            return (
                                <Link key={post?.id} href={`/posts/${post?.id}`}>
                                    <div className="border rounded-md p-2 hover:shadow-md">
                                        <h1>Post name: {post?.title}</h1>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Posts;