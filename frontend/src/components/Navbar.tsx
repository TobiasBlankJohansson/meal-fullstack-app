import { Link, Outlet } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <nav className="navbar bg-primary text-primary-content px-20 border-b-2 border-gray-500">
        <header className="flex-1">
          <Link to="/" className="text-base-100 text-3xl">
            myMeal
          </Link>
        </header>
        <section className="flex-none">
          <ul className="menu menu-horizontal px-5">
            <li className="px-5">
              <Link
                to="/"
                className="btn btn-ghost hover:bg-secondary text-lg text-base-100 font-bold"
              >
                Meal
              </Link>
            </li>
            <li className="px-5">
              <Link
                to="/list"
                className="btn btn-ghost hover:bg-secondary text-lg text-base-100 font-bold"
              >
                List
              </Link>
            </li>
          </ul>
          <figure
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </figure>
        </section>
      </nav>
      <Outlet />
    </>
  );
}
