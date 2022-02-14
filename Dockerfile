#FROM node:15 as node
#WORKDIR /app
#COPY ./ /app/
##RUN npm set audit false
#RUN npm cache clean -f
#RUN npm install -f
#RUN npm run build
#
#FROM nginx:1.21.6
#COPY --from=node /app/dist/control-compradores /usr/share/nginx/html


FROM nginx:alpine
 # use a volume is mor efficient and speed that filesystem
VOLUME /tmp
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/control-compradores /usr/share/nginx/html
#expose app and 80 for nginx app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
