"use client"

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MealsSearchBox = () => {
    const [search, setSearch] = useState("");
    // console.log("Search text:", search)
    
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const searchQuery = { search };
        const urlQueryParams = new URLSearchParams(searchQuery);
        const url = `${pathname}?${urlQueryParams}`;
        router.push(url);
        // console.log(searchQuery, urlQueryParams, pathname, url);
    }, [search]);

    return (
        <div className="my-10 w-full">
            <input type="search" name="search" id="search" autoComplete="off" placeholder="Search meals" className="outline-none border border-gray-200 rounded-md w-full py-1.5 px-5 focus:border-gray-300 focus:ring-2 ring-gray-200" onChange={e => setSearch(e.target.value)} />
        </div>
    );
};

export default MealsSearchBox;