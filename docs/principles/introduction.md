# Standards et principes d'utilisation

Cette partie décrit les différents standards qui sont proposés pour utiliser le JSON ou XML a travers une API REST.

## La requète

### Exemples

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

Ici on a la meme uri que l'exemple précédent, mais on utilise l'entete `POST`, ce qui signifie que l'on veut ajouter un novel élément (ici une nouvelle pull request). Il faudra alors passer dans le body de la requete les informations de la nouvelle pull request a ouvrir (ici au format JSON).

### Les bonne pratiques

L'objectif de `REST` et de rendre ces requetes intuitives, certaines regles ont été définies :

* On utilise un verbe http pour définir l'action de la requete (GET, POST, PATCH, DELETE).
  * **GET** On veut obtenir une ressource
  * **POST** On veut ajouter une ressource
  * **PATCH** On veut editer une ressource
  * **DELETE** On veut supprimer une ressource
  * Il existe d'autres verbes http plus spécifiques.
* L'uri de la requète doit être intuitif, il dois décrire la ressource.
* les différents parametres sont séparés par des `/` on utilise pas le `?id=3` sauf cas spécifiques.

## La réponse

Une fois la requete effectue, l'api vas nous renvoyer une reponse. Pour uniformiser ces reponces le standard `REST` propose une certain nombre de *bonnes pratiques*.

Le standard `REST` ne prend en compte que le `JSON`, mais on peut très bien imaginer renvoyer les réponces aussi en `XML` ou encore en `YAML`.

Voici un exemple de réponce de l'api GitHub si on souhaite connaitre tous les dépots public d'un utilisateur :

```json
[
  {
    "id": 1296269,
    "owner": {
      "login": "octocat",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "url": "https://api.github.com/users/octocat",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "repos_url": "https://api.github.com/users/octocat/repos",
      "events_url": "https://api.github.com/users/octocat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": false
    },
    "name": "Hello-World",
    "full_name": "octocat/Hello-World",
    "description": "This your first repo!",
    "private": false,
    "fork": false,
    "url": "https://api.github.com/repos/octocat/Hello-World",
    "html_url": "https://github.com/octocat/Hello-World"
  }
]
```

**Les régles :**

* Si la réponse peut contenir plusieurs éléments identiques le `JOON` est entouré de `[]` pour signifier que c'est un tableau d'objects.
* Si la réponce de peut contenir qu'un element elle est entourée des habituelles `{}`.