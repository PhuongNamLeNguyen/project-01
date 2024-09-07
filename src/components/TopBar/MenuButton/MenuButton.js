import menuIcon from "../../../assets/img/i-menu.svg";

const MenuButton = ({ toggleMenu }) => {
    return (
        <div className="topBar__btn" onClick={toggleMenu}>
            <img src={menuIcon} alt=""></img>
        </div>
    );
};

export default MenuButton;
