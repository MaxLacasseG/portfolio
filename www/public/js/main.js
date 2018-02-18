window.addEventListener('load', () => {

    let navas = document.querySelectorAll('a.navProjet');
    for (nava of navas) {
        nava.addEventListener('click', (evt) => {
            evt.preventDefault();
            rechercherProjet(evt.target);
        }, false);
    }
    rechercherProjet(navas[0]);

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

    function affecterResultat(projet) {
        console.log(projet);
        document.querySelector(".desc h3.titre").innerText = projet.titre;
        document.querySelector(".desc p.descTxt").innerText = projet.description;
        document.querySelector("aside .etiquettes").innerText = projet.tags;
        document.querySelector("aside .aime").innerText = projet.like;
        document.querySelector("aside .temps").innerText = projet.temps + " hres";
        if(projet.lien!= ""){
            document.querySelector("aside .lien a").href = projet.lien;
        }else{
            document.querySelector("aside .lienConteneur").style.display = "none";
        }
        

        //Gérer les images
        let parent = document.querySelector('.imgConteneur')
        let imgClone = parent.querySelector('img.gabarit');
        let liste = parent.querySelectorAll('img:not(.gabarit)');

        //On enlève les éléments
        for(elm of liste){
            parent.removeChild(elm);
        }

       
        let pointsParent = document.querySelector('nav.imgGroupe ul');
        let pointClone = pointsParent.querySelector('li.gabarit');
        let listePoints = pointsParent.querySelectorAll('li:not(.gabarit)');

         //On enlève les points
        for(elm of listePoints){
            pointsParent.removeChild(elm);
        }

        //On ajoute les images
        let nbImages = 0;
        for (image of projet.image) {
            let img = imgClone.cloneNode();
            img.src = "img/" + image;
            img.dataset.no = nbImages;
            img.classList.remove('gabarit');
            parent.appendChild(img);

            //On ajoute les points
            let point = pointClone.cloneNode();
            point.dataset.no = nbImages;
            point.classList.remove('gabarit');
            point.classList.remove('desactive');
            pointsParent.appendChild(point);
            nbImages++;
        }
        imgCourante =  parent.querySelectorAll(':not(.gabarit)')[0];
        imgCourante.classList.remove('desactive');
        pointsParent.querySelector("[data-no ='"+imgCourante.dataset.no +"']").classList.add('courant');
    }
}, false);