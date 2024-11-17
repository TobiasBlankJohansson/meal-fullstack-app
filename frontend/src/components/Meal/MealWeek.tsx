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
        <h2 className="my-5 text-4xl text-primary font-bold ">Weeks</h2>
        <hr className="w-2/4"></hr>
      </header>
      <form className="flex flex-col items-center">
        {week.map((day) => {
          return <WeekFormItem day={day}></WeekFormItem>;
        })}
        <button className="btn btn-secondary mt-5 w-1/2 h-16">Button</button>
      </form>
    </section>
  );
}
