# XML

On trouvera ici comment utiliser du XML dans différents langages de programmations.

On va prendre un XML très simple comme exemple

```xml
<?xml version='1.0' encoding='UTF-8'?>
<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>
```

Et un autre XML un peu plus complexe

```xml
<?xml version="1.0" encoding="utf-8"?>
<bookstore>
  <book category="COOKING">
    <title lang="en">Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>
  <book category="CHILDREN">
    <title lang="en">Harry Potter</title>
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
  </book>
  <book category="WEB">
    <title lang="en-us">XQuery Kick Start</title>
    <author>James McGovern</author>
    <year>2003</year>
    <price>49.99</price>
  </book>
  <book category="WEB">
    <title lang="en-us">Learning XML</title>
    <author>Erik T. Ray</author>
    <year>2003</year>
    <price>39.95</price>
  </book>
</bookstore>
```

## PHP

Depuis la version 5.0, PHP inclut de base le module "SimpleXML".

### Lire depuis un string

Si on stocke du XML dans une variable string, il est possible de le parser, tant que le format XML est respecté.
La fonction

```php
$xml = simplexml_load_string()
```

qui prend comme paramètre le string contenant l'XML.

### Lire depuis un fichier

Si on possède un fichier XML que l'on veut parse, il existe la fonction

```php
$xml = simplexml_load_file()
```

Qui prend en paramètre le fichier XML que l'on veut parser.

### Reprendre les données XML

SimpleXML renvoie un objet avec les différents nodes du XML donnée à la fonction que vous utilisez.
Si on reprend notre XML d'exemple, pour retrouver ses données, on peut le faire comme ceci

```php
echo $xml->to . </br>;
echo $xml->from .</br>;
echo $xml->heading . </br>;
echo $xml->body;
```

On reçoit un object PHP simple qui nous permet de prendre les différents nodes sans compter le node principal.

On va prendre l'XML d'exemple un peu plus complexe
Si on veut reprendre le titre des deux premiers livres

```php
echo $xml->book[0]->title . "<br>";
echo $xml->book[1]->title;
```

On peut voir que les nodes "book" sont donné en tant que tableau par SimpleXML.
Dans la plupart des cas, on veut pouvoir aller chercher tout les nodes "book" et leurs éléments

```php
foreach($xml->children() as $books) {
    echo $books->title . ", ";
    echo $books->author . ", ";
    echo $books->year . ", ";
    echo $books->price . "<br>";
}
```

Ce bout de code nous retourne donc tout les nodes "books" et leurs éléments.

On va voir comment reprendre des attributs dans les éléments.
Si on veut prendre l'attribut "category" et l'attribut "lang" de l'élément "title" de tout les nodes "book"

```php
foreach($xml->children() as $books) {
    echo $books['category'] . </br>;
    echo $books->title['lang'] . </br>;
}
```

Ce code nous retourne la valeur de l'attribut "category" de chaque node "book".

### Générer du XML

SimpleXML peut récupérer du XML, comme on a pu le voir, mais il peut aussi en générer.

On va générer nous-même le premier exemple XML (donc l'XML avec le node racine "note")

```php
$noteXML = new SimpleXMLElement("<note></note>");
$elTo = $noteXML->addChild('to', 'Tove');
$elFrom = $noteXML->addChild('from', 'Jani');
$elHeading = $noteXML->addChild('heading', 'Reminder');
$elBody = $noteXML->addChild('body', 'Don\'t forget me this weekend!');
Header('Content-type: text/xml');
$finalXML = $noteXML->asXML();
```

On a tout les éléments de l'exemple XML qui a été donné en début de page.
Si on veut rajouter un attribut à un élément

```php
$elTo->addttribute('test', 'test');
```

On aura donc l'attribut "test" avec la valeur "test" dans l'élément "to".

## Javascript

### Lire du XML

Si l'on utilise seulement du Javascript de base, il faut utilise un "DOMParser" et spécifier que l'on veut parse du XML. JQuery possède une libraire de parse XML, que l'on va utiliser.

```javascript
var xml = "xml goes here",
  xmlDoc = $.parseXML( xml ),
  $xml = $( xmlDoc );
```

Maintenant que le string contenant le XML a été set, on peut aller chercher les éléments qu'on veut.

```javascript
var heading = $xml.find( "heading" );
```

Si on prend notre exemple avec les livres, si on veut chercher l'auteur du livre avec l'attribut "COOKING"

```javascript
$xml.find( "book[category='COOKING']>author" ).text();
```

ça ressemble beaucoup à du XPath, ce qui ne devrait pas être trop compliqué à utiliser.

### Générer du XML

Si l'on veut reconstruire notre XML d'exemple en JQuery

```javascript
var xmlDocument = $.parseXML("<note/>");
var elTo = xmlDocument.createElement('to');
var elFrom = xmlDocument.createElement('from');
var elHeading = xmlDocument.createElement('heading');
var elBody = xmlDocument.createElement('body');
elTo.text('Tove');
elFrom.text('Jani');
elHeading.text('Reminder');
elBody.text('Don\'t forget me this weekend!');
```

S'il on veut créer des nodes enfants à des éléments

```javascript

```

## Ruby

Il y a plusieurs façons de parser du XML en Ruby, on va utiliser la librairie "Nokogiri" qu'il faudra installer vu qu'elle ne vient pas de base avec Ruby

```bash
gem install nokogiri
```

### Lire depuis un string

```ruby
xml = Nokogiri::XML()
```

On inclut le string contenant du XML en paramètre.

### Lire depuis un fichier

```ruby
xml = File.open("file.xml") { |xmlFile| Nokogiri::XML(xmlFile) }
```

### Reprendre les données XML

Pour reprendre des éléments du XML choisi, on peut utiliser XPath avec Ruby qui facilite la tâche.

Si l'on reprend notre premier exemple d'XML, si on veut trouver l'élément "to"

```ruby
xml.xpath("//to")
```

Et l'on aura la valeur de l'élément "to" qui sera retourné.
Tout se fait avec XPath, rien de spécifique à Ruby.

### Générer du XML

Pour générer du XML, c'est très simple.

```ruby
xml = Nokogiri::XML "<note>test</note>"
xml.to_xml
```

Il suffit de donner le xml voulu en tant que string.