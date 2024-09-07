import useToggleMenu from "../../hooks/useToggleMenu";

import Navigation from "../Navigation/Navigation";
import MenuButton from "./MenuButton/MenuButton";
import Logo from "../Logo/Logo";
import CTA from "./CTA/CTA";

import "./TopBar.scss";

function TopBar() {
    const { isMenuOpen, toggleMenu, closeMenu } = useToggleMenu();

    return (
        <div className="topBar" id="topBar">
            <div className="container">
                <MenuButton toggleMenu={toggleMenu}></MenuButton>
                <Navigation closeMenu={closeMenu} isMenuOpen={isMenuOpen}></Navigation>
                <Logo></Logo>
                <CTA></CTA>
            </div>
        </div>
    );
}

export default TopBar;
