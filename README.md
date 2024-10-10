# Plotic TBT


## Présentation

> Ce projet est un site web ayant pour objectif de faire un jeu de tour par tour contre ses amis.

## Approche technique

Vu que ce projet va devoir gérer du back-end et du front-end je vais utiliser deux frameworks :

- [Adonis.js](https://adonisjs.com) : C'est un frameworks qui permet de gérer le back-end d'une application web avec des systèmes de gestion de routes, des modèles pour les bases de données avec leur propre ORM [lucid](https://lucid.adonisjs.com/docs/introduction), des validator avec [vine](https://vinejs.dev/docs/introduction), Adonis permet aussi de gérer un système de compte avec son propre système de connexion ou via Ouath2 pour ce connecter via Google, Github ect…

- [Vue3](https://fr.vuejs.org/guide/introduction) : Vue3 lui sera là pour la partie interface avec [Tailwind CSS](https://tailwindcss.com/) pour faire le style, et pour pouvoir gérer possiblement un classement et une page des profils utilisateurs.

Pour ce qui est de stocker les données des utilisateurs, je vais pour ce projet utiliser [PostgreSQL](https://www.postgresql.org/) avec comme ORM celui de Adonis Lucid.

La base de données va pouvoir stoker les connexions des utilisateurs, leur ELO et leur historique de parties.

La base de Adonis utilisée pour créer ce projet est mise en relation avec [Inertia](https://inertiajs.com/) et React. Inertia permet de lier le back-end et le front-end.

### Système de connexion

Un utilisateur ne pourra pas lancer de partie s'il n'est pas connecté préalablement.

Pour connecter simultanément deux personnes pour faire une partie, le projet va employer le module socket.io de Adonisjs pour gérer les WebSockets.
Pour rejoindre une partie, l'utilisateur saisit un code unique généré par le site et transmis à l'utilisateur hôte de la partie.

## Structure du site

```
├── errors
│   ├── not_found.tsx
│   └── server_error.tsx
└── home.tsx
```
La route `home.tsx` équivaut à la racine. Pour le vérifier, il suffit de se rendre dans le fichier `start/routes.ts`.

Le dossier ``errors`` est le chemin vers lequel l'utilisateur est envoyé si le serveur ou le client rencontrent une erreur.
Exemple :
- Si l'utilisateur fait une erreur de route **404** : il sera envoyé sur la page ``errors/not-found.tsx``
- Si par contre c'est le serveur qui rencontre une erreur, typiquement l'erreur **504**, l'utilisateur sera envoyé vers la page ``errors/server-errors.tsx``

Pour plus d'information sur le routage de l'application, direction [Routing Adonis.js](https://docs.adonisjs.com/guides/basics/routing)

## Installation

Pour lancer l'application il faut node $\ge$ 20.6 et npm.

````bash
git clone https://github.com/0verLighT/politic_tbt.git
````

Pour installer les dépendances

```bash
npm i
npm run dev
```

## Docker

Peut-être plus tard 
