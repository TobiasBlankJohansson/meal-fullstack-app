export function Navbar() {
  return (
    <>
      <nav className="navbar bg-primary text-primary-content">
        <header className="flex-1">
          <a className="btn btn-ghost text-xl">myMeal</a>
        </header>
        <section className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Meal</a>
            </li>
            <li>
              <a>List</a>
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
    </>
  );
}
