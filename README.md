# Contact Form App

Une application **Next.js** connectée à une base de données **MongoDB Atlas**, permettant aux utilisateurs de soumettre un formulaire de contact.  
Le backend est géré via les routes API de Next.js, et les données sont persistées dans MongoDB.

---

## Technologies

- [Next.js](https://nextjs.org/) – Framework React
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) – Base de données NoSQL dans le cloud
- [Docker](https://www.docker.com/) – Conteneurisation pour un déploiement simplifié

---

## Configuration

Avant de lancer l’application, crée un fichier `.env` à la racine du projet avec une chaîne de connexion MongoDB :

MONGODB_URI=url_to_mongodb_atlas

 ---

##  Lancer avec Docker

```bash
docker build . -t contactForm
docker run -p 3000:3000 contactForm
```

L'application sera accessible sur http://localhost:3000

