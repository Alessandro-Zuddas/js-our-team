"use strict";

// Dichiarazione del cards container
const cardsContainer = document.querySelector(".row");

let counter = 0;

// Creare l’array di oggetti con le informazioni fornite.
const staffMembers = [

    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "../img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Carollt",
        role: "Chief Editor",
        image: "../img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "../img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "../img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "../img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "../img/barbara-ramos-graphic-designer.jpg"
    }

];

// Stampare le stesse informazioni su DOM sottoforma di stringhe
for (let i = 0; i < staffMembers.length; i++) {

    const currentMember = staffMembers[i];

    let memberCard = document.createElement(`div`);
    memberCard.classList.add("member-card");

    cardsContainer.append(memberCard);
    
    for(let key in currentMember){
        
        if(key !== "image"){
            let cardSection = document.createElement("div");
            cardSection.classList.add("card-section");
            cardSection.innerHTML = currentMember[key];
    
            memberCard.append(cardSection);
        }else{
            let cardSection = document.createElement("img");
            cardSection.classList.add("card-img");
            cardSection.src = currentMember[key];
    
            memberCard.append(cardSection);
        }

    }

}