FROM node:20-alpine3.19 as build

WORKDIR /app

COPY package*.json .

RUN npm install

RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points

COPY . .

RUN npm run build

FROM nginx:stable

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/app-1/browser/ /usr/share/nginx/html

EXPOSE 8080
