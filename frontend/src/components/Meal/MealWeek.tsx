import { WeekFormItem } from "./WeekFormItem";

const week: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export function MealWeek() {
  return (
    <section>
      <header className="flex flex-col items-center">
        <h2 className="my-5 text-xl">Weeks</h2>
        <hr className="w-2/4"></hr>
      </header>
      <form>
        {week.map((day) => {
          return <WeekFormItem day={day}></WeekFormItem>;
        })}
      </form>
    </section>
  );
}
