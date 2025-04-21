import axios from "axios";

const SignleMealDetailsPage = async ({ params }) => {
    const { idMeal } = await params;

    const fetchMeal = async() => {
        try{
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
            const data = await res.data.meals[0];
            return data;
        }catch(err){
            console.error(err);
            return {};
        }
    }

    const meal = await fetchMeal();
    const { strMeal, strMealThumb, strInstructions } = meal;

    return (
        <section className={`single-meal-details-page w-full h-auto`}>
            <div className="container mx-auto px-6 lg:px-48 py-10">
                <img src={strMealThumb} alt="Meal Image" className={`w-full rounded-lg h-[175px] md:h-[225px] lg:h-[300px] border-2 border-gray-200 shadow-md`} />

                <div className="mt-3">
                    <h1 className={`text-2xl font-medium text-slate-700`}>{strMeal}</h1>
                    <p className={`text-sm text-gray-500 my-2`}>{strInstructions}</p>
                </div>
            </div>
        </section>
    );
};

export default SignleMealDetailsPage;