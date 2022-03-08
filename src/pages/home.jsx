import './styles.scss';

const Home = () => {
  return <div>
<header class="header">
        <a href="/login" class="header__link">Mon compte</a>
        <section class="header__heroSection">
          <div class="header__grid">
          <a href="/" class="header__linkLogo"><img src={require('./assets/img/logo.png')} alt="" class="header__img header__logo"/></a>
          <img src={require("./assets/img/feux.png")} alt="" class="header__img header__img--feux"/>
          <img src={require("./assets/img/image_9.png")} alt="" class="header__img header__img--bulle"/>
          <a href="/login" class="header__link">Mon compte</a>
          <img src={require("./assets/img/roue.png")} alt="" class="header__img header__img--roue"/>
          <h1 class="header__titre">Autop 
            <span class="header__titre--retour"> L'auto école en ligne</span>
            <span class="header__titre--retour">à 
              <span class="header__titre--rose"> La Rochelle</span>
            </span></h1>    
          <img src={require("./assets/img/panneaux.png")} alt="" class="header__img header__img--panneaux"/>
          <img src={require("./assets/img/map.png")} alt="" class="header__img header__img--map"/>
          <img src={require("./assets/img/pieton.png")} alt="" class="header__img header__img--pieton"/>
          <img src={require("./assets/img/voiture.png")} alt="" class="header__img header__img--voiture"/>
          <img src={require("./assets/img/route.png")} alt="" class="header__img header__img--route"/>

          </div>
          <h1 class="header__titreApresGrid">Autop <span class="header__titreApresGrid--retour"> L'école <span class="header__titreApresGrid--rose">auto</span>mobile en ligne</span> <span class="header__titreApresGrid--retour">à La Rochelle</span></h1>
          <div class="header__bg" >
            <h2 class="header__sousTitre">Trouvez votre heure de conduite !</h2>
            <form action="" class="header__form">
            <input type="text" name="jour" id="jour" placeholder="Jour"  class="header__input"/>
                    <input type="text" name="lieu" id="lieu"  placeholder="Lieu" class="header__input"/>
                    <input type="text" name="auto" id="auto"  placeholder="Boite auto"  class="header__input"/>
                    <input type="text" name="heure" id="heure"  placeholder="Heure" class="header__input"/>
                    <input type="text" name="sceance" id="sceance" class="header__input" placeholder="Durée de la scéance"/>
                    <input type="submit" value="Recherchez"  class="header__submit"/>
            </form>
          </div>
        </section>

  </header>

  <main class="main">
    <img src={require("./assets/img/map 1.png")} alt="" class="main__img"/>
    <section class="main__presentation">
      <h2 class="main__titre">Autop , c’est quoi?</h2>
      <p class="main__explication">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a mauris quam. Integer convallis leo lacinia tincidunt fringilla. Nulla ut aliquet tellus. Phasellus nec lacinia justo. In varius eros vitae porttitor commodo. Vestibulum ullamcorper porta ligula eu pretium. In ultricies interdum neque, non pulvina</p>
      <p class="main__etape"><span class="main__etape--chiffre1">1</span>Réserve ta leçon en ligne</p>
      <p class="main__etape"><span class="main__etape--chiffre">2</span>Apprend pendant 1h avec ton professeur</p>
      <p class="main__etape"><span class="main__etape--chiffre">3</span>Le permis de conduire n'est plus très loin !</p>
    </section>
  </main>
  <div class="frise">
    <img src={require("./assets/img/roue.png")} alt="" class="frise__img frise__img--roue"/>
    <img src={require("./assets/img/route.png")} alt="" class="frise__img frise__img--route"/>
    <img src={require("./assets/img/panneaux.png")} alt="" class="frise__img frise__img--panneau"/>
    <img src={require("./assets/img/voiture.png")} alt="" class="frise__img frise__img--voiture"/>
    <img src={require("./assets/img/image_9.png")} alt="" class="frise__img frise__img--bulle"/>
    <img src={require("./assets/img/route.png")} alt="" class="frise__img frise__img--route2"/>
  </div>
  
  <section class="moniteurs">
        <h2 class="moniteurs__titre">Des moniteurs toujours au top!</h2>
        <div class="moniteurs__presentation">
            <img src={require("./assets/img/carte_1.png")} alt="" class="moniteurs__carte"/>
            <img src={require("./assets/img/carte_3.png")} alt="" class="moniteurs__carte"/>
            <img src={require("./assets/img/carte_3-1.png")} alt="" class="moniteurs__carte"/> 
        </div>
    </section>
  
    <section class="temoignage">
        <h2 class="temoignage__titre">Témoignages</h2>
        <article class="temoignage__article--jaune">
            <p class="temoignage__citation">“Très bon professeur, j’ai eu mon permis du premier coup”</p>
            <p class="temoignage__date">Marie Duboulot, 2021</p>
        </article>
        <article class="temoignage__article--vert">
            <p class="temoignage__citation">“Permis passé du premier coup, merci au moniteur, le meilleur du monde”</p>
            <p class="temoignage__date">André Caption, 2022</p>
        </article>
        <article class="temoignage__article--bleu">
            <p class="temoignage__citation">“Très bon professeur, j’ai eu mon permis du premier coup”</p>
            <p class="temoignage__date">Marie Duboulot, 2021</p>
        </article>
        <article class="temoignage__article--rouge">
            <p class="temoignage__citation">“Trop cool”</p>
            <p class="temoignage__date">Tom du Jura, 2022</p>
        </article>
    </section>

    <div class="friseBas">
        <img src={require("./assets/img/voiture.png")} alt="" class="friseBas__img"/>
        <img src={require("./assets/img/pieton.png")} alt="" class="friseBas__img"/>
        <img src={require("./assets/img/map.png")} alt="" class="friseBas__img"/>
        <img src={require("./assets/img/Frame.png")} alt="" class="friseBas__img"/>
        <img src={require("./assets/img/feux.png")} alt="" class="friseBas__img"/>
        <img src={require("./assets/img/plot.png")} alt="" class="friseBas__img"/>
        <img src={require("./assets/img/image_9.png")} alt="" class="friseBas__img"/>
        <img src={require("./assets/img/route.png")} alt="" class="friseBas__img"/>

    </div>

  </div>
  
  
}

export default Home;
