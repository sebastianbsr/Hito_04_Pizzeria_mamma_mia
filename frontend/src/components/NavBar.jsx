import { formatCLP } from "../utils/format";

export default function Navbar() {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Pizzería Mamma Mia!</span>

        <div className="d-flex gap-2">
          <button className="btn btn-outline-light">🍕 Home</button>

          {token ? (
            <>
              <button className="btn btn-outline-light">🔓 Profile</button>
              <button className="btn btn-outline-light">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light">🔐 Login</button>
              <button className="btn btn-outline-light">🔐 Register</button>
            </>
          )}

          <button className="btn btn-success">
            🛒 Total: ${formatCLP(total)}
          </button>
        </div>
      </div>
    </nav>
  );
}
