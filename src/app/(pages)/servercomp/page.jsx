import Link from "next/link";

const ServerComp = async() => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    const res = await fetch(url);
    const comments = await res.json();

    return (
        <div>
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
                <h1 className="common_heading">Server Component</h1>

                <div className="mt-10 grid gap-5 gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        comments?.map((comment, idx) => {
                            return (
                                <Link href={`/servercomp/post/${comment?.postId}/${comment?.id}`} key={comment?.id}>
                                    <div className="border rounded-md p-2 hover:shadow-lg">
                                        <h1>PostId: {comment?.postId}</h1>
                                        <h1>{comment?.name}</h1>
                                        <p>{comment?.email}</p>
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

export default ServerComp;