
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

    // Header
    var title = document.getElementById("title");
    if (title != null)
    {
        title.textContent = this.name + " " + this.version;
    }

    // Bouton login (seulement sur la page index.html)
    var loginButton = document.getElementById("loginButton");
    if (loginButton != null)
    {
        loginButton.addEventListener("click", this.onLogin);
    }

    // Anime le pannel de connexion
    var connectionPanel = document.getElementById("connectionPanel");
    if (connectionPanel != null)
    {
        connectionPanel.style.backgroundColor = "#009688";
        setTimeout(function()
        {
            connectionPanel.classList.add("visible");
        }, 100);
        setTimeout(function()
        {
            connectionPanel.style.backgroundColor = "#607d8b";
        }, 1000);
    }

    // Recherche
    var search = document.getElementById("search");
    if (search != null)
    {
        search.addEventListener("keydown", this.onSearch);
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
        email.classList.add("error");
    }
    else if (!/^[\w-]+@([\w-]+\.)+[\w-]+$/.test(email.value))
    {
        event.preventDefault();
        emailError.textContent = "Email invalide";
        email.classList.add("error");
    }
    else
    {
        emailError.textContent = "";
        email.classList.remove("error");
    }

    // Verification du mot de passe
    var password = document.getElementById("password");
    var passwordError = document.getElementById("passwordError");
    if (password.validity.valueMissing)
    {
        event.preventDefault();
        passwordError.textContent = "Mot de passe manquant";
        password.classList.add("error");
    }
    else if (!/^.{4,8}$/.test(password.value))
    {
        event.preventDefault();
        passwordError.textContent = "Mot de passe invalide";
        password.classList.add("error");
    }
    else
    {
        passwordError.textContent = "";
        password.classList.remove("error");
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
* Affiche les musiques
*/
Application.prototype.displaySongs = function(songs)
{
    // Verifie si des musiques sont données en paramètre
    if ((songs == null) || (songs.length == 0))
    {
        return;
    }

    // Supprime les elements actuellement affichés
    var songElementsToRemove = document.querySelectorAll(".song-element");
    for (var i = 0; i < songElementsToRemove.length; i++)
    {
        songElementsToRemove[i].parentNode.removeChild(songElementsToRemove[i]);
    }

    // Iteration sur toutes les musiques données en paramètre
    for (var i = 0; i < songs.length; i++)
    {
        // Recuperation du titre et de l'artiste en tant que variables locale
        var title = songs[i].title;
        var artist = songs[i].artist;
        
        // Clone le template d'un element 
        var songTemplate = document.getElementById("songTemplate");
        var songElement = songTemplate.cloneNode(true);

        // Supprime l'id
        songElement.removeAttribute("id");

        // Ajoute une class CSS pour que l'element soit visible (le template est par défaut caché)
        songElement.classList.add("song-element");

        // Met à jour le titre et l'artiste
        songElement.firstElementChild.textContent = title;
        songElement.lastElementChild.textContent = artist;

        // Ajout de l'element
        songTemplate.parentNode.appendChild(songElement);
    }
}

/*
* Méthode de recherche normale
*/
Application.prototype.onSearch = function(event)
{
    setTimeout(function()
    {
        // Recuperation du texte a rechercher
        var search = document.getElementById("search");
        var searchText = search.value;

        // Initialize un tableau de musiques trouvées
        var songsFound = [];

        // Iteration sur toutes les musiques en memoire
        for (var i = 0; i < window.application.songs.length; i++)
        {
            // Recuperation de la musique, du titre et de l'artiste
            var song = window.application.songs[i];
            var title = song.title;
            var artist = song.artist;

            // Ajoute la musique si la recherche textuelle est une sous-châine du titre ou de l'artiste
            if (((title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0)) || (artist.toLowerCase().indexOf(searchText.toLowerCase()) >= 0))
            {
                songsFound.push(song);
            }
        }

        // Affiche les musiques trouvées
        window.application.displaySongs(songsFound);
    }, 150);
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

        // Sauvegarde l'application dans l'objet window
        window.application = application;

        // Démarre l'application
        application.start(); 

        // Debug l'application
        application.debug();

        // Affiche les musiques si on est dans l'application
        if (document.location.href.endsWith("app.html"))
        {
            application.displaySongs(application.songs);
        }
    }
    catch(e)
    {
        console.error("Error when initializing application", e);
    }
}

initialize();
