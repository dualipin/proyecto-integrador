import { Link, Outlet } from "react-router-dom";
import NavigationJuegos from "./components/NavigationJuegos";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-dark-100 text-color-200 overflow-hidden">
      <header className="animate__animated animate__fadeInDown flex justify-between items-center bg-dark-200 m-2 lg:mx-10 rounded-xl shadow-md px-5 md:px-8 py-3 ">
        <h1 className="text-center text-lg md:text-2xl font-semibold">
          <Link to="/">El Azar</Link>
        </h1>
        <NavigationJuegos />
      </header>
      <Outlet />
      <footer className="animate__animated animate__fadeInUp mt-auto text-center text-sm py-2 bg-dark-200 rounded-t-2xl shadow-md text-color-200">
        Hecho con mucho ❤️ por Martin Sanchez -{" "}
        <a
          className="font-medium italic hover:underline"
          target="_blank"
          href="https://github.com/dualipin"
        >
          dualipin
        </a>
      </footer>
    </div>
  );
}

export default App;
