# Utilise l'image de base Node.js
FROM node:14-alpine

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installe les dépendances du projet
RUN npm install

# Copie le reste des fichiers du projet dans le conteneur
COPY . .

# Construit l'application React pour la production
RUN npm run build

# Expose le port 3000 utilisé par l'application React
EXPOSE 3000

# Démarre l'application React lorsque le conteneur est lancé
CMD ["npm", "start"]
