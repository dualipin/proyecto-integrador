import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const reactRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        lazy: () => import("./pages/Home"),
      },
      {
        path: "dados",
        lazy: () => import("./pages/dados/DadosJuego"),
      },
      {
        path: "gato",
        lazy: () => import("./pages/gato/GatoJuego"),
      },
      {
        path: "memorama",
        lazy: () => import("./pages/memorama/MemoramaJuego"),
      },
      {
        path: "adivina",
        lazy: () => import("./pages/adivina/AdivinaJuego"),
      },
    ],
  },
]);

export default reactRouter;
