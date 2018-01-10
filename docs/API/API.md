# Q'est-ce qu'une API ?


Si nous decortiquons ces trois lettres : API, nous obtenons Application Programming Interface, ce que nous pourrions traduire en interface utilisateur pour developpeur.

## A quoi sert-elle ?

Une API est un ensemble de moyens utilisés par un logiciel pour donner accès à certaines de ses fonctionnalités ou ressources. On peut donc utiliser simplement les fonctionnalités offertes par un logiciel ou un site web.
ça évite au developpeur de decortiquer le programme pour utiliser certaines de ses fonctionnalités avec d'autres programmes.

## Utilisation

Les APIs sont énormément utiliser sur internet, Google, Youtube, Facebook, Paypal ou encore Ebay propose une API. En général elles sont gratuites mais certaines fonctionnalités sont limitées ou payantes.

## API REST

L'API REST est une ensemble de bonnes pratiques pour l'architecture de celle-ci. Elle utilise le protocole HTTP contrairement à certaines autres technologies (SOAP ou XML-RPC)

Les 5 règles :
* L’URI comme identifiant des ressources
* Les verbes HTTP comme identifiant des opérations
* Les réponses HTTP comme représentation des ressources
* Les liens comme relation entre ressources
* Un paramètre comme jeton d’authentification

### URI comme identifiant

Cela veut dire qu'il y a une certaines logique à respecter dans l'url d'accès au données. La logique défénie est de créer une hiérarchiré des éléments

Exemples :
* http://site.com/persons
* http://site.com/persons/83
* http://site.com/persons/83/comments

### Verbes HTTP comme identifiant

La seconde règle est d'utiliser les verbes HTTP existant plutot que d'utiliser les actions dans l'URI. Les 4 opérations possibles
* Créer (create) => POST
* Afficher (read) => GET
* Mettre à jour (update) => PUT
* Supprimer (delete) => DELETE

Exemples :
* POST http://site.com/persons
* GET http://site.com/persons/83
* DELETE http://site.com/persons/83/comments/32

### Réponses HTTP comme représentation des ressources

Le résultat de l'API n'est une ressource, c'est la représentation d'une ressource. C'est pour cela, que l'utilisateur peut choisir entre différents formats de réponses CSV, HTML, JSON et XML.

### Liens comme relation

Ce qui veut dire que les liens doivent contenir l'attribut rel qui peut être :
* contents
* edit
* next
* last
* payment
* etc.

Ceci permet d'améliorer la compréhension pour les systèmes.

### Paramètre comme jeton d’authentification

Le but est d'utiliser un token pour l'authentification. Cette clé permet ensuite au système de reconnatre quel utilisateur fait une requête et de donner l'accès à telle et telle ressource ou générer une facture pour l'utilisation de l'API.



Site :
* http://www.comprendre-internet.com/Qu-est-ce-qu-une-API.html
* https://blog.nicolashachet.com/niveaux/confirme/larchitecture-rest-expliquee-en-5-regles/
