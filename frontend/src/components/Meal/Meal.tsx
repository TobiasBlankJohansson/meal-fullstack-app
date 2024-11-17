import { Navbar } from "../Navbar";
import { MealWeek } from "./MealWeek";

export function Meal() {
  return (
    <>
      <Navbar></Navbar>
      <main className="mx-20 mt-5">
        <MealWeek></MealWeek>
      </main>
    </>
  );
}
