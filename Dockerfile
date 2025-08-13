# Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json yarn.lock ./

# Installer les dépendances
RUN yarn install

# Copier le code source
COPY . .

# Démarrer l'app (le port est géré par la variable d'environnement)
CMD ["yarn", "start"]
