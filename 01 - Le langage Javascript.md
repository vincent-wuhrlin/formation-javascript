# Le langage Javascript
Création d’une mini application de bibliothèque multimédia


## 1. Initialisation
- Télécharger les sources
- Créer un nouveau fichier javascript **"app.js"** dans le répertoire **js**
- Editer le fichier **"app.js"**
- Créer une méthode `initialize()` et l'appeler
- Dans le corps de la méthode, afficher un debug sur la console, ex : `console.debug("Initialize !");`
- Afficher la console developpeur et vérifier que le message s'afficher
 
Résultat :

    Initialize !

    
## 2. Création d'une classe *Application*
- Déclarer une classe **"Application"**
- Dans le constructeur de la classe, déclarer et initialiser les variables suivantes :
  - name : "ORSYS Tunes"
  - version : "v1.0"
  - initialized : false
- Ajouter une méthode start()
  - Affichant un premier message sur la console (info) : `Starting ORSYS Tunes v1.0...` utilisant name et version définit dans le constructeur
  - Une mise à jour de l'attribut initialized à true
  - Avant la fin de la méthode, un test de la variable initialized
    - Si vrai, on affiche un deuxième message sur la console (info) : `ORSYS Tunes v1.0 started sucessfully !`
- Ajouter une méthode debug()
  - Affichant un premier message sur la console (debug) `******************** DEBUG ********************`
  - Affichant un deuxième message sur la console (debug) `***********************************************`
- Modifier la méthode `initialize()` pour instancier la classe Application et exécuter respectivement les méthodes start et debug

Résultat :

    Initialize !
    Starting ORSYS Tunes v1.0...
    ORSYS Tunes v1.0 started sucessfully !
    ******************** DEBUG ********************
    ***********************************************


## 3. Ajout de la date au démarrage
- Dans la méthode start() et juste après avoir affiché le premier message
    - Afficher un nouveau message sur la console (info) : `ORSYS Tunes v1.0 started at Tue Jun 06 2017 17:31:09 GMT+0200 (CEST) !
` utilisant name et version définit dans le constructeur ainsi que la date en cours

Résultat :

    Initialize !
    Starting ORSYS Tunes v1.0...
    ORSYS Tunes v1.0 started at Tue Jun 06 2017 17:31:09 GMT+0200 (CEST) !
    ORSYS Tunes v1.0 started sucessfully !
    ******************** DEBUG ********************
    ***********************************************
    
    
## 4. Initialisation de la liste des musiques
- Dans le constructeur, déclarer et initialiser un attribut "songs" de type array avec 4 musiques
  - Chaque musique est un objet contenant un attribut title et artist
- Dans la méthode start() et juste après de mettre la valeur true à l'attribut initialized
  - Ajouter la 5 ème musique à la liste existante "songs" en utilisant la méthode appropriée
- Exemple de liste de musiques (titre / auteur) :
  - New Year's Day / U2
  - Highway to Hell / AC/DC
  - Beat It / Michael Jackson
  - Smoke on the Water / Deep Purple
  - Light My Fire / The Doors

Résultat :

    Initialize !
    Starting ORSYS Tunes v1.0...
    ORSYS Tunes v1.0 started sucessfully !
    ******************** DEBUG ********************
    Songs (5) :
    - New Year's Day / U2
    - Highway to Hell / AC/DC
    - Beat It / Michael Jackson
    - Smoke on the Water / Deep Purple
    - Light My Fire / The Doors
    ***********************************************