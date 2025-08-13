# Dockerfile

# Phase 1 : Build de l'application React
FROM node:20-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json yarn.lock ./

# Installer les dépendances avec yarn
RUN npm install -g yarn && yarn install

# Copier le reste du code
COPY . .

# Construire l'application
RUN yarn build

# Phase 2 : Serveur de production léger
FROM node:20-alpine

# Installer un serveur statique simple
RUN npm install -g serve

WORKDIR /app

# Copier le dossier build depuis la phase de build
COPY --from=builder /app/build ./build

# Exposer le port 83
EXPOSE 83

# Commande de démarrage
CMD ["serve", "-s", "build", "-p", "83"]
