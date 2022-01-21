import { createContext, useContext, useState } from "react";
const MenuContext = createContext();
export const useMenu = () => useContext(MenuContext);

const MenuProvider = ({ children }) => {
    const [menu, setMenu] = useState([])

    const handleAdd = ((dish) => {
        const isInMenu = menu.some((findDish) => findDish.id === dish.id);
        const heroAlig = dish.biography.alignment;
        const badGuys = menu.filter(heroes => heroes.biography.alignment === "bad");
        const goodGuys = menu.filter(heroes => heroes.biography.alignment === "good");

        if (!isInMenu && heroAlig === "bad" && badGuys.length < 3 && menu.length < 6) {
            setMenu([...menu, dish]);
        } else if (!isInMenu && heroAlig === "good" && goodGuys.length < 3 && menu.length < 6) {
            setMenu([...menu, dish]);
        } else if (!isInMenu && heroAlig !== "good" && heroAlig !== "bad" && menu.length < 6) {
            setMenu([...menu, dish]);
        }
    });

    const handleRemove = ((dish) => {
        let getDish = menu.find(({ id }) => id === dish.id);
        const getDishIndex = menu.indexOf(getDish);
        menu.splice(getDishIndex, 1);
        setMenu([...menu]);
    });

    return (
        <MenuContext.Provider value={{ menu, setMenu, handleRemove, handleAdd }} >
            {children}
        </MenuContext.Provider>
    )
}

export default MenuProvider;