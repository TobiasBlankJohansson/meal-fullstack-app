type weekFormItemProp = {
  day: string;
};

export function WeekFormItem({ day }: weekFormItemProp) {
  return (
    <section className="mt-5 w-1/2 grid grid-cols-3 gap-10">
      <label className="text-neutral text-2xl">{day}</label>
      <input
        type="text"
        placeholder="Count"
        className="input w-full max-w-xs border-neutral focus:ring-primary focus:border-primary"
      />
      <button className="btn btn-primary hover:bg-secondary">Select</button>
    </section>
  );
}
