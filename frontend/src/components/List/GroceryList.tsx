import { useEffect, useState } from "react";
import { getMeal } from "./getMeal";

export function GroceryList() {
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    const set = async () => {
      const ingrediantList = await getMeal();
      setList(() => ingrediantList);
    };
    set();
  }, []);

  return (
    <section className="bg-gray-50 py-8">
      <header className="flex flex-col items-center mb-8">
        <h2 className="mb-2 text-4xl text-primary font-bold">To buy</h2>
        <hr className="w-2/4 border-t-2 border-primary" />
      </header>
      <main className="flex justify-center">
        <ol className="w-2/5 text-lg text-gray-700 space-y-2 list-inside">
          {list.map((item) => (
            <li className="list-disc">{item}</li>
          ))}
        </ol>
      </main>
    </section>
  );
}
