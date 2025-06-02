FROM public.ecr.aws/docker/library/node:22.16.0-alpine3.22
RUN mkdir /app && chown node:node /app
RUN mkdir /app/node_modules && chown node:node /app/node_modules
WORKDIR /app
COPY . .
COPY package*.json ./
RUN rm -rf package-lock.json node_modules \
    && npm cache clean --force \
    && npm install -g @angular/cli \
    && npm install
RUN npm run build --prod
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]