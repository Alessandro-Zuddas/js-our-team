"use strict";



// Dichiarazione del cards container
const cardsContainer = document.querySelector(".row");

// Creare l’array di oggetti con le informazioni fornite.
const staffMembers = [

    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Carollt",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }

];

// Stampare le stesse informazioni su DOM sottoforma di stringhe
for (let i = 0; i < staffMembers.length; i++) {

    const currentMember = staffMembers[i];

    let memberCard = document.createElement(`div`);
    memberCard.classList.add("member-card");

    cardsContainer.append(memberCard);
    
    for(let key in currentMember){
        let cardSection = document.createElement("div");
        cardSection.classList.add("card-section");
        cardSection.innerHTML = currentMember[key];

        memberCard.append(cardSection);
    }

}

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva