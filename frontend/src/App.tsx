import { ToastContainer } from "react-toastify";
import { MealApp } from "./components/MealApp";

function App() {
  return (
    <>
      <MealApp></MealApp>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        limit={2}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
