# Présentation

Ce projet est un backend qui a été réalisé dans le cadre de la matière majeure 'Web Full Stack' en Mastère 1 à Ynov.
Il a été réalisé en Typescript et ce backend est une API gérant l'authentification et la mise à disposition/édition de données récupérées dans notre base de données.


## Technologies

Les technologies utilisées dans cette application sont les suivantes:

![Typescript](https://duckduckgo.com/i/b3730d88.png)<br/>
Typescript fut utilisé comme notre langage de programmation principal, le typage des données permet d'avoir une solution plus propre, lisible et favorise le travail en équipe.

![MongoDB](https://duckduckgo.com/i/be0a1cdf.png)
Le côté persistance des données nous avons préconisé MongoDB, car il est tout d'abord plus simple d'utilisation et nous avons souhaité l'utiliser afin de pouvoir s'entrainer sur cette technologie qui nous était (pour l'ensemble des membres de l'équipe) peu familière.
Nous avons décidé d'opter pour une base de données cloud-based afin d'éviter les soucis de configuration locale (Mongo Atlas).

## Découpage du projet

Nous avons décidé de découper nos différentes couches par objet, à la création d'une nouvelle ressource, plusieurs couches seront à créer à savoir :

- Router (qui va comporter l'ensemble de nos routes API)
- Middlewares (facultatif, ils vont être utiles pour faire de la gestion de données ou gestion d'accès à celles-ci)
- Controller
- Service
- Repository
- Model (qui va être l'endroit où nous créons notre schéma d'une ressource)

## Authentification

![JWT](https://jwt.io/img/pic_logo.svg)<br/>
La partie authentification se fait tout simplement par une vérification de données (à savoir email et mot de passe).
Une fois que l'utilisateur est connecté, nous lui fournissons un JsonWebToken afin qu'il puisse avoir accès à des ressources accessibles uniquement en mode authentifié.
Ce token est pour l'instant valide indéfiniement et comporte des données telles que le rôle de l'utilisateur, son email et son id.
Côté base de données, les mots de passes sont hashés afin d'assurer un certaine sécurité des données.

## Installation

L'installation du projet se fait en quelques étapes :
1. Installation des différents packages
```
npm i
```

2. Modification des ids de connexion à la base de données dans le fichier de variables d'environnement
3. Lancer l'application
```
npm run start
```

### Utilitaires
Liste des différents comptes disponibles :
| Username    |   Email | Password | Rôle |
| ----------- | ----------- | ----------- | ----------- |
| admin      | admin@admin.com | admin | ADMIN |
| rgi   | rgimenez@test.com | rgi | MEMBER |

