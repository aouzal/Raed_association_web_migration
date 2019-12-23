import React from 'react'

export const About = () => {
  // <!-- start how we do section -->
  return(
  <div  className="gray-bg">
    <section className="goals title-howeare " id="aboutUs">
      <h2 className="section-title mb-2 h1">Qui somme Nous?</h2>
      <p className="text-center text-muted btmpdg  h5">S'il vous plaît laissez-nous savoir si vous souhaitez en savoir plus sur nous</p>
    </section>
    <div>
      <section id="how-we-do" className="p-0 m-0 gray-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 how-bg-img" id="imghoweare"></div>
            <div className="col-xs-12 col-sm-12 col-md-6 how-contents" id="how-content">
              <h2 className="mb-4">Association Raed est ..</h2>
              <ul className="list-unstyled" />

              <li>Association Raed, une association avec des objectifs éducatifs, scientifiques, sociaux et culturels, à travers lequel il vise à former et guider la jeunesse, développer leurs compétences et développer leurs capacités.
                 <ul>
                  <li>Contribuer à la formation de l'étudiant</li>
                  <li>Encourager les talents</li>
                  <li>Célébrer l'excellence des étudiants</li>
                  <li>Coopérer avec les autres organisations</li>
                </ul>
              </li>
            </div>
          </div>
        </div>

      </section>
    </div>

  </div>
  );



  {/* <!-- End how we do section --> */ }
}