// Méthode optimisé

const buttonsVilles = document.querySelectorAll('button')
const divContenu = document.createElement('div')
divContenu.className = "contenu"
const infoMeteo = document.createElement('p')
divContenu.appendChild(infoMeteo)
const miss = document.querySelector(".miss")
miss.appendChild(divContenu)


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
         météo. Aujourd'hui à ${villeSelectionnee.nom.toUpperCase()}, nous 
         observons un ciel ${villeSelectionnee.conditionsMeteo.toLowerCase()} avec une 
         température actuelle de ${villeSelectionnee.temperature} degrés. 
         L'humidité est de ${villeSelectionnee.humidite} % et nous prévoyons des précipitations de l'ordre de ${villeSelectionnee.precipitations} mm. 
         L'indice UV sera de ${villeSelectionnee.indiceUV}`;
                }
            }
            )
    })

})


