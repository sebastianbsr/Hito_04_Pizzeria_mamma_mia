import { formatCLP } from "../utils/format";

export default function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={`Pizza ${name}`} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>

        <p className="text-muted mb-2">Ingredientes:</p>
        <ul className="mb-3">
          {ingredients.map((ing) => (
            <li key={ing}>🍕 {ing}</li>
          ))}
        </ul>

        <h5 className="mt-auto">Precio: ${formatCLP(price)}</h5>

        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-outline-secondary">Ver más 👀</button>
          <button className="btn btn-dark">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
}
