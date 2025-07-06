"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SingleClientPost = () => {
    const [post, setPost] = useState({});
    const params = useParams();
    const postId = params?.postId;
    const id = params?.id;
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;

    useEffect(() => {
        const fetchData = async() => {
            try{
                const res = await fetch(url);
                const data = await res.json();
                setPost(data);
            }catch(err){
                console.error(err);
            }
        };
        fetchData();
    }, []);
    

    return (
        <div className="font-roboto">
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
                <h1 className="common_heading">Single Client Post</h1> 
                
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

export default SingleClientPost;