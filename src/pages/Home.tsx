import CardHome from "../components/CardHome";
import JuegosLayout from "../layout/JuegosLayout";

//imagen de los juegos
import dados from "../assets/home-games/dado.png";
import gato from "../assets/home-games/tic-tac-toe.png";
import memoria from "../assets/home-games/juego-de-memoria.png";
import adivina from "../assets/home-games/adivino.png";

export function Component() {
  return (
    <JuegosLayout title="Bienvenido">
      <p className="py-5 text-lg text-center">
        Aquí encontrarás una colección de juegos clásicos para jugar en tu
        navegador. ¡Diviértete!
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5 flex-1 place-content-center lg:px-28">
        <CardHome
          title="Tirar los dados"
          description="Juego de dados clásico. Haz clic en el botón para lanzar los dados y obtener un número aleatorio."
          to="dados"
          image={dados}
        />
        <CardHome
          title="Gato - Tic Tac Toe"
          description="Juego de gato, también conocido como tres en raya o Tic Tac Toe"
          to="gato"
          image={gato}
        />
        <CardHome
          title="Memorama"
          description="Encuentra los pares con la misma cara en el tiempo indicado"
          to="memorama"
          image={memoria}
        />
        <CardHome
          title="Adivina el numero"
          description="Adivina el numero en el menor tiempo y con menos intentos posibles"
          to="adivina"
          image={adivina}
        />
      </section>
    </JuegosLayout>
  );
}
