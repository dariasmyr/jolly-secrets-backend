FROM node:lts-alpine
RUN apk add python3 git && rm -rf /var/cache/apk/*
WORKDIR /app
COPY package*.json ./
RUN npm i --legacy-peer-deps
COPY . .
RUN npm run db:gen && npm run build && chmod +x ./healthcheck.sh
ENV NODE_ENV=production
CMD ["npm", "run", "start:prod"]
