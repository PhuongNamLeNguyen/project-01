import "./Story.scss";

const Story = () => {
    return (
        <section className="story">
            <div className="container">
                <div className="story__img">
                    <img src="./img/about-story-01.avif" alt=""></img>
                </div>
                <div className="story__img">
                    <img src="./img/about-story-02.avif" alt=""></img>
                </div>
                <div className="story__img">
                    <img src="./img/about-story-03.avif" alt=""></img>
                </div>
                <div className="story__content">
                    <h2 className="story__heading">
                        The story of our first restaurant branch
                    </h2>
                    <p className="story__desc">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Story;
