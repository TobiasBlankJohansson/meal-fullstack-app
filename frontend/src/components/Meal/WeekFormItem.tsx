type weekFormItemProp = {
  day: string;
};

export function WeekFormItem({ day }: weekFormItemProp) {
  return (
    <section className="mt-5 grid grid-cols-3">
      <label className="">{day}</label>
      <input
        type="text"
        placeholder="Count"
        className="input input-bordered w-full max-w-xs"
      />
      <button className="btn">Select</button>
    </section>
  );
}
