"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBox = () => {
    const router = useRouter();
    const [search, setSearch] = useState("");

    // handleSearch 
    const handleSearch = (e) => {
        e.preventDefault();

        if(search){
            const searchTrim = search.trim();
            router.push(`?search=${searchTrim}`)
        }
    }

    return (
        <div className="w-full flex items-center justify-center mb-10">
            <form className="flex w-full" onSubmit={handleSearch}>
                <input type="text" id="search_box" name="search_box" placeholder="Search here" autoComplete="off" required value={search} onChange={e => setSearch(e.target.value)} className="outline-none border border-blue-200 rounded-l-md px-5 py-1.5 w-full focus:border-blue-400" />
                <button className="px-5 py-1.5 outline-none border border-blue-200 rounded-r-md bg-blue-500 hover:bg-blue-400 active:bg-blue-500 text-white">Search</button>
            </form>
        </div>
    );
};

export default SearchBox;