import { useState, useEffect } from "react";

const useFilterFoods = (foods, categories) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Bắt đầu với category đầu tiên
    const [filteredFoods, setFilteredFoods] = useState(foods);

    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredFoods(foods); // Hiển thị tất cả nếu chọn "All"
        } else {
            setFilteredFoods(foods.filter((food) => food.category === selectedCategory));
        }
    }, [selectedCategory, foods]);

    return [filteredFoods, selectedCategory, setSelectedCategory];
};

export default useFilterFoods;
