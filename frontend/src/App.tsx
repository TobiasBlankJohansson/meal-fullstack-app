import { Bounce, ToastContainer } from "react-toastify";
import { MealApp } from "./components/MealApp";
import 'react-toastify/dist/ReactToastify.css';


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
        transition={Bounce}
      />
    </>
  );
}

export default App;
