import { useEffect, useState } from "react";
import { formatCLP } from "../utils/format.js";

export default function Pizza() {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPizza = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch("http://localhost:5000/api/pizzas/p001");
        if (!res.ok) throw new Error("No se pudo cargar la pizza p001");

        const data = await res.json();
        setPizza(data);
      } catch (err) {
        setError(err.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    getPizza();
  }, []);

  if (loading) return <main className="container my-4">Cargando pizza...</main>;
  if (error) return <main className="container my-4"><p className="text-danger">{error}</p></main>;
  if (!pizza) return null;

  return (
    <main className="container my-4">
      <div className="row g-4 align-items-start">
        <div className="col-12 col-md-6">
          <img
            src={pizza.img}
            alt={pizza.name}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-12 col-md-6">
          <h2 className="text-capitalize">{pizza.name}</h2>
          <p className="text-muted">{pizza.desc}</p>

          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ing) => (
              <li key={ing}>🍕 {ing}</li>
            ))}
          </ul>

          <h4 className="mt-3">Precio: ${formatCLP(pizza.price)}</h4>

          <button className="btn btn-dark mt-2">Añadir 🛒</button>
        </div>
      </div>
    </main>
  );
}
