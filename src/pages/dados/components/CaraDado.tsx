type CaraDadoProps = {
  image: string;
  number: number;
  className?: string;
}; // Imagen de la cara del dado y número de la cara

export default function CaraDado({ image, number, className }: CaraDadoProps) {
  return (
    <div className={className}>
      <img className="object-cover" src={image} alt={`Cara ${number}`} />
    </div>
  );
}
