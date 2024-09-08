import foodImage1 from "../../../../assets/img/categories-01.png";
import foodImage2 from "../../../../assets/img/categories-02.png";
import foodImage3 from "../../../../assets/img/categories-03.png";
import foodImage4 from "../../../../assets/img/categories-04.png";
import foodImage5 from "../../../../assets/img/categories-05.png";
import foodImage6 from "../../../../assets/img/categories-06.png";
import foodImage7 from "../../../../assets/img/categories-07.png";
import foodImage8 from "../../../../assets/img/categories-08.png";

import useFilterFoods from "../../../../hooks/useFilterFoods";

const foods = [
    {
        name: "Chawli Beans and Mint Burger",
        price: "$11",
        image: foodImage1,
        category: "Appetizer",
    },
    {
        name: "American Chopsuey, Jain Recipe",
        price: "$17",
        image: foodImage2,
        category: "Appetizer",
    },
    {
        name: "Paneer Nuggets, Quick Paneer Deep-fried",
        price: "$45",
        image: foodImage3,
        category: "Soup",
    },
    {
        name: "Stir Fried Mixed Vegetables in Butter",
        price: "$14",
        image: foodImage4,
        category: "Dessert",
    },
    {
        name: "Raw Chicken Fillet Garlic",
        price: "$23",
        image: foodImage5,
        category: "Drinks",
    },
    {
        name: "Makai Shorba, Thick Corn Soup",
        price: "$15",
        image: foodImage6,
        category: "Drinks",
    },
    {
        name: "Healthy Salmon Power Bowl",
        price: "$25",
        image: foodImage7,
        category: "Drinks",
    },
    {
        name: "Paneer N Cheese Roll  ( Wraps and Rolls)",
        price: "$21",
        image: foodImage8,
        category: "Drinks",
    },
];

const categories = [...new Set(foods.map((item) => item.category))];
categories.unshift("All");

const Categories = () => {
    const [filteredFoods, selectedCategory, setSelectedCategory] = useFilterFoods(foods, categories);

    return (
        <div className="categories">
            <ul className="categories__header">
                {categories.map((category, index) => {
                    return (
                        <li key={index} className={`label ${category === selectedCategory ? "active" : ""}`} onClick={() => setSelectedCategory(category)}>
                            {category}
                        </li>
                    );
                })}
            </ul>
            <ul className="categories__container">
                {filteredFoods.map((food, index) => {
                    return (
                        <li key={index} className="food">
                            <div className="food__img">
                                <img src={food.image} alt=""></img>
                            </div>
                            <span className="food__name">{food.name}</span>
                            <span className="food__price">{food.price}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Categories;
