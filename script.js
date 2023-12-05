
// display block et none sur la carte
// une seule carte de description qui se modifie en fonction de la ville choisie

// méthode simple
// btnParis = document.querySelector("#paris");
// btnLille = document.querySelector("#lille");
// btnBordeaux = document.querySelector("#bordeaux");
// btnStrasbourg = document.querySelector("#strasbourg");
// btnMontpellier = document.querySelector("#montpellier");
// btnNantes = document.querySelector("#nantes");
// btnNice = document.querySelector("#nice");
// btnToulouse = document.querySelector("#toulouse");
// btnLyon = document.querySelector("#lyon");
// btnMarseille = document.querySelector("#marseille");

// Au clic d'un button ayant l'id de la ville, un evenement au clic qui va fetch et affiche le climat de la ville

// Méthode optimisé

// faire un append child de la bulle de dialogue
const buttonsVilles = document.querySelectorAll('button')
const divContenu = document.createElement('div')
divContenu.className = "contenu"
document.body.appendChild(divContenu)
const infoMeteo = document.createElement('p')
divContenu.appendChild(infoMeteo)


// Pour chaque buttons, au clic, affiche la météo
buttonsVilles.forEach(ville => {
    ville.addEventListener('click', () => {
        fetch('meteo.json')
            .then(response => response.json())
            .then(data => {
                const type = ville.id
                console.log(type)
             

                let backgroundImageURL = ''
    const villeSelectionnee = data.find(ville => ville.nom === type);
    console.log(villeSelectionnee)
    // Vérifier si la ville sélectionnée a des conditions météorologiques pluvieuses
    if (villeSelectionnee.conditionsMeteo.includes('Pluvieux')) {
        // Définir l'image de fond pour les conditions météorologiques pluvieuses
        backgroundImageURL = 'img/pluie-opacity.png';
    } else {
        // Définir l'image de fond pour d'autres conditions météorologiques
        backgroundImageURL = 'img/pexels-skitterphoto-3768.jpg';
    }
    document.body.style.backgroundImage = `url('${backgroundImageURL}')`;
    if (villeSelectionnee) {
        // Afficher les détails météo pour la ville sélectionnée
        infoMeteo.textContent = `Bonjour à tous, bienvenue pour votre bulletin
         météo. Aujourd'hui à ${villeSelectionnee.nom}, nous 
         observons un ciel ${villeSelectionnee.conditionsMeteo} avec une 
         température actuelle de ${villeSelectionnee.temperature} degrés Celsius. 
         L'humidité est de ${villeSelectionnee.humidite} % et nous prévoyons des précipitations de l'ordre de ${villeSelectionnee.precipitations} mm. 
         L'indice UV sera de ${villeSelectionnee.indiceUV}`;
    }
            }
            )
    })

})

// selectionner All bouton {

    // buttonsVilles.forEach(villes => {

    // ajouter un evenement au bouton qui ouvre la div d'infos

        // creer une div d'infos de la ville correspondante avec un if (id button = nom du fetch)
            // dans cette divInfoMeteos mettre les infos de la ville correspondante avec le texte evelyne
            // changer les valeurs des données météos en fonction de la ville

        // si on reclique : supprime la div

//})}

