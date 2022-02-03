import { createContext, useContext, useState } from "react";
const MenuContext = createContext();
export const useMenu = () => useContext(MenuContext);

const MenuProvider = ({ children }) => {
    const [menu, setMenu] = useState([])

    const handleAdd = ((dish) => {
        const isInMenu = menu.some((findDish) => findDish.id === dish.id);
        const vegan = dish.vegan;
        const veganDishes = menu.filter(dishes => dishes.vegan === true);
        const notVeganDishes = menu.filter(dishes => dishes.vegan === false);

        if (!isInMenu && vegan === true && veganDishes.length < 2 && menu.length < 4) {
            setMenu([...menu, dish]);
        } else if (!isInMenu && vegan === false && notVeganDishes.length < 2 && menu.length < 4) {
            setMenu([...menu, dish]);
        }
        // console.log(dish)
    });

    const handleRemove = ((dish) => {
        let getDish = menu.find(({ id }) => id === dish.id);
        const getDishIndex = menu.indexOf(getDish);
        menu.splice(getDishIndex, 1);
        setMenu([...menu]);
    });

    const getTotal = (key) => {
        let total = menu.map(dish => dish[`${key}`]);
        return Math.round(total.reduce((a, b) => a + b));
    };

    const getAvg = (key) => {
        let initials = menu.map(dish => dish[`${key}`]);
        let total = initials.reduce((a, b) => a + b);
        return Math.round(total / menu.length);
    };

    console.log(menu)

    return (
        <MenuContext.Provider value={{ menu, setMenu, handleRemove, handleAdd, getTotal, getAvg }} >
            {children}
        </MenuContext.Provider>
    )
}

export default MenuProvider;