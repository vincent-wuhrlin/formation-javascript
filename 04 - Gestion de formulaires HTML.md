# 4. Gestion de formulaires html
Page d’authentification de l’application + formulaire d’ajout d’un élément dans la bibliothèque


## 4.2. Vérification du formulaire de connexion
- Modifier la méthode onLogin() pour gérer les contraintes de validation de formulaires :
- L'email doit être obligatoire et en cas d'erreur, le message "Email manquant" doit s'afficher dans l'espace prévu (sous email)
- L'email doit être valide et suivre l'expression régulière suivante : `^[\w-]+@([\w-]+\.)+[\w-]+$`.
  En cas d'erreur, le message "Email invalide" doit s'afficher dans l'espace prévu (sous email)
- Le mot de passe doit être obligatoire et en cas d'erreur, le message "Mot de passe manquant" doit s'afficher dans
  l'espace prévu (sous le mot de passe)
- Le mot de passe doit être valide et suivre l'expression régulière suivante : `^.{4,8}$`.
  En cas d'erreur, le message "Mot de passe invalide" doit s'afficher dans l'espace prévu (sous le mot de passe)
- Si l'email et le mot de passe sont valides, vérifier que seul le compte `admin@test.com` / `1234` (email / mot de passe)
  pourra se connecter lorsque l'on clic sur le bouton "Se connecter".
  En cas d'erreur,  le message "Informations de connexion invalides" doit s'afficher dans l'espace prévu
  (au dessus du bouton) "Se connecter".
- Si toutes les contraintes sont valides, rediriger le navigateur vers la page de l'application `app.html` (reprendre
  le code du chapitre précédent).
 

