
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
    document.title = this.name + " " + this.version;

    // Ajout d'une musique dans start
    this.songs.push({title: "Light My Fire", artist: "The Doors"});

    // Bouton login (seulement sur la page index.html)
    var loginButton = document.getElementById("loginButton");
    if (loginButton != null)
    {
        loginButton.addEventListener("click", this.onLogin);
    }

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
* Méthode de connexion (login)
*/
Application.prototype.onLogin = function(event)
{
    window.location = "app.html";
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

        // Debug l'application
        application.debug();
    }
    catch(e)
    {
        console.error("Error when initializing application", e);
    }
}

initialize();
