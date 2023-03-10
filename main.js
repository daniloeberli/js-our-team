"use strict";

const teamList = [
    {
        nome : 'Wayne Barnett',
        ruolo : 'Founder & CEO',
        foto : "wayne-barnett-founder-ceo.jpg",
    }, 

    {
        nome : 'Angela Caroll',
        ruolo : 'Chief Editor',
        foto : 'angela-caroll-chief-editor.jpg',
    },

    {
        nome : 'Walter Gordon',
        ruolo : 'Office Manager',
        foto : 'walter-gordon-office-manager.jpg',
    },

    {
        nome : 'Angela Lopez',
        ruolo : 'Social Media Manager',
        foto : 'angela-lopez-social-media-manager.jpg',
    },

    {
        nome : 'Scott Estrada',
        ruolo : 'Developer',
        foto : 'scott-estrada-developer.jpg',
    },

    {
        nome : 'Barbara Ramos',
        ruolo : 'Graphic Designer',
        foto : 'barbara-ramos-graphic-designer.jpg',
    }
]

const ul = document.getElementById('u-list');

//SOLUZIONE 1

// for(let i = 0; i < teamList.length; i++){
    
//     const listItem = document.createElement('li'); 
//     listItem.append(`Nome: ${teamList[i].nome}`,` Ruolo: ${teamList[i].ruolo}`,` Foto: ${teamList[i].foto}`);
//     ul.append(listItem);

//     console.log(`Nome: ${teamList[i].nome}`,` Ruolo: ${teamList[i].ruolo}`,` Foto: ${teamList[i].foto}`);
//     //console.log(teamList[i]);
// }

//SOLUZIONE 2

for (let i = 0; i < teamList.length; i++){

    const listItem = document.createElement('li');
    let currentTeamMember = teamList[i];
    console.log(currentTeamMember);
    for (let key in currentTeamMember){
        listItem.append(key + ": " + currentTeamMember[key] + ' ');
        ul.append(listItem);
        console.log(key + ": " + currentTeamMember[key])
    }
}