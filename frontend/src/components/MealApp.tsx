import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Meal } from "./Meal/Meal";
import { Navbar } from "./Navbar";
import { List } from "./List/List";
import { Footer } from "./Footer";
import { Home } from "./Home/Home";

export function MealApp() {
  return (
    <div className="min-h-screen relative">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="meal" element={<Meal />} />
            <Route path="list" element={<List />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
