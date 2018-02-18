window.addEventListener('load', () => {

    let navas = document.querySelectorAll('a.navProjet');
    for (nava of navas) {
        nava.addEventListener('click', (evt) => {
            evt.preventDefault();
            rechercherProjet(evt.target);
        }, false);
    }


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

        //Gérer les images
        let parent = document.querySelector('.imgConteneur')
        let imgClone = parent.querySelector('img.gabarit');
        
        //On enlève les éléments
        let liste = parent.querySelectorAll('img:not(.gabarit)');
        for(elm of liste){
            parent.removeChild(elm);
        }
        for (image of projet.image) {
            let img = imgClone.cloneNode();
            img.src = "img/" + image;
            img.classList.remove('gabarit');
            console.log(img);
            parent.appendChild(img);
        }
        parent.querySelectorAll(':not(.gabarit)')[0].classList.remove('desactive');
    }
}, false);