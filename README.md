# Hackathon React 2022

Bienvenue sur le *starter code* de ce hackathon React 2022 !

## Le sujet

En groupes mixtes DFS/WDI, vous allez lors de ce hackathon vous mettre dans la peau d'une startup qui doit développer son produit minimum le plus rapidement possible dans le but de pouvoir le présenter à des investisseurs afin d'obtenir le financement nécessaire au développement d'un produit complet.

Comme vous le savez peut-être, les conditions légales pour les auto-écoles ont été  simplifiées, permettant à des moniteurs d'auto école de travailler en tant qu'indépendant.

Vous savez qu'il existe un certain nombre de moniteurs indépendants à La Rochelle, dont certains ont des difficultés à se faire connaître et à trouver des élèves, ainsi qu'à gérer leur activité : créneaux d'heures de conduites, contact des élèves, lieux de départ/arrivée, réservations et paiement d'heures de conduite etc.

Votre idée est donc de créer une plateforme locale (rochelaise) que ces moniteurs indépendants pourraient utiliser.

## Déroulé de l'évènement

Vous devez travailler en groupe à la réalisation d'une preuve de concept technique et d'une présentation commerciale.

Contrairement à la tradition des hackathons, une coupure est prévue entre le premier jour à 19h30 et le second jour à 9h.

Vous avez jusqu'à vendredi 16h pour finaliser votre travail, après quoi les groupes passeront tour à tour pour présenter leurs projets.

Les salles à votre disposition sont les suivantes :

* Info Trans 2
* SC8
* LS1

Rendez vous en salle Info Trans 2 pour les présentations finales.

## Le code de départ

Le code de départ (sur ce *repository*) est un projet créé avec *Create React App*, auquel a été ajouté un serveur d'API proposant quelques points de terminaison préparés à l'avance.

Vous êtes libres de faire un *fork* de ce projet directement sur Gitlab, ou encore de le cloner chez vous, de créer un projet vierge sur le Gitlab de l'université et de modifier l'adresse du *repository* distant chez vous. Par exemple :

```bash
git clone git@gitlab.com:lp-miaw-react/2022-hackathon-starter.git
cd 2022-hackathon-starter
git remote set-url --push origin <adresse-de-votre-repo>
```

Vous pourrez ensuite lancer le serveur de développement de Create React App comme à l'accoutumée :

```bash
npm run start
```

Votre application sera disponible à l'adresse suivante : [http://locahost:3000](http://locahost:3000).

### Le *backend*

