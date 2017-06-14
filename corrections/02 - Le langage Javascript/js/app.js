
/*
 * Classe et constructeur
 */
var Application = function()
{
    this.name = "ORSYS Tunes";
    this.version = "v1.0";
    this.initialized = false;
    this.songs =
    [
      {title: "New Year's Day", artist: "U2"},
      {title: "Highway to Hell", artist: "AC/DC"},
      {title: "Beat It", artist: "Michael Jackson"},
      {title: "Smoke on the Water", artist: "Deep Purple"},
    ];
}

/*
 * Méthode de lancement
 */
Application.prototype.start = function()
{
    // Lancement
    console.info("Starting " + this.name + " " + this.version + "...");
    console.debug(this.name + " " + this.version + " started at " + new Date() + " !");

    // Ajout d'une musique dans start
    this.songs.push({title: "Light My Fire", artist: "The Doors"});

    // Application initialisée
    this.initialized = true;
    if (this.initialized)
    {
        console.debug(this.name + " " + this.version + " started sucessfully !");
    }
}

/*
 * Méthode de debug (affiche les musiques en mémoire)
 */
Application.prototype.debug = function()
{
    console.debug("******************** DEBUG ********************");
    console.debug("Songs (" + this.songs.length + ") :");
    for (var i = 0; i < this.songs.length; i++)
    {
        console.debug("- " + this.songs[i].title + " / " + this.songs[i].artist); 
    }
    console.debug("***********************************************");
}

/*
 * Méthode globale d'initialisation
 */
function initialize()
{   
    try
    {
        console.debug("Initialize !");

        // Créer une application
        var application = new Application();

        // Démarre l'application
        application.start(); 



        application.debugOld = application.debug;
        application.debug = function()
        {
            console.info("MA FONCTION DE DEBUG");
            this.debugOld();
        };



        // Debug l'application
        application.debug();
    }
    catch(e)
    {
        console.error("Error when initializing application", e);
    }
}

/*
* Exercice 2.6.1
*/
function createArray()
{  
    // Initialisation de l'array
    var array = [];

    // Ajout de 10000 éléments
    for (var i = 1; i <= 10000; i++)
    {
        var index = "00000";
        var position = new Number(i).toString();
        var element = "Element " + index.substring(0, (index.length - position.length)) + position;
        array.push(element);
    }

    // Suppression des éléments
    array.splice(2, 9996);

    // Transformation de l'array en string
    var result = array.join(", ");

    // Affichage du résultat
    console.info("******************** Exerice 2.6.1 ********************");
    console.info(result);
    console.info("*******************************************************");
}

/*
 * Exercice 2.6.2
 */

// Déclaration des mois (global)
var MONTHS = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

// On ajoute une méthode "getCurrentMonthInFrench" dans la classe native "Date" de Javascript
// et on fait pointer vers notre méthode globale "getCurrentMonthInFrench"
Date.prototype.getCurrentMonthInFrench = getCurrentMonthInFrench;
function getCurrentMonthInFrench()
{
    var month = this.getMonth();
    return MONTHS[month];
}

// Méthode de test
function customizeDate()
{
    var date = new Date();
    console.info("******************** Exerice 2.6.2 ********************");
    console.info(date.getCurrentMonthInFrench());
    console.info("*******************************************************");
}

// Créer une application et l'initialize
initialize();

// Exercice 2.6.1
createArray();

// Exercice 2.6.2
customizeDate();

