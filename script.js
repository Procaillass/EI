
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



// APPARITION SEARCH MENU MOBILE (en cours)

document.addEventListener("click", ev => {
    if (ev.target.classList.contains("hidden")) {
        let reveler = ev.target.closest(".hidden");
        reveler.classList.toggle("hidden");
    };
});



//// FORMULAIRE DE CONTACT
//// LE CSS SE TROUVE DANS ---> CONTACT.SCSS

$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
              }
      }
  
  });
  
  $('.tab a').on('click', function (e) {
    
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(600);
    
  });

  
let url = "http://cepegra.yo.fr/kazan_api/"

  const Main = function () {
      axios.get(url)
      .then(response => {
          beers = response.data
      })
      .then(Affiche)
      .catch(function() {
          alert('erreur de connexion')
      })
  }
window.addEventListener("load", Main)