# 7. AJAX
Mise en place de l’Ajax au sein de l’application


## 7.1. Recherche des titres de musique en utilisant l'Ajax et l'API REST Musicovery
- Editer le fichier js/app.js
- Ajouter un attribut `ajaxBaseUrl` dans le constructeur et l'initialiser à la valeur 
  `http://musicovery.com/api/V3/track.php`. Cette URL est une API de recherche de musique.
- Créer une nouvelle méthode `onAjaxSearch()` dans la classe Application, et utiliser celle-ci au sein de l'écouteur
  d'évènement du champ "Rechercher" créé précédemment (à la place de  méthode onSearch)
- Créer une URL en utilisant l'attribut `Application.ajaxBaseUrl` et en injectant l'expression recherchée
  dans le paramètre `title`
  - Elle doit avoir par exemple la forme suivante (TITRE sera remplacé):
    http://musicovery.com/api/V3/track.php?fct=search&title=TITRE&format=json
  - Ne pas oublier d'encoder le paramètre title (car il peut contenir des espaces)
- Executer la requêtte, puis traiter la réponse pour extraires les différent titres trouvés
  - Il faudra récupérer les propriétés `title` et `artist.name` de chacun des `track`
  - Une fois la liste des songs créées t au même format que celui utilisé à l'initialisation de l'application,
    il sera nécessaire d'appeler la méthode `displaySongs()` pour mettre à jour les titre des musiques affichés.


## 5.2. Animation du formulaire
- Modifier le code HTML pour affecter la classe `connectionPanel` afin qu'il soit invisible au démarrage
- Modifie le fichier `app.js` afin qu'au démarrage de l'application :
 - Le formulaire tout entier dispose de la couleur de fond à `#009688`
 - Au bout de 100ms, ajouter la classe `visible`
 - Au bout de 1s, modifier la couleur de fond à `#607d8b`
 