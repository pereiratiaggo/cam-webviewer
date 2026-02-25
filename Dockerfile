FROM node:18-alpine

WORKDIR /app

# Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm install --production

# Copiar arquivos HTML e servidor
COPY index.html ./
COPY layout2.html ./
COPY server.js ./

# Expor porta
EXPOSE 3000

# Comando de inicialização
CMD ["npm", "start"]
