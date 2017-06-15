# 5. Interaction avec les feuilles de style en cascade
Ajout de fonctionnalités de mise en page dynamiques au sein de l’application


## 5.1. Modification de la couleur de fond des champs du formulaire 
- Dans le cas ou les champs emails et mot de pass sont invalide, ajouter la classe CSS `error`


## 5.2. Animation du formulaire
- Modifier le code HTML pour affecter la classe `connectionPanel` afin qu'il soit invisible au démarrage
- Modifie le fichier `app.js` afin qu'au démarrage de l'application :
 - Le formulaire tout entier dispose de la couleur de fond à `#009688`
 - Au bout de 100ms, ajouter la classe `visible`
   - Il faudra utiliser la méthode javaScript `setTimeout` pour pouvoir avoir une temporisation
 - Au bout de 1s, modifier la couleur de fond à `#607d8b`
 