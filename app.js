//
//
// fonction pour le hover des catégorie
//
//

function hover_a_in() {
  let a = document.getElementsByClassName("1");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}

function hover_a_out() {
  let a = document.getElementsByClassName("1");

  for (valeur of a) {
    valeur.style.display = "none";
  }
}

function hover_b_in() {
  let a = document.getElementsByClassName("2");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}

function hover_b_out() {
  let a = document.getElementsByClassName("2");

  for (valeur of a) {
    valeur.style.display = "none";
  }
}

function hover_c_in() {
  let a = document.getElementsByClassName("3");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}

function hover_c_out() {
  let a = document.getElementsByClassName("3");

  for (valeur of a) {
    valeur.style.display = "none";
  }
}

function hover_d_in() {
  let a = document.getElementsByClassName("4");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}

function hover_d_out() {
  let a = document.getElementsByClassName("4");

  for (valeur of a) {
    valeur.style.display = "none";
  }
}

function hover_e_in() {
  let a = document.getElementsByClassName("5");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}

function hover_e_out() {
  let a = document.getElementsByClassName("5");

  for (valeur of a) {
    valeur.style.display = "none";
  }
}

function hover_f_in() {
  let a = document.getElementsByClassName("6");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}

function hover_f_out() {
  let a = document.getElementsByClassName("6");

  for (valeur of a) {
    valeur.style.display = "none";
  }
}

function hover_g_in() {
  let a = document.getElementsByClassName("7");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}

function hover_g_out() {
  let a = document.getElementsByClassName("7");
  for (valeur of a) {
    valeur.style.display = "none";
  }
}
//
//
// Animation à l'arrivée sur "catégorie"
//
//
//
const sliding = document.querySelector(".categorie_select_maison");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1.2
  ) {
    sliding.classList.add("active");
  }
});

const sliding1 = document.querySelector(".videscroll1");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding1.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1.15
  ) {
    sliding1.classList.add("active");
  }
});

const sliding2 = document.querySelector(".categorie_select_piscine");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding2.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1.1
  ) {
    sliding2.classList.add("active");
  }
});

const sliding3 = document.querySelector(".categorie_select_200m2");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding3.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    sliding3.classList.add("active");
  }
});

const sliding4 = document.querySelector(".categorie_select_insolite");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding4.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    sliding4.classList.add("active");
  }
});

const sliding5 = document.querySelector(".videscroll2");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding5.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    sliding5.classList.add("active");
  }
});

const sliding6 = document.querySelector(".categorie_select_contemporrain");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding6.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1.2
  ) {
    sliding6.classList.add("active");
  }
});

const sliding7 = document.querySelector(".videscroll3");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding7.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    sliding7.classList.add("active");
  }
});

const sliding8 = document.querySelector(".categorie_select_pleinpied");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding8.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1.1
  ) {
    sliding8.classList.add("active");
  }
});

const sliding9 = document.querySelector(".videscroll4");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding9.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1.2
  ) {
    sliding9.classList.add("active");
  }
});

const sliding10 = document.querySelector(".categorie_select_etage");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding10.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1.1
  ) {
    sliding10.classList.add("active");
  }
});

const slidingTitre = document.querySelector(".titre_en_tete");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = slidingTitre.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.75
  ) {
    slidingTitre.classList.add("active");
  }
});

const slidingTitreCategorie = document.querySelector(".titre_categorie");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport =
    slidingTitreCategorie.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.65
  ) {
    slidingTitreCategorie.classList.add("active");
  }
});

const slidingSecteur = document.querySelector(".titre_en_tete_secteur");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = slidingSecteur.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.75
  ) {
    slidingSecteur.classList.add("active");
  }
});

const slidingTitreSecteur = document.querySelector(".titre_secteur");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport =
    slidingTitreSecteur.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.65
  ) {
    slidingTitreSecteur.classList.add("active");
  }
});

//
//
//
//Fonction titre categorie responsive
//
//
const slidingCatResponsive = document.querySelector(
  ".titre_en_tete_categorie2"
);

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport =
    slidingCatResponsive.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.65
  ) {
    slidingCatResponsive.classList.add("active");
  }
});
const slidingTitreCatResponsive = document.querySelector(".titre_categorie2");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport =
    slidingTitreCatResponsive.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.65
  ) {
    slidingTitreCatResponsive.classList.add("active");
  }
});
//
//
//Fonction pour la partie catégorie
//
//
function tradi() {
  let a = document.getElementsByClassName("contemporrain");
  let b = document.getElementsByClassName("item");

  for (valeur of b) {
    valeur.style.display = "block";
  }

  for (valeur of a) {
    valeur.style.display = "none";
  }
}
function contemporrain() {
  let a = document.getElementsByClassName("tradi");
  let b = document.getElementsByClassName("item");

  for (valeur of b) {
    valeur.style.display = "block";
  }

  for (valeur of a) {
    valeur.style.display = "none";
  }
}
function piscine() {
  let a = document.getElementsByClassName("nopool");
  let b = document.getElementsByClassName("item");

  for (valeur of b) {
    valeur.style.display = "block";
  }
  for (valeur of a) {
    valeur.style.display = "none";
  }
}
function deuxCent() {
  let a = document.getElementsByClassName("petit");
  let b = document.getElementsByClassName("item");

  for (valeur of b) {
    valeur.style.display = "block";
  }

  for (valeur of a) {
    valeur.style.display = "none";
  }
}
function insolite() {
  let a = document.getElementsByClassName("basic");
  let b = document.getElementsByClassName("item");

  for (valeur of b) {
    valeur.style.display = "block";
  }

  for (valeur of a) {
    valeur.style.display = "none";
  }
}
function etage() {
  let a = document.getElementsByClassName("rez");
  let b = document.getElementsByClassName("item");

  for (valeur of b) {
    valeur.style.display = "block";
  }

  for (valeur of a) {
    valeur.style.display = "none";
  }
}
function rez() {
  let a = document.getElementsByClassName("etage");
  let b = document.getElementsByClassName("item");

  for (valeur of b) {
    valeur.style.display = "block";
  }

  for (valeur of a) {
    valeur.style.display = "none";
  }
}

