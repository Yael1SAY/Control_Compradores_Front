#FROM nginx:alpine
 # use a volume is mor efficient and speed that filesystem
#VOLUME /tmp
#RUN rm -rf /usr/share/nginx/html/*
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY src /usr/share/nginx/html
#expose app and 80 for nginx app
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]


#Primera Etapa
FROM node:10-alpine as build-step
VOLUME /tmp
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod
#Segunda Etapa
FROM nginx:1.17.1-alpine
	#Si estas utilizando otra aplicacion cambia PokeApp por el nombre de tu app
COPY --from=build-step /app/dist/trudminweb /usr/share/nginx/html