# 2. Le langage Javascript
Création d’une mini application de bibliothèque multimédia


## 2.1. Initialisation

**Objectifs** : charger un fichier JavaScript au sein d'une page HTML et afficher du texte sur la console. 

- Editer le fichier js/app.js
- Créer une méthode globale `initialize()` et l'appeler
- Dans le corps de la méthode, afficher un debug sur la console : `console.debug("Initialize !");`
- Ouvrir la page index.html, afficher la console developpeur et vérifier que le message s'affiche (un refresh
  de la page peut s'avérer nécessaire)
 
Résultat :

    Initialize !

    
## 2.2. Création d'une classe *Application*

**Objectifs** : instancier une classe Javascript, apppeler une méthode et manipuler des chaines de caractères

- Editer le fichier js/app.js
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


## 2.3. Ajout de la date au démarrage

**Objectifs** : instancier un objet date

- Editer le fichier js/app.js
- Dans la méthode start() de la classe Application et juste après avoir affiché le premier message
    - Afficher un nouveau message sur la console (info) : `ORSYS Tunes v1.0 started at Tue Jun 06 2017 17:31:09 GMT+0200 (CEST) !
` utilisant name et version définit dans le constructeur ainsi que la date en cours

Résultat :

    Initialize !
    Starting ORSYS Tunes v1.0...
    ORSYS Tunes v1.0 started at Tue Jun 06 2017 17:31:09 GMT+0200 (CEST) !
    ORSYS Tunes v1.0 started sucessfully !
    ******************** DEBUG ********************
    ***********************************************
    
    
## 2.4. Initialisation de la liste des musiques

**Objectifs** : manipuler un tableau

- Editer le fichier js/app.js
- Dans le constructeur de la classe Application, déclarer et initialiser un attribut "songs" de type array avec 4 musiques
  - Chaque musique est un objet contenant un attribut title et artist
- Dans la méthode `start()` de la classe Application et juste après de mettre la valeur true à l'attribut initialized
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
    
    
## 2.5. Ajout d'une gestion d'erreur try / catch

**Objectifs** : utiliser un bloc try()...catch()

- Editer le fichier js/app.js
- Entourer le code de la méthode `initialize()` d'un bloc `try() catch()` et afficher un message d'erreur
  ainsi que l'exception dans la console (error)
- Valider le code en forcant une erreur (par exemple en accédant à une propriété d'un object qui n'existe pas)


## 2.6. BONUS


### 2.6.1. Création d'un array de 10000 éléments

- Ajouter 10000 éléments texte formatéts comme cela : "Element 00001", "Element 00002", etc dans un array
- Supprimer les éléments de 2 (inclus) à 9998 (inclus)
- Afficher les élements sous la forme d'une chaine de caractère dans la console :

Résultat :

    Element 00001, Element 00002, Element 09999, Element 10000

### 2.6.2. Customisation de l'objet Date

- Ajouter une méthode "getCurrentMonthInFrench" qui renvoie le mois en cours en Français

Résultat :

    Juin

