//import { useState } from "react";
import Dado from "./components/Dado";
import JuegosLayout from "../../layout/JuegosLayout";
import TablaEstadistica from "./components/TablaEstadistica";
import TablaVeces from "./components/TablaVeces";
import { useState } from "react";
import { contarNumeros, numerosGenerados } from "./utils/estadistica";

export function Component() {
  const [numbers, setNumbers] = useState<number[]>([]); // Números generados
  const [error, setError] = useState<string>(""); // Mensaje de error

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita que se recargue la página
    const cantidad: number = e.currentTarget.cantidad.value; // Cantidad de dados

    if (cantidad <= 0) return setError("La cantidad debe ser mayor a 0"); // Validación
    if (cantidad > 100) return setError("La cantidad debe ser menor a 100"); // Validación
    setNumbers(numerosGenerados(cantidad)); // Genera los números
    setError(""); // Limpia el mensaje de error
  };

  const handleReset = () => {
    setNumbers([]);
    setError("");
  }; // Reinicia los números

  return (
    <JuegosLayout title="Dados">
      <section className="-mt-5 sm:mt-0 flex flex-col gap-3 justify-center items-center">
        <h3 className="text-xl">Cantidad de dados a lanzar</h3>
        <form
          className="flex flex-col gap-4 w-10/12 md:w-1/3 lg:w-1/5"
          onSubmit={handleSubmit}
        >
          <input
            className="pb-2 pt-1 px-2 rounded-md border border-dark-300 bg-accent-200 shadow-md hover:bg-accent-100 hover:text-dark-200 transition-all"
            placeholder="Cantidad de dados a lanzar"
            type="number"
            name="cantidad"
            id="cantidad"
          />
          <div className="grid place-content-center grid-cols-2 gap-5">
            <button
              className="shadow p-2 rounded-md bg-green-200 hover:bg-green-400 transition-all"
              type="submit"
            >
              Lanzar
            </button>
            <button
              className="shadow p-2 rounded-md bg-red-200 hover:bg-red-400 transition-all"
              type="reset"
              onClick={handleReset}
            >
              Reiniciar
            </button>
          </div>
        </form>
        {error && <p>{error}</p>}
      </section>
      <section className="flex-1 mt-5 sm:mt-2 w-full flex flex-wrap gap-5">
        <aside className="w-full sm:w-3/12 md:w-2/12">
          <TablaEstadistica numbers={numbers} />
        </aside>
        <main className="order-last sm:order-none w-full sm:w-auto grow flex-1 flex justify-center items-center flex-wrap overflow-y-scroll overflow-auto h-[50vh] sm:h-[60vh]">
          {numbers.map((num, index) => (
            <Dado key={index} number={num} />
          ))}
        </main>
        <aside className="w-full h-auto sm:w-2/12">
          <TablaVeces numbers={contarNumeros(numbers)} />
        </aside>
      </section>
    </JuegosLayout>
  );
}
