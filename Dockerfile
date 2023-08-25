FROM public.ecr.aws/f4k0r0p1/node16.14:latest

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node","index.js"]