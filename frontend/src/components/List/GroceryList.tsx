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
    <section>
      <header className="flex flex-col items-center">
        <h2 className="mb-2 text-4xl text-primary font-bold ">To buy</h2>
        <hr className="w-2/4"></hr>
      </header>
      <main className="flex justify-center">
        <ol className="w-2/5">
          {list.map((item) => (
            <li className="list-disc">{item}</li>
          ))}
        </ol>
      </main>
    </section>
  );
}
