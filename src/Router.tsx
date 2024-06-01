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
      // {
      //   path: "dados",
      //   async lazy() {
      //     const { Component } = await import("./pages/dados/DadosJuego");
      //     return { Component };
      //   },
      // },
      // {
      //   path: "gato",
      //   async lazy() {
      //     const { Component } = await import("./pages/gato/GatoJuego");
      //     return { Component };
      //   },
      // },
      // {
      //   path: "memorama",
      //   async lazy() {
      //     const { Component } = await import("./pages/memorama/MemoramaJuego");
      //     return { Component };
      //   },
      // },
      // {
      //   path: "adivina",
      //   async lazy() {
      //     const { Component } = await import("./pages/adivina/AdivinaJuego");
      //     return { Component };
      //   },
      // },
    ],
  },
]);

export default reactRouter;
