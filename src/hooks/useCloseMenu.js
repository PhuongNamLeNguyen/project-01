import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useCloseMenu = (closeMenu) => {
    const location = useLocation();
    useEffect(() => {
        closeMenu();
    }, [location.pathname, closeMenu]);
};

export default useCloseMenu;
