$(document).ready(function() {
  // CALCUL DE L AGE
const birthDate = new Date('1988-04-17');
const currentDate = new Date();

const timeDifferenceInMilliseconds = currentDate - birthDate;
const ageInMilliseconds = new Date(timeDifferenceInMilliseconds);

const ageInYears = ageInMilliseconds.getUTCFullYear() - 1970;

// Insérer l'âge dans le paragraphe correspondant
const ageElement = document.getElementById('age');
ageElement.textContent = ageInYears + ' ans';
    // Fonction pour vérifier si la souris est proche du bord inférieur de la page
  function isMouseNearBottom(event) {
    const threshold = 200; // Ajustez cette valeur pour contrôler la zone autour du bord inférieur
    return event.clientY > window.innerHeight - threshold;
  }

  $(document).mousemove(function(event) {
    // Récupérez les coordonnées de la souris
    var mouseX = event.pageX;
    var mouseY = event.pageY;

    // Limitez la position verticale de l'effet d'éclairage lorsque la souris est proche du bord inférieur
    if (!isMouseNearBottom(event)) {
      $('.radial-light').css({
        top: mouseY + 'px',
        left: mouseX + 'px'
      });
    }
  });

    // Lorsque le lien "A propos" est cliqué
    $('a[href="#apropos"]').on('click', function(event) {
        event.preventDefault(); // Empêcher le comportement par défaut du lien
        $('html, body').animate({ scrollTop: 0 }, 'slow'); // Défiler vers le haut
    });

    // Lorsque le lien "Expériences" est cliqué
    $('a[href="#experiences"]').on('click', function(event) {
        event.preventDefault(); // Empêcher le comportement par défaut du lien
        $('html, body').animate({ scrollTop: $('#experiences').offset().top }, 'slow'); // Défiler vers "Expériences"
    });

    // Lorsque le lien "Projets" est cliqué
    $('a[href="#projets"]').on('click', function(event) {
        event.preventDefault(); // Empêcher le comportement par défaut du lien
        $('html, body').animate({ scrollTop: $('#projets').offset().top }, 'slow'); // Défiler vers "Projets"
    });
  
    // Fonction pour vérifier si un élément est suffisamment proche du haut de l'écran pour activer la classe "active"
    function isElementInViewport(element) {
      const rect = element.getBoundingClientRect();
      const threshold = window.innerHeight * 0.4; // Ajustez cette valeur pour contrôler le déclenchement
  
      return rect.top <= threshold;
    }
  
    function setActiveMenu() {
      const sections = ['apropos', 'experiences', 'projets'];
  
      sections.forEach(section => {
        const sectionElement = document.getElementById(section);
        const menuLink = $('a[href="#' + section + '"]');
  
        if (sectionElement && isElementInViewport(sectionElement)) {
          // Supprimer la classe "active" de tous les liens
          $('.summary a').removeClass('active');
          // Ajouter la classe "active" uniquement au lien correspondant à la section visible
          menuLink.addClass('active');
        }
      });
    }
  
    // Appeler la fonction setActiveMenu lors du chargement de la page et lors du défilement
    $(window).on('load scroll', function() {
      setActiveMenu();
    });

    // Code JavaScript pour ajouter ou supprimer une classe lors du survol
const iconLinks = document.querySelectorAll('.icon-link');

iconLinks.forEach(iconLink => {
  iconLink.addEventListener('mouseover', () => {
    const icon = iconLink.querySelector('.fa-brands');
    // Ajouter la classe souhaitée lorsque l'icône est survolée
    icon.classList.add('fa-flip');
  });

  iconLink.addEventListener('mouseout', () => {
    const icon = iconLink.querySelector('.fa-brands');
    // Supprimer la classe lorsque le survol est terminé
    icon.classList.remove('fa-flip');
  });
});
});


  