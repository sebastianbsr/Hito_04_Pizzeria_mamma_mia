# 🍕 Pizzería Mamma Mia! — Hito 4 (React + Vite)

Proyecto de la app **Pizzería Mamma Mia!** desarrollado con **React + Vite**.  
En este hito se incorpora **consumo de API** desde un backend local.

## ✅ Requerimientos implementados

### Hito 1
- Componentes base: `Navbar`, `Home`, `Footer`, `Header`, `CardPizza`
- **Navbar**
  - Botones siempre visibles: **Home** y **Total**
  - Render condicional según `token`:
    - `token = true` → `Profile` y `Logout`
    - `token = false` → `Login` y `Register`
- **Home**
  - Renderiza `Header` y pizzas mediante `CardPizza`
- **CardPizza**
  - Muestra imagen, nombre, ingredientes y precio formateado
  - Botones “Ver más” y “Añadir” (sin funcionalidad)
- **Footer**
  - Texto final del sitio

### Hito 2
- Vistas/componentes:
  - `RegisterPage`
  - `LoginPage`
- Manejo de formularios con `useState`
- Validaciones y mensajes de éxito/error

### Hito 3
- Renderización dinámica en `Home` usando `.map()`
- Vista `Cart` con estado para:
  - Aumentar/disminuir cantidad (`+ / -`)
  - Eliminar producto si la cantidad llega a 0
  - Calcular y mostrar total del pedido
  - Botón “Pagar” (sin funcionalidad)

### Hito 4
- Consumo de API con `fetch` + `useEffect`
- `Home` obtiene pizzas desde:
  - `GET http://localhost:5000/api/pizzas`
- Componente `Pizza` obtiene el detalle de una pizza desde:
  - `GET http://localhost:5000/api/pizzas/p001`

## 🧱 Tecnologías usadas
- React
- Vite
- Bootstrap (opcional)
- Backend local (API pizzas)

## ▶️ Ejecución del proyecto (Frontend + Backend)

### 1) Levantar Backend (API)
En una terminal:

```bash
cd backend
npm install
npm start
