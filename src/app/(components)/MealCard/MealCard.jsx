import Link from "next/link";

const MealCard = ({ meal }) => {
    const { idMeal, strMeal, strMealThumb } = meal;

    return (
        <div className={`meal meal-card p-2 border border-gray-300 rounded-lg`}>
            <img src={strMealThumb} alt="Meal Image" className={`w-full h-[120px] rounded-md border border-gray-200`} />

            <div className={`mt-2`}>
                <h1 className={`text-lg font-semibold text-slate-700`}>{strMeal}</h1>

                <Link href={`meals/meal-details/${idMeal}`}><button type="button" className={`mt-1 px-5 py-1.5 text-xs font-semibold border border-gray-300 hover:bg-gray-200 active:bg-transparent rounded-md`}>See Details</button></Link>
            </div>
        </div>
    );
};

export default MealCard;