import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function Navbar() {
  const [selected, setSelected] = useState<number>(0);

  return (
    <>
      <nav className="navbar bg-primary text-primary-content px-20 border-b-2 border-gray-500">
        <header className="flex-1">
          <Link
            to="/"
            onClick={() => setSelected(() => 0)}
            className="text-base-100 text-3xl font-bold"
          >
            GoodBytes/
          </Link>
        </header>
        <section className="flex-none">
          <ul className="menu menu-horizontal px-5">
            <li className="px-5">
              <Link
                to="/meal"
                onClick={() => setSelected(() => 1)}
                className={`btn btn-ghost hover:bg-secondary text-lg text-base-100 font-bold ${
                  selected == 1 && "bg-secondary"
                }`}
              >
                Meal
              </Link>
            </li>
            <li className="px-5">
              <Link
                to="/list"
                onClick={() => setSelected(() => 2)}
                className={`btn btn-ghost hover:bg-secondary text-lg text-base-100 font-bold ${
                  selected == 2 && "bg-secondary"
                }`}
              >
                List
              </Link>
            </li>
          </ul>
          <SignedOut>
            <SignInButton>
              <button className="btn">Signed in</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-neutral btn-circle avatar"
            >
              <div className="rounded-full">
                <UserButton />
              </div>
            </div>
          </SignedIn>
        </section>
      </nav>
      <Outlet />
    </>
  );
}
