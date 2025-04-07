import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import AboutPage from "../pages/about";

function AppRouter() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/about"
                element={<AboutPage />}
            />
        </Routes>
    );
}

export default AppRouter;
