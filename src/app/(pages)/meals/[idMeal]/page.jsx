const getSingleMeal = async(id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    try{
        const res = await fetch(url);
        const data = await res.json();
        return data?.meals[0] || {}
    }catch(err){
        console.error(err);
        return []
    }
}

export const generateMetadata = async(props) => {
    const { idMeal } = await props?.params;
    
    const singleMeal = await getSingleMeal(idMeal);

    return {
        title: singleMeal?.strMeal,
        description: singleMeal?.strInstructions
    }
}

const SignleMeal = async(props) => {
    const { idMeal } = await props.params;

    const singleMeal = await getSingleMeal(idMeal);

    return (
        <div>
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
                <h1 className="common_heading">Single Meal Page</h1>

                <div className="mt-10">
                    <h1 className="text-2xl text-slate-700 font-medium">{singleMeal?.strMeal}</h1>
                    <p>{singleMeal?.strInstructions}</p>
                </div>
            </div>
        </div>
    );
};

export default SignleMeal;