Avant tout, il convient de préciser que le *backend* fourni ne représente aucunement une obligation ni une limitation, il est uniquement présent pour vous faire gagner du temps et vous aider. Vous n'êtes pas obligés de l'utiliser (même si c'est fortement recommandé), et vous pouvez le modifier à votre guise.

Ce *backend* est construit autour du paquet [`json-server`](https://github.com/typicode/json-server), qui permet de créer une API REST complète à partir d'un simple fichier JSON, ici le fichier `db/db.json`.
N'hésitez pas à en éplucher la [documentation](https://github.com/typicode/json-server) pour bien comprendre les différentes possibilités offertes par l'API.

#### Utilisation

Pour démarrer le *backend*, il suffit de taper la commande suivante dans un terminal :

```bash
npm run server
```

Vous pourrez ensuite effectuer des requêtes :

* directement depuis votre application à l'adresse `/api/<route>`
* depuis votre navigateur ou autre à l'adresse `http://locahost:8080/api/<route>`

#### Modèles génériques

Pour tous les modèles génériques (fournis par [`json-server`](https://github.com/typicode/json-server) et le fichier `db/db.json`), un certain nombre de fonctionnalités sont à votre disposition. 

Voici les verbes HTTP utilisables sur les modèles :

* `GET /api/<model>` : liste des éléments pour le modèle
* `POST /api/<model>` : ajout d'un élément à la liste
* `PUT /api/<model>/<id>` : modification complète d'un élément existant
* `PATCH /api/<model>/<id>` : modification partielle d'un élément existant
* `DELETE /api/<model>/<id>` : suppression d'un élément

Il existe en plus de nombreux paramètres vous permettant de modifier le résultat de votre requête. Par exemple, vous pouvez obtenir la liste des moniteurs avec la requête suivante :

`GET /api/users?role=instructor`

Vous pouvez découvrir le reste de ces fonctionnalités dans la [documentation de json-server](https://github.com/typicode/json-server#routes).

#### Authentification

Le système d'authentification est le même que celui du [`TP4 : Gallery`](https://lpmiaw-react.napkid.dev/tp4/react-gallery-part1#lauthentification).

Il est tout à fait fonctionnel, mais n'est couplé ici à aucun système d'autorisation : toutes les actions de l'API peuvent être effectuées par n'importe quelle personne, authentifiée ou non.

Pour rappel, en voici les points de terminaison :

* `GET /api/me` : Obtenir l'utilisateur actuellement connecté
* `POST /api/login` : Se connecter
* `POST /api/logout` : Se déconnecter

Pour ajouter un utilisateur, il suffit de faire une requête de type `POST` sur le point de terminaison des utilisateurs.

#### Upload de fichiers

Pour vous faire gagner du temps, un système d'upload de fichier est intégré à ce *backend*, ce qui pourrait vous servir suivant ce que vous souhaitez implémenter.

Il fonctionne de manière similaire à celui du [`TP4 : Gallery`](https://lpmiaw-react.napkid.dev/tp4/react-gallery-part1#le-formulaire-de-t%C3%A9l%C3%A9versement).

Vous pouvez donc utiliser une fonction de téléversement de la forme suivante :

```js
const uploadForm = (maDonnee, monFichier) => {
    const formData = new FormData()
    formData.append('monChamps', maDonnee)
    formData.append('monChamps', maDonnee)
    // ...
    formData.append('monUpload', monFichier)

    return fetch('/api/<model>', {
        method: 'POST',
        body: formData,
        credentials: 'same-origin'
    })
    .then(res => {
        if(!res.ok){
            throw new Error('Upload failed !')
        }
        return res.json()
    })
}
```

Une entrée sera ajoutée à la base de données contenant tous les champs renseignés dans l'objet `formData`, et une propriété `uploadUrl` permettant d'accéder au fichier téléversé.

#### Types de données fournis

Les types de données fournis sont là pour vous aider à trouver des idées de fonctionnalités et à structurer votre application, mais vous êtes tout à fait libres d'utiliser vos propres structures de données, en modifiant le fichier `db/db.json` ou le générateur `db/generate.js`.

Si vous avez modifié le générateur, vous pouvez l'executer en lançant la commande suivante :

```bash
npm run generate
```

N'oubliez pas de re-démarrer le *backend* si vous modifiez le fichier `db/db.json`.

##### User

Ce modèle de données, accessible à l'adresse `/users`, permet de voir, d'ajouter, modifier ou supprimer un utilisateur.
Les données pré-remplies dans la base de données sont de la forme suivante :

```json
{
    "id": 16,
    "firstName": "Lucile",
    "lastName": "Martel",
    "email": "myriamgeoffroy@gmail.com",
    "password": "6Armand76",
    "favoritePlacesId": [
        5
    ],
    "favoriteInstructorsId": [
        4
    ],
    "role": "student"
}
```

##### Session

Ce modèle représente une session de conduite.
Il se présente comme suit :

```json
{
    "id": 10,
    "placeId": 1,
    "dateStart": 1650806474000,
    "dateEnd": 1650813674000,
    "instructorUserId": 4,
    "studentUserId": 2
}
```

##### Place

Ce modèle représente un lieu de départ/arrivée.
Il se présente comme suit :

```json
{
    "id": 6,
    "name": "Église de Tasdon",
    "position": [
        46.14861,
        -1.14438
    ]
}
```
