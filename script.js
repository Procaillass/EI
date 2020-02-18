
document.addEventListener("click", ev => {
    if (ev.target.classList.contains("card") || ev.target.classList.contains("city") || ev.target.classList.contains("lieu")) {
        let reveler = ev.target.closest(".act");
        reveler.classList.toggle("reveal");

        if (reveler.classList.contains("reveal")){
            let centre = document.querySelector(".reveal h4")
            if (centre.classList.contains("centerCity")){
                let couleur = reveler.querySelector(".city")
                couleur.classList.add("centerCity")
            }else if (centre.classList.contains("outCity")){
                let couleur = reveler.querySelector(".city")
                couleur.classList.add("outCity")
            }
        } else if (!reveler.classList.contains("reveal")){
            let couleur = reveler.querySelector(".city")
            couleur.classList.remove("centerCity")
            couleur.classList.remove("outCity")
        }
    };
});


