# 🍕 Pizzería Mamma Mia! — Hito 3 (React + Vite)

Proyecto de la app **Pizzería Mamma Mia!** desarrollado con **React + Vite**.

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
- Renderización dinámica de pizzas en `Home` usando `.map()` desde `src/data/pizzas.js`
- Ingredientes renderizados dinámicamente en `CardPizza` usando `.map()`
- Vista `Cart` con estado para:
  - Aumentar/disminuir cantidad (`+ / -`)
  - Eliminar producto si la cantidad llega a 0
  - Calcular y mostrar total del pedido
  - Botón “Pagar” (sin funcionalidad)

## 🧱 Tecnologías usadas
- React
- Vite
- Bootstrap (opcional)

## 📦 Instalación y ejecución

```bash
npm install
npm run dev
