import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTop from "./router/ScrollToTop";

import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Menu from "./pages/Menu";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Pages from "./pages/Pages";
import Booking from "./pages/Booking";

import "./assets/scss/main.scss";

function App() {
    return (
        <Router>
            <ScrollToTop></ScrollToTop>
            <TopBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/pages" element={<Pages />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking" element={<Booking />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
