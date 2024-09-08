import "./IntroMenu.scss";

import Categories from "./Categories/Categories";

const IntroMenu = () => {
    return (
        <section className="introMenu">
            <div className="container">
                <p className="introMenu__sub">Our menu</p>
                <h2 className="introMenu__heading">Choose & Taste What You Like </h2>
                <p className="introMenu__desc">
                    A list of top Bangladeshi food including mains, drinks, and deserts you must try while in Bangladesh, for an authentic experience. Check
                    now!
                </p>
                <div className="introMenu__categories">
                    <Categories></Categories>
                </div>
            </div>
        </section>
    );
};

export default IntroMenu;
