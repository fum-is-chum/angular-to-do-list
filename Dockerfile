FROM todo-list-frontend-base:latest as builder
WORKDIR /app
RUN pnpm run build

FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/
COPY --from=builder /app/dist/to-do-list /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]