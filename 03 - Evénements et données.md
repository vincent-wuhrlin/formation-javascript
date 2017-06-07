# 3. Evènement et données
Mise en place de l'UI


## 3.1. Modification du titre
- Dans la méthode `start()` de la classe Application, modifier le titre de la page html via le javascript afin qu'il
soit dynamique : `ORSYS Tunes v1.0`
 
 
## 3.2. Bouton de connexion et redirection
- Ajouter une méthode onLogin() dans la classe Application
- Dans la méthode `start()` de la classe Application, ajouter un écouteur sur le click pour le bouton "Se connecter"
  qui appelle la méthode `onLogin`
- Dans la méthode `onLogin()` de la classe Application, rediriger le navigateur vers la page de l'application `app.html`

 Résultat :
 
     Lorsque l'on clique sur se connecter, l'on est redirigié vers app.html
