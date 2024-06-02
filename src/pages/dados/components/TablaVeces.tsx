import { NumeroGenerado } from "../../../types/numero-generado";

/**
 * Imágenes de las caras de los dados
 */
import c1 from "../../../assets/dados/c1.png";
import c2 from "../../../assets/dados/c2.png";
import c3 from "../../../assets/dados/c3.png";
import c4 from "../../../assets/dados/c4.png";
import c5 from "../../../assets/dados/c5.png";
import c6 from "../../../assets/dados/c6.png";

type TablaVecesProps = {
  numbers: NumeroGenerado[];
}; // Números generados y cantidad de veces que se repiten

export default function TablaVeces({ numbers }: TablaVecesProps) {
  const caras = [c1, c2, c3, c4, c5, c6]; // Imágenes de las caras

  return (
    <div className="border border-accent-100 rounded-md flex">
      <table className="border-collapse w-full flex flex-row sm:flex-col flex-wrap">
        <caption className="text-center font-semibold w-full">
          Conteo de dados
        </caption>
        <thead className="flex flex-1">
          <tr className="flex w-full flex-col sm:flex-row">
            <th className="h-full w-full sm:h-auto border border-accent-100">
              Cara
            </th>
            <th className="h-full w-full sm:h-auto border border-accent-100">
              Veces
            </th>
          </tr>
        </thead>
        <tbody className="flex flex-1 sm:flex-col">
          {caras.map((cara, index) => (
            <tr className="flex w-full flex-col sm:flex-row" key={index}>
              <td className="h-10 flex w-full justify-center items-center p-1 border border-accent-100">
                <img
                  className="w-full sm:w-10 sm:h-10 object-cover"
                  src={cara}
                  alt={`Cara ${index + 1}`}
                />
              </td>
              <td className="h-10 border border-accent-100 w-full">
                {numbers.find((num) => num.numero === index + 1)?.veces || 0}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
