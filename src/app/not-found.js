"use client"

import { useRouter } from "next/navigation";

const NotFoundPage = () => {
    const router = useRouter();

    const handleBackToHome = () => {
        router.push('/');
    }

    return (
        <section className={`not-found w-full h-screen flex items-center justify-center`}>
            <div>
                <h1 className="text-2xl md:text-3xl font-medium text-slate-800">Page not found. Please try again.</h1>
                <button type="button" className={`text-sm font-semibold text-gray-700 bg-white hover:bg-gray-200 active:bg-transparent px-5 py-1.5 border border-gray-200 hover:border-gray-300 active:border-gray-200 outline-none rounded-md mt-2`} onClick={handleBackToHome}>Back to home</button>
            </div>
        </section>
    );
};

export default NotFoundPage;