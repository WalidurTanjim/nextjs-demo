import MealsSearchBox from "@/components/MealsSearchBox/page";
import Link from "next/link";

export const metadata = {
    title: "All Meals",
    description: "Here is all meals of our website."
}

const Meals = async(props) => {
    const searchParams = await props?.searchParams;
    // console.log("Search params:", searchParams.search);

    const getMeals = async() => {
        try{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParams.search}`);
            const data = await res.json();
            // console.log(data);
            return data.meals || [];
        }catch(err){
            console.error(err);
            return [];
        }
    }

    const meals = await getMeals();

    return (
        <div>
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
                <h1 className="common_heading">All Meals</h1>

                <MealsSearchBox />

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        meals?.map(meal => {
                            return (
                                <Link key={meal?.idMeal} href={`/meals/${meal?.idMeal}`}>
                                    <div className="border rounded-md p-2 hover:shadow-md">
                                        <h1>Meal name: {meal?.strMeal}</h1>
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

export default Meals;