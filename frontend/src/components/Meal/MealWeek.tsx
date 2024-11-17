export function MealWeek() {
  return (
    <section>
      <header className="flex flex-col items-center">
        <h2 className="my-5 text-xl">Weeks</h2>
        <hr className="w-2/4"></hr>
      </header>
      <form>
        <section>
          <label>
            Monday
            <input
              type="text"
              placeholder="Count"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn">Select</button>
          </label>
        </section>
      </form>
    </section>
  );
}
