#!/bin/bash

read -p "Enter new React Name :  " dir_name

pnpm create vite@latest "$dir_name" -- --template react-ts
cd "$dir_name"

echo "$dir_name Project setup complete."

pnpm add react-router-dom @tanstack/react-query @tanstack/react-query-devtools axios zustand @hookform/resolvers react-hook-form zod @mui/material @emotion/react @emotion/styled

pnpm add tailwindcss postcss autoprefixer @radix-ui/react-dropdown-menu @radix-ui/react-slot class-variance-authority clsx tailwind-merge -D
npx tailwindcss init -p
echo "/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
}" > tailwind.config.js



pnpm add -D eslint eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier eslint-config-prettier



mkdir -p src/{api,components,hooks,store,types,utils,routes,pages,features}


cat > .env <<EOL
VITE_API_URL=http://localhost:8080/api
VITE_ENV=development
EOL



pnpm add -D @openapitools/openapi-generator-cli
npx openapi-generator-cli generate -i http://localhost:8080/v3/api-docs -g typescript-axios -o src/api/generated



## Docker 설정
#cat > Dockerfile <<EOL
#FROM node:18-alpine AS builder
#WORK /app
#COPY package*.json .
#RUN npm install
#COPY . .
#RUN npm run build
#
#FROM nginx:alpine
#COPY --from=builder /app/dist /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
#EOL
#
#cat > nginx.conf <<EOL
#server {
#  listen 80;
#  location / {
#    root /usr/share/nginx/html;
#    index index.html;
#    try_files \$uri \$uri/ /index.html;
#  }
#}
#EOL