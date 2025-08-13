# Dockerfile
FROM node:20-alpine AS builder

# Installer Yarn et créer l'app
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json yarn.lock ./

# Installer les dépendances avec Yarn
RUN npm install -g yarn && yarn install

# Copier le reste du code
COPY . .

# Construire l'application
RUN yarn build

# Deuxième étape : serveur léger pour servir le build
FROM nginx:alpine

# Copier la config personnalisée de nginx (optionnel mais utile pour SPA)
COPY nginx.conf /etc/nginx/nginx.conf

# Supprimer la config par défaut et copier le build
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html

# Exposer le port 83 (dans le conteneur)
EXPOSE 83

# Pas besoin de CMD, nginx lance automatiquement
