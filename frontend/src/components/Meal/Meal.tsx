import { Navbar } from "../Navbar";
import { MealWeek } from "./MealWeek";

export function Meal() {
  return (
    <>
      <Navbar></Navbar>
      <main className="mx-20 mt-5">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="card bg-base-300 rounded-box h-32 flex-grow">
            <MealWeek></MealWeek>
          </div>
          <div className="divider lg:divider-horizontal">OR</div>
          <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">
            content
          </div>
        </div>
      </main>
    </>
  );
}
