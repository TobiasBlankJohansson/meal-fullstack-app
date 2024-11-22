import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import background from "../../../public/home.jpg";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className="">
      <img
        src={background}
        alt="Loading..."
        className="w-screen h-screen overflow-hidden absolute top-0 -z-20"
      ></img>
      <div className="grid grid-flow-row justify-center h-96">
        <h1 className="text-white text-8xl flex items-end">
          For a easy evening
        </h1>
        <SignedOut>
          <SignInButton>
            <div className="flex justify-end mt-5 mr-10">
              <button className="btn btn-primary text-white w-32">
                Signed in
              </button>
            </div>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <div className="flex justify-end mt-5 mr-10">
          <Link
                to="/meal"
                className={`btn btn-secondary text-white w-32`}
              >
                Get started
              </Link>
          </div>
        </SignedIn>
      </div>
    </main>
  );
}
