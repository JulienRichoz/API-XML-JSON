# JSON

On trouvera ici comment utiliser du JSON dans différents langages de programmations.

## PHP

PHP supporte le parse de JSON nativement.

### Lire du JSON

Pour parser du JSON, il existe une fonction qui permet de le faire très facilement.

```php
$parseJson = json_decode($json);
```

La fonction "json_decode" prend le JSON que l'on veut parser en paramètre, il suffit de stocker ça dans une variable pour pouvoir le manipuler.
Cette fonction renvoie un objet que l'on manipulera comme ça

```php
$parseJson->{'node'}->{'otherNode'};
```

Il suffit de changer les valeurs selon le JSON que vous voulez lire.
Si vous avez un tableau dans votre JSON, il suffit de le traiter comme vous le feriez pour un simple tableau PHP

```php
$parseJSON->{'node'}[0]->{'othernode'};
```

### Générer du JSON

Comme pour la lecture, PHP inclut une fonction qui permet de générer du JSON facilement.

```php
$person->name = "Steven";
$person->age = 21;

$json = json_encode($person);
```

Il suffit de créer un ou plusieurs objets et d'utiliser la fonction "json_encode".
Il est aussi possible d'utiliser un tableau PHP comme paramètre.

```php
$array = ['Steven', 'Kévin', 'Bastien'];

$json = json_encode($array);
```

## Javascript

JSON vient du javascript, du coup c'est très facile d'utilisation.

### Lire du JSON

Pour utiliser du JSON :

```javascript
var json = JSON.parse(text);
```

La variable ``json`` est un objet qui contiendra le json repris de la variable ``text``.
Pour pouvoir la manipuler

```javascript
var name = json.name;
```

``json`` étant un simple objet, on peut le manipuler comme tel.
Si l'on veut reprendre des valeurs qui se trouvent dans un node autre que le root

```javascript
var name2 = json.name.secondName;
```

### Générer du JSON

```javascript
var names = { "name":"John", "age":30, "city":"New York"};
var json = JSON.stringify(names);
```

Il est aussi possible de convertir un simple tableau en JSON

```javascript
var arr = ['Steven', 'Kévin', 'Bastien'];
var json = JSON.stringify(arr);
```

## Ruby

Pour pouvoir utiliser JSON avec Ruby, il faut d'abord installer son module

```bash
gem install json
```

Et pour pouvoir l'utiliser, il faut rajouter ces 2 lignes en début de son script

```ruby
require 'rubygems'
require 'json'
```

### Lire du JSON

Pour reprendre du JSON depuis un string

```ruby
string = '{ "name":"John", "age":30, "city":"New York"}'
json = JSON.parse(string)
```

Ou depuis un fichier

```ruby
file = open("test.json")
json = file.read

parsed = JSON.parse(json)
```

La fonction de parse renvoie le JSON sou forme de tableau que l'on peut utiliser comme ça

```ruby
name = json['name']
```

### Générer du JSON

Pour générer du JSON

```ruby
my_hash = {:name => "Steven"}
json = JSON.generate(my_hash)
```