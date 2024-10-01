# Plotic TBT 


## Présentation

> Ce projet est un site web pour but de tour par tour contre ses amis.

## Approche technique

Vu que ce projet avec devoir gère du back-end et du front-end je vais utiliser deux frameworks :

- [Adonis.js](https://adonisjs.com) : C'est un frameworks qui permet de gèrer le back-end d'une application web avec des systèmes de gestion de routes, des models pour les base de données avec leur propre ORM [lucid](https://lucid.adonisjs.com/docs/introduction), des validator avec [vine](https://vinejs.dev/docs/introduction), Adonis permet aussi de gère un système de compte avec son propre système de connexion ou via Ouath2 pour ce connecté via Google, Github ect…

- [React](https://fr.react.dev?uwu=true) : React lui sera là pour la partie interface avec [Tailwind CSS](https://tailwindcss.com/) pour faire le style. Et pour pouvoir gère possiblement un classement et une page profils.

Pour ce qui est de stocker les données des utilisateurs ce projet va utiliser [PostgreSQL](https://www.postgresql.org/) avec comme ORM celui de Adonis Lucid.

La base de données va pouvoir stoker les connexions des utilisateurs ,leur ELO et leur historique de partie.

La base de Adonis utiliser pour crée ce projet est avec [Inertia](https://inertiajs.com/) et React avec le SSR (Server-side rendering), inertia permet de liée le back-end et le front-end.

### Système de connexion

Un utilisateur ne pourra pas lancer de partie s'il n'est pas connecté au préalablement. 

Pour connecté simultanément deux personnes pour faire une partie projet va utilise le module socket.io de Adonisjs pour gère les web Socket. Utilisation de Création de code / rejoindre une partie 

## Structure du site

```
├── errors
│   ├── not_found.tsx
│   └── server_error.tsx
└── home.tsx
```
La route `home.tsx` équivaut à la racine pour le vérifier aller dans le fichier `start/routes.ts`.

Le dossier ``errors`` est là ou l'utilisateur est envoiyé si le server ou le client recontre une erreur.
Exemple :
- Si l'utilisateur fait une erreur de route **404** : Il seras envoyé sur la page ``errors/not-found.tsx``
- Si par contre c'est le server qui rencontre une erreur typiquement l'erreur **504** l'utilisateur sera envoiyé vers la page ``errors/server-errors.tsx``

Pour plus d'information sur le routage de l'application direction [Routing Adonis.js](https://docs.adonisjs.com/guides/basics/routing)

## Installation 

Pour lancer l'application il faut node >= 20.6 et npm.

````bash
git clone https://github.com/0verLighT/politic_tbt.git
````

Installer les depandences 

```bash
npm i
npm run dev
```

## Docker

may be ? 


