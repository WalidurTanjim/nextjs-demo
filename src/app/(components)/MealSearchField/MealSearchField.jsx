"use client"

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MealSearchField = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const searchQuery = { search };
        const urlQueryParam = new URLSearchParams(searchQuery);
        const url = `${pathname}?${urlQueryParam}`;
        router.push(url);
    }, [search]);

    return (
        <div className={`meal-search-field w-full py-10`}>
            <input type="search" name="search" id="search" placeholder="Search meal by name" autoComplete="off" onChange={e => setSearch(e.target.value)} className={`w-full px-5 py-2 text-sm text-medium text-gray-600 border border-gray-200 focus:border-gray-300 outline-none rounded-md`} />
        </div>
    );
};

export default MealSearchField;