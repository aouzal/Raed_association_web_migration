import React,{ useState, useEffect } from 'react'

export const Slider = () => {

 const [show,setshow]=useState(false);
  // <!-- start Slider component -->
  return (
    <div id="mySlider" className="slider-pro">
      <div className="sp-slides">
        <div className="sp-slide">
          <img className="sp-image" src="Locale/Theme/img/blank.gif"
            data-src="Locale/Theme/img/cRaed.jpg"
            data-retina="img/image1_large.jpg" />
          <div className="sp-caption">Les moments de la construction et de consolidation des lois d'Association Raed.</div>
         
        </div>

        <div className="sp-slide">
          <img className="sp-image" src="Locale/Theme/img/blank.gif"
            data-src="Locale/Theme/img/photo2Raed.jpg"
            data-retina="img/image2_large.jpg" />

          <div className="sp-caption">Une photo de groupe a été prise pour les membres de l'Association Raed dans la salle pluridisciplinaire d'Aoulouz</div>
        </div>

        <div className="sp-slide">
          <img className="sp-image" src="Locale/Theme/img/blank.gif"
            data-src="Locale/Theme/img/photo3Raed.jpg"
            data-retina="img/image3_large.jpg" />

          <div className="sp-caption">Une photo d'une affiche montrant les participants à l'assemblée générale.</div>
        </div>


        <div className="sp-slide">
          <img className="sp-image" src="Locale/Theme/img/blank.gif"
            data-src="Locale/Theme/img/photo4Raed.png"
            data-retina="img/image3_large.jpg" />

          <div className="sp-caption">
            Une photo de groupe des membres de l'association ainsi que les participants.
          </div>
        </div>

        <div className="sp-slide">
          <img className="sp-image" src="Locale/Theme/img/blank.gif"
            data-src="Locale/Theme/img/photo5Raed.jpg"
            data-retina="img/image4_large.jpg" />

          <div className="sp-caption">Atelier Arduino en Forum organisé l'année dernière dans lycee qualifiant aoulouz.</div>
        </div>

        <div className="sp-slide">
          <img className="sp-image" src="Locale/Theme/img/blank.gif"
            data-src="Locale/Theme/img/photo6Raed.jpg"
            data-retina="img/image5_large.jpg" />

          <div className="sp-caption">Département de littérature et des langues en Forum organisé l'année dernière...</div>
        
          {/* {show}&&<div className="sp-caption">Département de littérature et des langues en Forum organisé l'année dernière... </div> */}
        
        </div>

        <div className="sp-slide">
          <img className="sp-image" src="Locale/Theme/img/blank.gif"
            data-src="Locale/Theme/img/photo7rd.jpg"
            data-retina="img/image6_large.jpg" />

          <div className="sp-caption">Département des sciences humaines, Forum 2017 à Aoulouz.</div>
        </div>

      </div>
      {/* <!-- tumbs --> */}
      <div className="sp-thumbnails" id="tumb1">
        <div className="sp-thumbnail">
          <div className="sp-thumbnail-image-container">
            <img className="sp-thumbnail-image" src="Locale/Theme/img/tumbs/cRaed.jpg" />
          </div>
          <div className="sp-thumbnail-text">
            <div className="sp-thumbnail-title">LA CONSTRUCTION</div>
            <div className="sp-thumbnail-description">Construction de l'association Raed</div>
          </div>
        </div>

        <div className="sp-thumbnail" id="tumb2">
          <div className="sp-thumbnail-image-container">
            <img className="sp-thumbnail-image" src="Locale/Theme/img/tumbs/photo2Raed.jpg" />
          </div>
          <div className="sp-thumbnail-text">
            <div className="sp-thumbnail-title">LES MEMBRES</div>
            <div className="sp-thumbnail-description">Une photo collective des membres</div>
          </div>
        </div>

        <div className="sp-thumbnail" id="tumb3">
          <div className="sp-thumbnail-image-container">
            <img className="sp-thumbnail-image" src="Locale/Theme/img/tumbs/photo3Raed.jpg" />
          </div>
          <div className="sp-thumbnail-text">
            <div className="sp-thumbnail-title">les participants</div>
            <div className="sp-thumbnail-description">Une photo des participants</div>
          </div>
        </div>

        <div className="sp-thumbnail" id="tumb4">
          <div className="sp-thumbnail-image-container">
            <img className="sp-thumbnail-image" src="Locale/Theme/img/tumbs/photo4Raed.png" />
          </div>
          <div className="sp-thumbnail-text">
            <div className="sp-thumbnail-title">PHOTO DE GROUPE</div>
            <div className="sp-thumbnail-description">Une photo collective des participants</div>
          </div>
        </div>

        <div className="sp-thumbnail" id="tumb5">
          <div className="sp-thumbnail-image-container">
            <img className="sp-thumbnail-image" src="Locale/Theme/img/tumbs/photo5Raed.jpg" />
          </div>
          <div className="sp-thumbnail-text">
            <div className="sp-thumbnail-title">FORUM 2017</div>
            <div className="sp-thumbnail-description">Photo d'archive 2017 a Lycee Qualifiant Aoulouz </div>
          </div>
        </div>

        <div className="sp-thumbnail" id="tumb6">
          <div className="sp-thumbnail-image-container">
            <img className="sp-thumbnail-image" src="Locale/Theme/img/tumbs/photo6Raed.jpg" />
          </div>
          <div className="sp-thumbnail-text">
            <div className="sp-thumbnail-title">FORUM 2017</div>
            <div className="sp-thumbnail-description">Département de littérature et des langues</div>
          </div>
        </div>

        <div className="sp-thumbnail" id="tumb7">
          <div className="sp-thumbnail-image-container" >
            <img className="sp-thumbnail-image" src="Locale/Theme/img/tumbs/photo7rd.jpg" />
          </div>
          <div className="sp-thumbnail-text">
            <div className="sp-thumbnail-title">FORUM 2017</div>
            <div className="sp-thumbnail-description">Département des sciences humaines</div>
          </div>
        </div>
      </div>
    </div>
    //   <!-- start Slider component -->
  );
}