import { useState } from "react";
import { pizzaCart } from "../pizzas";
import { formatCLP } from "../utils/format.js";

export default function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const increase = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrease = (id) => {
    setCart((prev) =>
      prev.flatMap((item) => {
        if (item.id !== id) return [item];
        const newCount = item.count - 1;
        if (newCount <= 0) return [];
        return [{ ...item, count: newCount }];
      })
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <main className="container my-4" style={{ maxWidth: 900 }}>
      <h4 className="mb-4">Detalle del pedido</h4>

      <div className="d-flex flex-column gap-3">
        {cart.map((item) => (
          <div
            key={item.id}
            className="d-flex align-items-center justify-content-between border rounded p-3"
          >
            <div className="d-flex align-items-center gap-3">
              <img
                src={item.img}
                alt={item.name}
                style={{ width: 80, height: 60, objectFit: "cover", borderRadius: 8 }}
              />
              <span className="fw-semibold text-capitalize">{item.name}</span>
            </div>

            <div className="d-flex align-items-center gap-3">
              <span className="fw-semibold text-success">
                ${formatCLP(item.price)}
              </span>

              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => decrease(item.id)}
                >
                  -
                </button>

                <span className="fw-semibold">{item.count}</span>

                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => increase(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex align-items-center justify-content-between mt-4">
        <h4 className="mb-0">Total: ${formatCLP(total)}</h4>
        <button className="btn btn-dark">Pagar</button>
      </div>
    </main>
  );
}
