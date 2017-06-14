# 3. Evènement et données
Mise en place de l'UI


## 3.1. Modification du titre

**Objectifs** : utilisation de l'objet document

- Dans la méthode `start()` de la classe Application, modifier le titre de la page html via le javascript afin qu'il
soit dynamique : `ORSYS Tunes v1.0`
 
 
## 3.2. Bouton de connexion et redirection

**Objectifs** : ajout d'un écouteur d'évènement

- Ajouter une méthode onLogin() dans la classe Application
- Dans la méthode `start()` de la classe Application, ajouter un écouteur sur le click pour le bouton "Se connecter"
  qui appelle la méthode `onLogin`
- Dans la méthode `onLogin()` de la classe Application, rediriger le navigateur vers la page de l'application `app.html`

 Résultat :
 
     Lorsque l'on clique sur se connecter, l'on est redirigié vers app.html


## 3.3. Affichage de la position du curseur

**Objectifs** : utilisation avancée d'un écouteur d'évènement et d'un sélecteur HTML

- Récupérér l'évènement du déplacement du curseur de l'élément `body` via un sélecteur
- Contraintes :
  - L'écouteur doit être déclaré dans le constructeur de la classe `Application`
  - L'évènement doit être intercepté dans une méthode de la classe `Application` 
- Afficher sa position (x, y) comme suit :
 
 Résultat :
 
    On mouse move => [194,216]
    On mouse move => [198,213]
    On mouse move => [200,212]
    On mouse move => [207,210]