//
//
// Fonction overlay

function overlayUn() {
  let a = document.getElementsByClassName("overlay_villa1");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayDeux() {
  let a = document.getElementsByClassName("overlay_villa2");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayTrois() {
  let a = document.getElementsByClassName("overlay_villa3");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayQuatre() {
  let a = document.getElementsByClassName("overlay_villa4");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayCinq() {
  let a = document.getElementsByClassName("overlay_villa5");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlaySix() {
  let a = document.getElementsByClassName("overlay_villa6");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlaySept() {
  let a = document.getElementsByClassName("overlay_villa7");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayHuit() {
  let a = document.getElementsByClassName("overlay_villa8");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayNeuf() {
  let a = document.getElementsByClassName("overlay_villa9");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayDix() {
  let a = document.getElementsByClassName("overlay_villa10");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayDun() {
  let a = document.getElementsByClassName("overlay_villa11");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayDdeux() {
  let a = document.getElementsByClassName("overlay_villa12");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayDtrois() {
  let a = document.getElementsByClassName("overlay_villa13");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayDquatre() {
  let a = document.getElementsByClassName("overlay_villa14");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayDcinq() {
  let a = document.getElementsByClassName("overlay_villa15");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayDsix() {
  let a = document.getElementsByClassName("overlay_villa16");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayDsept() {
  let a = document.getElementsByClassName("overlay_villa17");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayDhuit() {
  let a = document.getElementsByClassName("overlay_villa18");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayDneuf() {
  let a = document.getElementsByClassName("overlay_villa19");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayV() {
  let a = document.getElementsByClassName("overlay_villa20");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayVun() {
  let a = document.getElementsByClassName("overlay_villa21");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayVdeux() {
  let a = document.getElementsByClassName("overlay_villa22");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayVtrois() {
  let a = document.getElementsByClassName("overlay_villa23");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayVquatre() {
  let a = document.getElementsByClassName("overlay_villa24");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayVcinq() {
  let a = document.getElementsByClassName("overlay_villa25");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayVsix() {
  let a = document.getElementsByClassName("overlay_villa26");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayVsept() {
  let a = document.getElementsByClassName("overlay_villa27");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayVhuit() {
  let a = document.getElementsByClassName("overlay_villa28");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayVneuf() {
  let a = document.getElementsByClassName("overlay_villa29");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}
function overlayTrente() {
  let a = document.getElementsByClassName("overlay_villa30");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}

function overlayUnNone() {
  let a = document.getElementsByClassName("overlay");

  for (valeur of a) {
    valeur.style.display = "none";
  }
}

function flecheOverlay() {
  let a = document.getElementsByClassName("overlay lien_bouton");
  for (valeur of a) {
    valeur.style.transform = "-90deg";
  }
}

// Animation menu burger

const slidingMenu = document.querySelector(".menu_responsive");
const slidingBurger = document.querySelector(".menu_burger");
const slidingLogo = document.querySelector(".logo_menu_responsive");

function menuResponsive() {
  slidingMenu.classList.toggle("active");
  slidingBurger.classList.toggle("active");
  slidingLogo.classList.toggle("active");
}

/* anime agent Le Touquet*/
const containerJouhmy = document.querySelector(".container-jouhmy");
const triggersJouhmy = document.querySelectorAll(".trigger-jouhmy");

triggersJouhmy.forEach((trigger) =>
  trigger.addEventListener("click", testpika)
);

function testpika() {
  containerJouhmy.classList.toggle("active");
}

/* anime agent Lille */
const containerLouthen = document.querySelector(".container-louthen");
const triggersLouthen = document.querySelectorAll(".trigger-louthen");

triggersLouthen.forEach((trigger) =>
  trigger.addEventListener("click", testsala)
);

function testsala() {
  containerLouthen.classList.toggle("active");
}

/* anime agent Arras*/
const containerGenardiz = document.querySelector(".container-genardiz");
const triggersGenardiz = document.querySelectorAll(".trigger-genardiz");

triggersGenardiz.forEach((trigger) =>
  trigger.addEventListener("click", testmew)
);

function testmew() {
  containerGenardiz.classList.toggle("active");
}

/* Animation h2 filtres */

const slideBottom = document.querySelector('.apparition');

window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;
    const topelementToTopViewport = slideBottom.getBoundingClientRect().top;
    if(scrollTop > (scrollTop + topelementToTopViewport).toFixed() - clientHeight * 0.50) {
        slideBottom.classList.add('active')
    } 
})


const slideBottomOne = document.querySelector('.apparition1');

window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;
    const topelementToTopViewport = slideBottomOne.getBoundingClientRect().top;
    if(scrollTop > (scrollTop + topelementToTopViewport).toFixed() - clientHeight * 0.50) {
        slideBottomOne.classList.add('active')
    } 
})

const slideBottomTwo = document.querySelector('.apparition2');

window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;
    const topelementToTopViewport = slideBottomTwo.getBoundingClientRect().top;
    if(scrollTop > (scrollTop + topelementToTopViewport).toFixed() - clientHeight * 0.50) {
        slideBottomTwo.classList.add('active')
    } 
})