import React from 'react'


export const Donate = () => {
    // <!-- donate section 1 -->
    return(
    <section className="title-howeare" id="fmDnt">
        <h2 className="section-title mb-2 h1 animateme">Contribuer</h2>
        <p className="text-center text-muted h5">Donnez même un peu pour une société consciente</p>

        {/* <!-- donate section 2 --> */}
        <div className="donate-section"></div>
        <div className="space-medium">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12" id="formleft-part">
                        <div className="feature-description">
                            <h2>Nous sommes prêts à vous écouter et à toutes vos suggestions et à répondre à toutes vos questions dans les plus brefs délais!</h2>
                            <hr />
                            {/* <!-- feature-left --> */}
                            <div className="feature-left">
                                <div className="feature-icon"><i className="fa fa-money"></i></div>
                                <div className="feature-content">
                                    <p>Nous déclarons que nous sommes une organisation à but non lucratif</p>
                                </div>
                            </div>
                            {/* <!-- /.feature-left -->
                            <!-- feature-left --> */}
                            <div className="feature-left">
                                <div className="feature-icon"><i className="fa fa-graduation-cap"></i></div>
                                <div className="feature-content">
                                    <p>Toutes vos contributions au service des étudiants</p>
                                </div>
                            </div>
                            {/* <!-- /.feature-left -->
                            <!-- feature-left --> */}
                            <div className="feature-left">
                                <div className="feature-icon"><i className="fa fa-question"></i></div>
                                <div className="feature-content">
                                    <p>Pour poser vos questions s'il vous plaît contactez-nous</p>
                                </div>
                            </div>
                            {/* <!-- /.feature-left --> */}
                            <hr />
                            <p>Note: vous pouvez écrire ce que vous voulez décrire ici.</p>
                        </div>
                    </div>
                    {/* <!-- /.feature-sections --> */}
                    <div className="offset-xl-1 col-xl-6 offset-lg-1 col-lg-10 offset-md-1 col-md-10 col-sm-12 col-12 mt30">
                        <form>
                            {/* <!-- service-form --> */}
                            <div className="service-form">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb10 ">
                                        <h3>Entrez vos informations ici (ne seront pas utilisées dans le commercial)</h3>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                        <div className="form-group service-form-group">
                                            <label className="control-label sr-only" htmlFor="name"></label>
                                            <input id="name" type="text" placeholder="Prénom" className="form-control" required />
                                            <div className="form-icon"><i className="fa fa-user"></i></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  ">
                                        <div className="form-group service-form-group">
                                            <label className="control-label sr-only" htmlFor="name"></label>
                                            <input id="name" type="text" placeholder="Nom" className="form-control" required />
                                            <div className="form-icon"><i className="fa fa-user"></i></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                        <div className="form-group service-form-group">
                                            <label className="control-label sr-only" htmlFor="email"></label>
                                            <input id="email" type="email" placeholder="Email" className="form-control" required />
                                            <div className="form-icon"><i className="fa fa-envelope"></i></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                        <div className="form-group service-form-group">
                                            <label className="control-label sr-only" htmlFor="phone"></label>
                                            <input id="phone" type="text" placeholder="Téléphone" className="form-control" required />
                                            <div className="form-icon"><i className="fa fa-phone"></i></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                        <div className="form-group service-form-group">
                                            <label className="control-label sr-only" htmlFor="website"></label>
                                            <input id="website" type="text" placeholder="Siteweb URL" className="form-control" required />
                                            <div className="form-icon"><i className="fa fa-link"></i></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <label className="control-label sr-only" htmlFor="select"></label>
                                            <div className="select">
                                                <select id="select" name="select" className="form-control">
                                                    <option value="">Budget</option>
                                                    <option value="">1000 MAD</option>
                                                    <option value="">5000 MAD</option>
                                                    <option value="">10000 MAD</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <label className="control-label sr-only" htmlFor="textarea"></label>
                                            <textarea className="form-control" id="textarea" name="textarea" rows="3" placeholder="Messages"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                        <button type="submit" name="singlebutton" className="btn btn-default btn-block mb10">envoyer le message</button>
                                        <p><small>Nous promettons que nous ne pourrons JAMAIS vous SPAMER avec des emails indésirables.</small></p>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* <!-- /.service-form --> */}
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- donate section 2 --> */}
    </section>
    // {/* <!-- /donate section 1 --> */ }
);
    
}