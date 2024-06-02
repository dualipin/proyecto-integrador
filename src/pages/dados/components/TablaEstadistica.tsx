import {
  calcularMedia,
  calcularMediana,
  calcularModa,
} from "../utils/estadistica";

type TablaEstadisticaProps = {
  numbers: number[];
};

export default function TablaEstadistica({ numbers }: TablaEstadisticaProps) {
  const [media, mediana, moda] = [
    calcularMedia(numbers),
    calcularMediana(numbers),
    calcularModa(numbers),
  ];
  return (
    <div className="border border-accent-100 rounded-md flex">
      <table className="table-fixed border-collapse w-full flex flex-col sm:flex-row flex-wrap">
        <caption className="text-center font-semibold w-full">
          Estadistica
        </caption>
        <thead className="flex flex-1">
          <tr className="flex w-full flex-row sm:flex-col">
            <th className="w-full border border-accent-100">Media</th>
            <th className="w-full border border-accent-100">Mediana</th>
            <th className="w-full border border-accent-100">Moda</th>
          </tr>
        </thead>
        <tbody className="flex flex-1">
          {numbers.length != 0 && (
            <tr className="flex w-full flex-row sm:flex-col">
              <td className="border border-accent-100 w-full">{media}</td>
              <td className="border border-accent-100 w-full">{mediana}</td>
              <td className="border border-accent-100 w-full">
                {moda.toString()}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
