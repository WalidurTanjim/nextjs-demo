const Loading = ({ loaderValue }) => {
    return (
        <section className={`loading w-full h-screen flex items-center justify-center`}>
            <h1 className={`text-2xl md:text-3xl text-slate-700 font-medium`}>{loaderValue}</h1>
        </section>
    );
};

export default Loading;