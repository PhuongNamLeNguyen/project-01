import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useActiveLink = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    return [activeLink, setActiveLink];
};

export default useActiveLink;
