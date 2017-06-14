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
- Afficher sa position (x, y)
 
 Résultat :
 
    On mouse move => [194,216]
    On mouse move => [198,213]
    On mouse move => [200,212]
    On mouse move => [207,210]



## 3.4. Detection de la position du curseur dans une zone

**Objectifs** : utilisation avancée d'un écouteur d'évènement et algorithmique

- Détecter le fait que le curseur de la souris rentre dans la zone du boutton "Se connecter"
- Contraintes :
  - Ecrire un texte "Mouse button : ENTER" lorsque le curseur entre dans la zone
  - Ecrire un texte "Mouse button : EXIT" lorsque le curseur sort dans la zone
  - Ne pas écrire plusieurs fois la même detection : l'affichage doit dans la console doit être réalisé 
    uniquement lorsque qu'un changement ENTER ou EXIT a lieu (et non a chaque déplacement du curseur)
 
 Résultat :
 
    Mouse button : ENTER
    Mouse button : EXIT
    Mouse button : ENTER
    