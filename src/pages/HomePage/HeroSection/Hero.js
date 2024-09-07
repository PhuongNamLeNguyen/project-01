import Buttons from "../../../components/Buttons/Buttons";

import heroImg1 from "../../../assets/img/hero-01.png";
import heroImg2 from "../../../assets/img/hero-02.png";
import heroImg3 from "../../../assets/img/hero-03.png";
import heroImg4 from "../../../assets/img/hero-04.png";

import "./Hero.scss";

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__textBox">
                    <p className="hero__subHeading">Hi, new friend!</p>
                    <h1 className="hero__heading">We do not cook, we create your emotions!</h1>
                    <p className="hero__desc">
                        There's evidence that cooking, like other creative practices, can boost well-being, self-esteem, and other measures of mental health.
                    </p>
                    <Buttons.LinkButton path="/menu" linkName="Our menu"></Buttons.LinkButton>
                </div>
                <div className="hero__imgBox">
                    <img src={heroImg1} alt=""></img>
                    <img src={heroImg2} alt=""></img>
                    <img src={heroImg3} alt=""></img>
                    <img src={heroImg4} alt=""></img>
                    <Buttons.PrimaryButton path="" linkName="Price: $11"></Buttons.PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Hero;
