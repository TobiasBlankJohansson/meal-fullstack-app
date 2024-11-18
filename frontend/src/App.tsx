import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MealApp } from "./components/MealApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MealApp />}>
          <Route path="" element={<MealApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
