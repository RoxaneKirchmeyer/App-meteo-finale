
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

function afficherContenu(data, type) {
    if (type === 'paris') {
        infoMeteo.textContent = (`Bonjour à tous, bienvenue pour votre bulletin météo. Aujourd'hui à ${data[1].nom}, nous observons un ciel ${data[1].conditionsMeteo} avec une température actuelle de  ${data[1].temperature} degrés Celsius. L'humidité est de ${data[1].humidite} % et nous prévoyons des précipitations de l'ordre de ${data[1].precipitations} mm. L'indice UV sera de ${data[1].indiceUV}`)
    }
    else if (type === 'lille') {
        infoMeteo.textContent = (`Bonjour à tous, bienvenue pour votre bulletin météo. Aujourd'hui à ${data[10].nom}, nous observons un ciel ${data[10].conditionsMeteo} avec une température actuelle de  ${data[10].temperature} degrés Celsius. L'humidité est de ${data[10].humidite} % et nous prévoyons des précipitations de l'ordre de ${data[10].precipitations} mm. L'indice UV sera de ${data[10].indiceUV}`)
    }
    else if (type === 'bordeaux') {
        infoMeteo.textContent = (`Bonjour à tous, bienvenue pour votre bulletin météo. Aujourd'hui à ${data[9].nom}, nous observons un ciel ${data[9].conditionsMeteo} avec une température actuelle de  ${data[9].temperature} degrés Celsius. L'humidité est de ${data[9].humidite} % et nous prévoyons des précipitations de l'ordre de ${data[9].precipitations} mm. L'indice UV sera de ${data[9].indiceUV}`)
    }
    else if (type === 'strasbourg') {
        infoMeteo.textContent = (`Bonjour à tous, bienvenue pour votre bulletin météo. Aujourd'hui à ${data[8].nom}, nous observons un ciel ${data[8].conditionsMeteo} avec une température actuelle de  ${data[8].temperature} degrés Celsius. L'humidité est de ${data[8].humidite} % et nous prévoyons des précipitations de l'ordre de ${data[8].precipitations} mm. L'indice UV sera de ${data[8].indiceUV}`)
    }
    else if (type === 'montpellier') {
        infoMeteo.textContent = (`Bonjour à tous, bienvenue pour votre bulletin météo. Aujourd'hui à ${data[7].nom}, nous observons un ciel ${data[7].conditionsMeteo} avec une température actuelle de  ${data[7].temperature} degrés Celsius. L'humidité est de ${data[7].humidite} % et nous prévoyons des précipitations de l'ordre de ${data[7].precipitations} mm. L'indice UV sera de ${data[7].indiceUV}`)
    }
    else if (type === 'nantes') {
        infoMeteo.textContent = (`Bonjour à tous, bienvenue pour votre bulletin météo. Aujourd'hui à ${data[6].nom}, nous observons un ciel ${data[6].conditionsMeteo} avec une température actuelle de  ${data[6].temperature} degrés Celsius. L'humidité est de ${data[6].humidite} % et nous prévoyons des précipitations de l'ordre de ${data[6].precipitations} mm. L'indice UV sera de ${data[6].indiceUV}`)
    }
    else if (type === 'nice') {
        infoMeteo.textContent = (`Bonjour à tous, bienvenue pour votre bulletin météo. Aujourd'hui à ${data[5].nom}, nous observons un ciel ${data[5].conditionsMeteo} avec une température actuelle de  ${data[5].temperature} degrés Celsius. L'humidité est de ${data[5].humidite} % et nous prévoyons des précipitations de l'ordre de ${data[5].precipitations} mm. L'indice UV sera de ${data[5].indiceUV}`)
    }
    else if (type === 'toulouse') {
        infoMeteo.textContent = (`Bonjour à tous, bienvenue pour votre bulletin météo. Aujourd'hui à ${data[4].nom}, nous observons un ciel ${data[4].conditionsMeteo} avec une température actuelle de  ${data[4].temperature} degrés Celsius. L'humidité est de ${data[4].humidite} % et nous prévoyons des précipitations de l'ordre de ${data[4].precipitations} mm. L'indice UV sera de ${data[4].indiceUV}`)
    }
    else if (type === 'lyon') {
        infoMeteo.textContent = (`Bonjour à tous, bienvenue pour votre bulletin météo. Aujourd'hui à ${data[3].nom}, nous observons un ciel ${data[3].conditionsMeteo} avec une température actuelle de  ${data[3].temperature} degrés Celsius. L'humidité est de ${data[3].humidite} % et nous prévoyons des précipitations de l'ordre de ${data[3].precipitations} mm. L'indice UV sera de ${data[3].indiceUV}`)
    }
    else if (type === 'marseille') {
        infoMeteo.textContent = (`Bonjour à tous, bienvenue pour votre bulletin météo. Aujourd'hui à ${data[2].nom}, nous observons un ciel ${data[2].conditionsMeteo} avec une température actuelle de  ${data[2].temperature} degrés Celsius. L'humidité est de ${data[2].humidite} % et nous prévoyons des précipitations de l'ordre de ${data[2].precipitations} mm. L'indice UV sera de ${data[2].indiceUV}`)
    }
}


// Pour chaque buttons, au clic, affiche la météo
buttonsVilles.forEach(ville => {
    ville.addEventListener('click', () => {
        fetch('http://57.129.5.9:3000/villes/')
            .then(response => response.json())
            .then(data => {
                const type = ville.id
                afficherContenu(data, type)
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