import { useEffect, useState } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPizzas = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch("http://localhost:5000/api/pizzas");
        if (!res.ok) throw new Error("No se pudo cargar la API de pizzas");

        const data = await res.json();
        setPizzas(data);
      } catch (err) {
        setError(err.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    getPizzas();
  }, []);

  return (
    <>
      <Header />

      <main className="container my-4">
        {loading && <p>Cargando pizzas...</p>}
        {error && <p className="text-danger">{error}</p>}

        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-4" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
