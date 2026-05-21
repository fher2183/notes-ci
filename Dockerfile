FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --production=false || npm install
COPY . .
RUN echo "Files in /app:" && ls -la /app/ && echo "Files in src:" && ls -la /app/src/ || echo "src NOT FOUND"
RUN npm run build && ls -la dist/

FROM node:18-alpine AS runner
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --production --silent || npm install --production
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/main.js"]
