const SingleServerPost = async(props) => {
    const { postId, id } = await props?.params;
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    
    const res = await fetch(url);
    const post = await res.json();

    return (
        <div className="font-roboto">
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
                <h1 className="common_heading">Server Client Post</h1> 
                
                <div className="mt-10">
                    <h1>Id: {post?.id}</h1>
                    <h1>Post id:{post?.postId}</h1>
                    <h1>{post?.name}</h1>
                    <p>{post?.email}</p>
                    <p>{post?.body}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleServerPost;