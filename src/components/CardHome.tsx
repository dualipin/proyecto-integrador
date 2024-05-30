import { Link } from "react-router-dom";

type CardHomeProps = {
  title: string;
  description?: string;
  image: string;
  to: string;
};

function CardHome({ title, description, image, to }: CardHomeProps) {
  return (
    <article className="animate__animated animate__bounceIn flex">
      <div className="flex-1 bg-dark-200 hover:rotate-1 hover:scale-105 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <Link to={to} replace>
          <img
            alt="Dados"
            src={image}
            className="h-56 w-full bg-accent-200 rounded-xl object-contain"
          />
          <div className="p-4 sm:p-6">
            <h3 className="mt-0.5 text-lg text-neutral-400 font-semibold">
              {title}
            </h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-color-200">
              {description}
            </p>
          </div>
        </Link>
      </div>
    </article>
  );
}
export default CardHome;
