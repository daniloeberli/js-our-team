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


    // for(let key in teamList){
    //     console.log(`${key}: ${teamList[key]}`);
    // }

    for(let i = 0; i < teamList.length; i++){

        console.log(`Nome: ${teamList[i].nome}`,`Ruolo: ${teamList[i].ruolo}`,` Foto: ${teamList[i].foto}`);
        //console.log(teamList[i]);
    }