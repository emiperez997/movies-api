# Movies API

## Descripción

- Tecnologías: Nest.js, TypeScript, MongoDB, Docker
- Hecho por: @emiperez997

## Instalación

- Clonar el repositorio
- Instalar dependencias con `pnpm install`
- Ejecutar el contenedor de Docker con `docker-compose up -d`
- Poblar la base de datos con `pnpm run seed`
- Ejecutar el servidor con `pnpm run start`

## API

Para acceder a la API, es necesario un token de acceso. Para obtener un token, se puede acceder al index del backend y solicitarlo ingresando tu mail.

En cada petición, se debe incluir un token de acceso en la url de la petición.

```
https://localhost:5000/api/movies?apikey=<token>
```

- `GET /movies` - Devuelve una lista de los filmes
- `GET /movies/:id` - Devuelve un filme con el id especificado
- `POST /movies` - Crea un nuevo filmes
- `PUT /movies/:id` - Actualiza un filme con el id especificado
- `DELETE /movies/:id` - Elimina un filme con el id especificado
