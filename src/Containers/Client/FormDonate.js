import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

const fields = ["prenom", "nom", "phone", "email", "message"];
const validate = values => {
  console.log("begin validation******")
  const errors = {}
  if (!values.nom) {
    errors.nom = 'Required'
  }
  if (!values.prenom) {
   
    errors.prenom = 'Required'
  }

  if (!values.messsage) {
    console.log("values.messsage:",values)
    errors.messsage = 'Required'
  }
  // else if (values.nom.length > 15) {
  //   errors.username = 'Must be 15 characters or less'
  // }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
    console.log(errors.email)
  }
  if (!values.phone) {
    errors.phone = 'Required'
  } else if (isNaN(Number(values.phone))) {
    errors.phone = 'la valeur saisie  doit étre un numéro'
    console.log(errors.phone)
  } else if (values.phone.lenght < 10) {
    errors.phone = 'le numéro de telephne doit contenir 10 chiffre'
  }
 

  return errors
}




const renderField = ({ input, placeholder, height, type, className, fa, id, meta: { touched, error, warning } }) => (
  <div>
    {type && (type === "text" ||type === "email") &&
      <div>
        <input {...input} style={{ backgroundColor: "#f2f2f2" }} placeholder={placeholder} type={type} className={className} id={id} height={height} />
        <div className="form-icon"><i className={"fa fa-" + fa}></i>

        </div>
      </div>}

    {type && type === "textarea" &&
      <div>
        <textarea {...input} style={{ backgroundColor: "#f2f2f2" }} placeholder={placeholder} type={type} className={className} id={id} rows="6" />


      </div>}


    <div>
      {touched && ((error && <span style={{ color: "red", fontSize: "10px" }}><i className={"fa fa-exclamation-circle"}></i>{" " + error}</span>))}
    </div>
  </div>
)

class FormDonate extends React.Component {



  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit} >
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
          <div className="form-group service-form-group">
            <label className="control-label sr-only " htmlFor="name"></label>
            <Field name="prenom" component={renderField} type="text" placeholder="Prénom" id="name" className="form-control" fa="user" />
          </div>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  ">
          <div className="form-group service-form-group">
            <label className="control-label sr-only " htmlFor="name"></label>
            <Field id="name" name="nom" component={renderField} type="text" placeholder="Nom" className="form-control" fa="user" />
          </div>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
          <div className="form-group service-form-group">
            <label className="control-label sr-only " htmlFor="email"></label>
            <Field id="email" name="email" component={renderField} type="email" placeholder="Email" className="form-control" fa="envelope" />

          </div>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
          <div className="form-group service-form-group">
            <label className="control-label sr-only " htmlFor="phone"></label>
            <Field id="phone" name="phone" component={renderField} type="text" placeholder="Téléphone" className="form-control" fa="phone" />

          </div>
        </div>

        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
          <div className="form-group service-form-group">
            <label className="control-label sr-only " style={{ backgroundColor: "#f2f2f2" }} htmlFor="message"></label>
            <Field id="message" name="message" component={renderField} type="textarea" className="form-control"  placeholder="Messages" />
          </div>
        </div>

        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
          <button disabled={submitting} name="singlebutton" onClick={handleSubmit} className="btn btn-default btn-block mb10">envoyer le message</button>
          <p><small>Nous promettons que nous ne pourrons JAMAIS vous SPAMER avec des emails indésirables.</small></p>
        </div>
      </form>
    );
  }
}




const Form = reduxForm({
  form: 'formdonate1',
  fields,
  validate,
})(FormDonate);

export default Form;
