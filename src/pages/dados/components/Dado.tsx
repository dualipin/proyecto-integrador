import CaraDado from "./CaraDado";

//styles
import dadoStyles from "./Dado.module.css";

// Imágenes de la cara de los dados
import c1 from "../../../assets/dados/c1.png";
import c2 from "../../../assets/dados/c2.png";
import c3 from "../../../assets/dados/c3.png";
import c4 from "../../../assets/dados/c4.png";
import c5 from "../../../assets/dados/c5.png";
import c6 from "../../../assets/dados/c6.png";
import { useEffect, useState } from "react";

type DadoProps = {
  number: number;
};

export default function Dado({ number }: DadoProps) {
  const [transform, setTransform] = useState(""); // Transformación del dado
  const caras = [c1, c2, c3, c4, c5, c6]; // Imágenes de las caras
  const styles = [
    dadoStyles.c1,
    dadoStyles.c2,
    dadoStyles.c3,
    dadoStyles.c4,
    dadoStyles.c5,
    dadoStyles.c6,
  ]; // Estilos de las caras

  // Cambia la posición del dado dependiendo del número
  useEffect(() => {
    setTimeout(() => {
      switch (number) {
        case 1:
          setTransform("rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)");
          break;
        case 2:
          setTransform("rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)");
          break;
        case 3:
          setTransform("rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)");
          break;
        case 4:
          setTransform("rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)");
          break;
        case 5:
          setTransform("rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)");
          break;
        case 6:
          setTransform("rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)");
          break;
        default:
          break;
      }
    }, 200);
  }, [number]);

  return (
    <div className={`${dadoStyles.content} animate__animated animate__fadeIn`}>
      <div
        style={{
          transition: "transform 3.5s",
          transform: transform,
        }}
        className={dadoStyles.dado}
      >
        {caras.map((cara, index) => (
          <CaraDado
            image={cara}
            number={index + 1}
            key={index}
            className={`${styles[index]} ${dadoStyles.cara}`}
          />
        ))}
      </div>
    </div>
  );
}
