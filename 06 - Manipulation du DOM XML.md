# 6. Interaction avec les feuilles de style en cascade
Utilisation du DOM XML au sein de l’application créée


## 6.1. Sauvegarde de l'application dans l'objet `window`
- Modifier la méthode `initialize()`pour sauvegarder l'objet `application` au sein de l'objet window avant
  d'appeller la méthode `start()`. Ceci sera utilise au sein des écouteurs poura accéder à l'application,
  car `this` ne sera pas disponible.


## 6.2. Modification du titre du header 
- Editer le fichier `app.html` et le fichier `js/app.js` afin que le titre du header soit remplacé par
  le nom de l'application ainsi que la version (comme dans la console au démarrage de l'appliation)
  

## 6.3. Affichage des titres de musique
- Editer le fichier `app.html` et le fichier `js/app.js` afin de créer une méthode `displaySongs()` qui acceptera
  en paramètre une liste d'objet de musiques
- Appeller cette méthode dans la fonction `initialize()`, après l'appel de la méthode `debug()` et en passant en paramètre
  la liste des musiques initialisées précédement et
  - Attention : il ne faut appeller cette méthode que si l'utilisateur est sur la page `app.html`
    Pour cela, il faudra tester la propriété `href` de `document.location`
- Afficher les différentes musiques sur la page en clonant l'élement template présent dans l'html
- Pour chaque élément cloné, il faudra metre à jour le titre et l'artiste en accédant aux noeuds enfants


## 6.4. Recherche de titres de musique / auteur
- Editer le fichier `app.html` et le fichier `js/app.js` afin de créer une méthode onSearch
- Initialiser un écouteur au démarrage de l'application qui va appeller cette méthode sur chaque changement de touche
  du champ "rechercher" (déjà présent dans la page).
  - Attention : il est nécessaire de faire une pause de 150 ms dans la méthode pour récupérer la chaine de caractère
    du champ "Rechercher", car celle ci n'est pas encore mise à jour lors de l'appel du callback de l'écouteur
- Cette méthode a pour objectif de chercher toutes les musiques en mémoire (`application.songs`) dont le tite
  ou l'artiste contiennent l'expression recherchée
- Appeler la méthode `displaySongs()` pour mettre à jour les titre des musiques affichés
- Il sera nécessaire de modifier la méthode `displaySongs()` afin de supprimer les anciens titres de musiques présent
  à l'écran avant d'ajouter les nouveaux via un sélecteur JavaScript. 
