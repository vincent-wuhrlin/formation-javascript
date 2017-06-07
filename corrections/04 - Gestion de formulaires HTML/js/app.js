
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
    // Verification de l'email
    var email = document.getElementById("email");
    var emailError = document.getElementById("emailError");
    if (email.validity.valueMissing)
    {
        event.preventDefault();
        emailError.textContent = "Email manquant";
    }
    else if (!/^[\w-]+@([\w-]+\.)+[\w-]+$/.test(email.value))
    {
        event.preventDefault();
        emailError.textContent = "Email invalide";
    }
    else
    {
        emailError.textContent = "";
    }

    // Verification du mot de passe
    var password = document.getElementById("password");
    var passwordError = document.getElementById("passwordError");
    if (password.validity.valueMissing)
    {
        event.preventDefault();
        passwordError.textContent = "Mot de passe manquant";
    }
    else if (!/^.{4,8}$/.test(password.value))
    {
        event.preventDefault();
        passwordError.textContent = "Mot de passe invalide";
    }
    else
    {
        passwordError.textContent = "";
    }

    // Si aucune erreur de validation
    if ((passwordError.textContent == "") && (emailError.textContent == ""))
    {
        // Verification du compte et redirection
        var credentialsError = document.getElementById("credentialsError");
        if ((email.value == "admin@test.com") && (password.value == "1234"))
        {
            window.location = "app.html";
        }

        // Erreur
        else
        {
            credentialsError.textContent = "Informations de connexion invalides";
            event.preventDefault();  
        }
    }
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
