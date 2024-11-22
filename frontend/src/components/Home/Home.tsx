import background from "../../../public/home.jpg";

export function Home() {
  return (
    <main className="absolute top-0 h-screen w-screen">
      <img
        src={background}
        className="w-screen h-screen overflow-hidden absolute top-0 -z-10"
      ></img>
      <div className="flex justify-center items-center h-screen w-screen">
        <h1 className="text-white text-8xl">For a easy day</h1>
      </div>
    </main>
  );
}
