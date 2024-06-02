import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const reactRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        async lazy() {
          const { Component } = await import("./pages/Home");
          return { Component };
        },
      },
      {
        path: "dados",
        async lazy() {
          const { Component } = await import("./pages/dados/DadosJuego");
          return { Component };
        },
      },
    ],
  },
]);

export default reactRouter;
