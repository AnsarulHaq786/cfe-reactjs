import { Route, Routes } from "react-router";
import Home from "./pages/Home"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
import About from "./pages/About"

export default function App() {
    return <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

    </Routes>
}