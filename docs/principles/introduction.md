# Standards et principes d'utilisation

Cette partie décrit les différents standards qui sont proposés pour utiliser le JSON ou XML a travers une API REST.

## La requète

Dans une API REST on va utiliser l'uri pour décrire la ressource a laquelle on souhaite accéder. Si on dois envoyer des paramètres suplémentaires (ex : les informations d'un formulaire) on va les passer a traver le body de la requète (sauf les GET qui ne prenne pas de body).
L'objectif est d'etre sur du résultat que l'on va obtenir en le décrivant suffisement dans la requete

```js
GET    https://api.github.com/users/:username
```
Ici on contacte en get l'api github, et on lui demande l'utilisateur avec le parametre `:username`. L'api va alors nous renvoyer un json qui contient les informations de cet utilisateur.

```js
GET    https://api.github.com/repos/:owner/:repo/pulls
```
Un exemple un peu plus complexe. Ici on veut toutes les pull requests d'un dépot. On va donce appeler la route `repos` avec diferents parametre : `:owner` le propriètaire du dépot, `:repo` le nom du dépot, et finalement `pulls` pour demander spécifiquement les pull requests.

On vois bien ici que l'uri de la requete représente bien quelle ressource on veut accéder.

Un exemple avec une requete en POST :
```js
// url
POST    /repos/:owner/:repo/pulls

// body de la requete
{
  "title": "Amazing new feature",
  "body": "Please pull this in!",
  "head": "octocat:new-feature",
  "base": "master"
}
```

## La réponse

### XML



### JSON