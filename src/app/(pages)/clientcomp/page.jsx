"use client";

import SearchBox from "@/components/SearchBox/SearchBox";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ClientComp = () => {
    const searchParams = useSearchParams();
    const [comments, setComments] = useState([]);
    const [filteredComments, setFilteredComments] = useState([]);

    const url = "https://jsonplaceholder.typicode.com/comments";
    useEffect(() => {
        const fetchData = async() => {
            try{
                const res = await fetch(url);
                const data = await res.json();
                setComments(data);
                setFilteredComments(data);
            }catch(err){
                console.error(err);
            }
        };
        fetchData();
    }, [url]);

    const search = searchParams.get('search');
    const allSearch = searchParams.getAll('page');
    const allEntries = Object.fromEntries(searchParams.entries());
    const getValue = searchParams.values();
    console.log("Search params:", search);
    // console.log('All search params:', allSearch);
    // console.log('All entries:', allEntries);
    // console.log("Get value:", getValue);

    // get all keys from url
    for(const key of searchParams.keys()){
        // console.log("Search param key:", key);
    }

    // get all values from url
    for(const keyValue of searchParams.values()){
        // console.log("Search params value:", keyValue);
    }

    // get keys using map
    for(const key of searchParams.entries()){
        // console.log('key:', key)
    }
    searchParams.forEach((key, value) => {
        // console.log(key, value)
    })

    // useEffect(() => {
    //     if(search){
    //         const newComments = comments.filter(comment => comment.email.toLowerCase().includes(search));
    //         setComments(newComments);
    //     }else{
    //         setComments(comments)
    //     }
    // }, [search, comments]);

    useEffect(() => {
        if(search){
            const newComments = comments.filter(comment => comment?.email.toLowerCase().includes(search));
            setFilteredComments(newComments);
        }else{
            setFilteredComments(comments);
        }
    }, [search, comments]);
    

    return (
        <div className="font-roboto">
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
                <h1 className="common_heading">Client Component</h1>

                <div className="mt-5">
                    <SearchBox />
                </div>

                <h1 className="text-center font-mediun text-3xl">Total comments: {filteredComments.length || 0}</h1>

                <div className="mt-10 grid gap-5 gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        filteredComments?.map((comment, idx) => {
                            return (
                                <Link href={`/clientcomp/post/${comment?.postId}/${comment?.id}`} key={comment?.id}>
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

export default ClientComp;