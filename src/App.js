import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Pages from "./pages/Pages";
import Booking from "./pages/Booking";
import TopBar from "./components/TopBar/TopBar";
import "./assets/scss/main.scss";

function App() {
    return (
        <Router>
            <div>
                <TopBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/pages" element={<Pages />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/booking" element={<Booking />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
