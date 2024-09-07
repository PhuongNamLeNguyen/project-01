import { useState, useCallback } from "react";

const useToggleMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);
    return { isMenuOpen, toggleMenu, closeMenu };
};

export default useToggleMenu;
