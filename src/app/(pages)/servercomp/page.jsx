import SearchBox from "@/components/SearchBox/SearchBox";
import Link from "next/link";

const ServerComp = async(props) => {
    const { search } = await props?.searchParams;
    // console.log(search);

    const url = "https://jsonplaceholder.typicode.com/comments";
    const res = await fetch(url);
    let comments;
    comments = await res.json();

    if(search){
        comments = comments.filter(comment => comment.email.toLowerCase().includes(search))
    }
    console.log(await props.searchParams)

    return (
        <div>
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
                <h1 className="common_heading">Server Component</h1>

                <div className="mt-5">
                    <SearchBox />
                </div>

                <h1 className="text-center font-mediun text-3xl">Total comments: {comments?.length || 0}</h1>

                <div className="mt-10 grid gap-5 gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        comments?.map((comment, idx) => {
                            return (
                                <Link href={`/servercomp/post/${comment?.postId}/${comment?.id}`} key={comment?.id}>
                                    <div className="border rounded-md p-2 hover:shadow-lg">
                                        <h1>PostId: {comment?.postId}</h1>
                                        <h1><span className="font-medium">Name:</span> {comment?.name}</h1>
                                        <p><span className="font-medium">Email:</span> {comment?.email}</p>
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