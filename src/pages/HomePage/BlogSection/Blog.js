import "./Blog.scss";

import blogImg1 from "../../../assets/img/blog-01.avif";
import blogImg2 from "../../../assets/img/blog-02.avif";

import arrowRight from "../../../assets/img/i-arrow-right.svg";

import Buttons from "../../../components/Buttons/Buttons";

const blogs = [
    {
        time: "August 6, 2022",
        title: "The Most Expensive Cup of Coffee in the Usa",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauatium, totam rem aperiam perspiciatis unde omnis.",
        comment: 165,
        view: 1265,
        image: blogImg1,
    },
    {
        time: "August 6, 2022",
        title: "Chicken Soup With Spring Veggies Aand Pasta",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauatium, totam rem aperiam perspiciatis unde omnis.",
        comment: 201,
        view: 785,
        image: blogImg2,
    },
];

const Blog = () => {
    return (
        <section className="blog">
            <div className="container">
                <p className="blog__sub">Our blog</p>
                <h2 className="blog__heading">Recent Articles</h2>
                <ul className="blog__list">
                    {blogs.map((blog, index) => {
                        return (
                            <li key={index} className="blog__item">
                                <div className="blog__img">
                                    <img src={blog.image} alt=""></img>
                                </div>
                                <div className="blog__details">
                                    <span className="blog__time">
                                        {blog.time}
                                    </span>
                                    <h3 className="blog__title">
                                        {blog.title}
                                    </h3>
                                    <p className="blog__desc">{blog.desc}</p>
                                    <div className="row">
                                        <span>
                                            Comment:{" "}
                                            <strong>{blog.comment}</strong>
                                        </span>
                                        <span>
                                            View: <strong>{blog.view}</strong>
                                        </span>
                                    </div>
                                    <Buttons.LinkButton
                                        path="/blog"
                                        linkName="Read now"
                                    ></Buttons.LinkButton>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <div className="blog__cta">
                    <Buttons.LinkButton
                        path="/blog"
                        linkName="Explore All Blogs"
                    ></Buttons.LinkButton>
                    <img src={arrowRight} alt=""></img>
                </div>
            </div>
        </section>
    );
};

export default Blog;
