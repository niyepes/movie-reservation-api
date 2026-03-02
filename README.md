# 🎬 Movie Reservation API

API básica para la gestión de reservas de películas, construida con **Node.js, Express, MongoDB y TypeScript**.  
Un proyecto enfocado en aprender y aplicar buenas prácticas de backend moderno, como lo son:

- CRUD completo de reservas
- Autenticación con JWT
- Manejo centralizado de errores
- Patrones de software como Strategy, aplicados a la arquitectura
- Código modular y escalable con TypeScript


---

## Tecnologías usadas

- NodeJS
- ExpressJS
- TypeScript
- MongoDB/ MongoDB Compass
- JWT Auth

---

## 🚀 Cómo iniciar el proyecto

1. Clonar repositorio

```bash
 git clone https://github.com/niyepes/movie-reservation-api.git
 cd movie-reservation-api
```

2. Instala las dependencias

```bash
 npm install
```

3. Crea un archivo .env en la raíz con las siguientes variables:

```bash
  PORT=4000
  MONGO_URI=mongodb://localhost:27017/movie_reservation
  JWT_SECRET=supersecretkey
  JWT_EXPIRES_IN=1d
```

4. Levanta el servidor en modo desarrollo:

```bash
  npm run dev
```

O en su defecto:
```bash
  npm start
```
