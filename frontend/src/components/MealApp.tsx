import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Meal } from "./Meal/Meal";
import { Navbar } from "./Navbar";
import { List } from "./List/List";

export function MealApp() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Meal />} />
            <Route path="list" element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
