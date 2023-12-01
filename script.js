
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
        infoMeteo.textContent = (`La ville de ${data[1].nom} a une température de ${data[1].temperature} degré`)
    }
    else if (type === 'lille') {
        infoMeteo.textContent = (`La ville de ${data[10].nom} a une température de ${data[10].temperature} degré`)
    }
    else if (type === 'bordeaux') {
        infoMeteo.textContent = (`La ville de ${data[9].nom} a une température de ${data[9].temperature} degré`)
    }
    else if (type === 'strasbourg') {
        infoMeteo.textContent = (`La ville de ${data[8].nom} a une température de ${data[8].temperature} degré`)
    }
    else if (type === 'montpellier') {
        infoMeteo.textContent = (`La ville de ${data[7].nom} a une température de ${data[7].temperature} degré`)
    }
    else if (type === 'nantes') {
        infoMeteo.textContent = (`La ville de ${data[6].nom} a une température de ${data[6].temperature} degré`)
    }
    else if (type === 'nice') {
        infoMeteo.textContent = (`La ville de ${data[5].nom} a une température de ${data[5].temperature} degré`)
    }
    else if (type === 'toulouse') {
        infoMeteo.textContent = (`La ville de ${data[4].nom} a une température de ${data[4].temperature} degré`)
    }
    else if (type === 'lyon') {
        infoMeteo.textContent = (`La ville de ${data[3].nom} a une température de ${data[3].temperature} degré`)
    }
    else if (type === 'marseille') {
        infoMeteo.textContent = (`La ville de ${data[2].nom} a une température de ${data[2].temperature} degré`)
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


