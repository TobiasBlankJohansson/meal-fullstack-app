type weekFormItemProp = {
  day: string;
};

export function WeekFormItem({ day }: weekFormItemProp) {
  return (
    <section>
      <label>
        {day}
        <input
          type="text"
          placeholder="Count"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn">Select</button>
      </label>
    </section>
  );
}
