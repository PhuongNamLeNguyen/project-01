import Hero from "./HeroSection/Hero";
import Story from "./StorySection/Story";
import Vision from "./VisionSection/Vision";
import Newsletter from "./NewsletterSection/Newsletter";

import "./About.scss";

function About() {
    return (
        <div className="about">
            <Hero />
            <Story />
            <Vision />
            <Newsletter />
        </div>
    );
}

export default About;
