# NestJS Notes - CI/CD demo

Proyecto mínimo en NestJS que expone endpoints para ingreso y consulta de notas. Incluye Dockerfile y workflow de GitHub Actions para build y test.

## Endpoints

| Método | Ruta                  | Descripción                          |
|--------|-----------------------|--------------------------------------|
| POST   | /api/notes/create     | Insertar una nota                    |
| POST   | /api/notes/bulk-create| Insertar varias notas                |
| GET    | /api/notes            | Consultar notas (filtros opcionales) |
| GET    | /api/notes/:id        | Consultar nota por ID                |

## Quick start

```bash
npm install
npm run start:dev
```

## Build producción

```bash
npm run build
npm start
```

## Docker

```bash
docker build -t nest-notes-ci .
docker run -p 3000:3000 nest-notes-ci
```

## API Docs (Swagger)

http://localhost:3000/docs
