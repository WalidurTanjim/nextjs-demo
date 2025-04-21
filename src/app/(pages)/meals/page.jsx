import MealCard from "@/app/(components)/MealCard/MealCard";
import MealSearchField from "@/app/(components)/MealSearchField/MealSearchField";
import axios from "axios";

export const metadata = {
    title: "All Meals",
    description: "Loading MealDB api using Server Component"
}

const MealsPage = async({ searchParams }) => {
    const search = await searchParams;

    const fetchMeals = async() => {
        try{
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.search}`);
            const data = await res.data.meals || [];
            return data;
        }catch(err) {
            console.error(err);
            return [];
        }
    }

    const meals = await fetchMeals();

    return (
        <section className={`meals`}>
            <div className={`container mx-auto px-5 lg:px-48 py-10`}>
                <h1 className="text-2xl md:text-3xl text-slate-700 font-medium">All Meals In Here</h1>

                <MealSearchField />

                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {
                        meals?.map(meal => <MealCard key={meal?.idMeal} meal={meal} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default MealsPage;