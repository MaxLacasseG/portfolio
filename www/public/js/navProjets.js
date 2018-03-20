"use strict"
/** 
 * Script servant à l'affichage des images de projets et à la navigation de celles-ci
*/
window.addEventListener('load', () => {
    //===========================================================
    //GESTION DE LA NAVIGATION
    let navas = document.querySelectorAll('a.navProjet');
    let ul = document.querySelector('.listeProjets nav ul');
    for (let nava of navas) {
        nava.addEventListener('click', (evt) => {
            evt.preventDefault();
            enleverLienCourant();
            evt.target.parentNode.classList.add('courant');
            rechercherProjet(evt.target);
        }, false);
    }

    //On enleve tous les liens
    const enleverLienCourant= ()=>{
        ul.querySelector(".courant").classList.remove("courant");
    }
    //On affiche un projet par défaut
    rechercherProjet(navas[0]);
    navas[0].parentNode.classList.add('courant');

    //===========================================================
    //AFFICHAGE DES INFOS DU PROJET LORSQUE SÉLECTIONNÉ VIA AJAX
    //RÉCUPÉRATION DES INFOS
    function rechercherProjet(lien) {
        let url = "/recuperer/" + lien.dataset.id;
        console.log(url);
        var ajax = new XMLHttpRequest();

        ajax.open("GET", url, true);
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                affecterResultat(JSON.parse(ajax.responseText));
            }
        };
        ajax.send();
    }
    //AFFICHAGE DES INFOS
    function affecterResultat(projet) {
        console.log(projet);
        document.querySelector(".desc h3.titre").innerText = projet.titre;
        document.querySelector(".desc p.descTxt").innerText = projet.description;
        document.querySelector("aside .etiquettes").innerText = projet.tags;
        document.querySelector("aside .aime").innerText = projet.like;
        document.querySelector("aside .temps").innerText = projet.temps + " hres";
        console.log(projet.lien);
        if(projet.lien!= ""){
            document.querySelector("aside .lienConteneur").style.display = "block";
            document.querySelector("aside .lien a").href = projet.lien;
        }else{
            document.querySelector("aside .lienConteneur").style.display = "none";
        }
        

        //Gérer les images
        let parent = document.querySelector('.imgConteneur')
        let imgClone = parent.querySelector('div img.gabarit');
        let listeImg = parent.querySelectorAll('img:not(.gabarit)');

        //On enlève les éléments
        for(let img of listeImg){
            parent.removeChild(img);
        }

        //NAVIGATION DES IMAGES
        let pointsParent = document.querySelector('nav.imgGroupe ul');
        let pointClone = pointsParent.querySelector('li.gabarit');
        let listePoints = pointsParent.querySelectorAll('li:not(.gabarit)');

         //On enlève les points
        for(let elm of listePoints){
            pointsParent.removeChild(elm);
        }

        let timer;
        //On ajoute les images
        let nbImages = 0;
        for (let image of projet.image) {
            let img = imgClone.cloneNode(true);
            img.src = "img/" + image;
            img.dataset.no = nbImages;
            img.classList.remove('gabarit');
            parent.appendChild(img);

            //On ajoute les points
            let point = pointClone.cloneNode();
            point.classList.add("point");
            point.dataset.no = nbImages;
            point.classList.remove('gabarit');
            point.classList.remove('desactive');
            pointsParent.appendChild(point);
            
            point.addEventListener('click', (evt)=>{
                afficherImage(evt.target.dataset.no);
                enleverPoints();
                evt.target.classList.add("courant");
                carrousel(evt.target.dataset.no);
            }, false);

            nbImages++;
        }
        
        const  afficherImage = (no)=>{
            parent.querySelector('img:not(.desactive)').classList.add('desactive');
            parent.querySelector('img[data-no = "'+ no +'"]').classList.remove('desactive');
            
        };

        const  afficherPoint = (no)=>{
            document.querySelector('li.point:not(.desactive)').classList.add('desactive');
            document.querySelector('li.point[data-no = "'+ no +'"]').classList.remove('desactive');
        };


        const enleverPoints = ()=>{
            let points = document.querySelectorAll('nav.imgGroupe .point');
            console.log(points)
            for(let point of points){
                point.classList.remove('courant');
            }
        };

        const carrousel = (no)=>{
            console.log("carrousel démarré")
            let parent = document.querySelector('.imgConteneur')
            let listeImg = parent.querySelectorAll('img:not(.gabarit)');
            window.clearInterval(timer);
            timer = window.setInterval(function(){
                if(no > listeImg.length){
                    no = 0;
                }else{
                    no++;
                };
                afficherImage(no);
                enleverPoints();
                afficherPoint(no);
            },4000,listeImg, no)
        }
        let imgCourante =  parent.querySelectorAll(':not(.gabarit)')[0];
        imgCourante.classList.remove('desactive');
        pointsParent.querySelector("[data-no ='"+imgCourante.dataset.no +"']").classList.add('courant');
    }
}, false);