export const getSinglePost = async(post_id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${post_id}`;

    try{
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }catch(err){
        console.error(err);
    }
}

const SinglePost = async(props) => {
    const { id } = await props?.params;
    const singlePost = await getSinglePost(id);
    // console.log(singlePost);

    return (
        <div>
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
                <h1>Post name: {singlePost?.id}</h1>
                <h1>Post name: {singlePost?.title}</h1>
                <p>Post name: {singlePost?.body}</p>
            </div>
        </div>
    );
};

export default SinglePost;