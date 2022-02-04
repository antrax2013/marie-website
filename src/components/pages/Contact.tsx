import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { useFormik } from 'formik';
import { useState } from 'react';
import '../../scss/elements/pages/Contact.scss';

interface ierror {
  nom: string | undefined;
  email: string | undefined;
  prenom: string | undefined;
  telephone: string | undefined;
  message: string | undefined;
  sujet: string | undefined;
}

const Contact = () => {
  const [formData, setFormData] = useState({});
  const [showMessage, setShowMessage] = useState(false);

  const formik = useFormik({
    initialValues: {
      nom: '',
      email: '',
      prenom: '',
      telephone: '',
      message: '',
      sujet: '',
    },
    validate: (data) => {
      let errors: ierror = {
        nom: undefined,
        email: undefined,
        prenom: undefined,
        telephone: undefined,
        message: undefined,
        sujet: undefined,
      };

      if (data.nom.length === 0) {
        errors.nom = 'Votre nom est obligatoire.';
      }

      if (data.prenom.length === 0) {
        errors.prenom = 'Votre prénom est obligatoire.';
      }

      if (data.message.length === 0) {
        errors.message = 'Votre message est vide.';
      }

      if (data.email.length === 0) {
        errors.email = 'Votre email est obligatoire.';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = "Votre adresse email n'est pas valide.";
      }

      if (data.telephone.length !== 0) {
        if (
          !/^(0|\+33 )[1-9]([-. ]?[0-9]{2} ){3}([-. ]?[0-9]{2})$/i.test(
            data.telephone
          )
        ) {
          errors.telephone = "Votre numéro de téléphone n'est pas valide.";
        }
      }

      return errors;
    },
    onSubmit: (data) => {
      setFormData(data);
      setShowMessage(true);

      formik.resetForm();
    },
  });

  const isFormFieldValid = (name: string) =>
    !!(eval(`formik.touched.${name}`) && eval(`formik.errors.${name}`));

  const getFormErrorMessage = (name: string) => {
    return (
      isFormFieldValid(name) && (
        <small className='p-error'>{eval(`formik.errors.${name}`)}</small>
      )
    );
  };

  return (
    <article className='contact'>
      <h1>Contact</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className='field'>
          <label htmlFor='nom'>
            Nom <span className='asterix'>*</span>
          </label>
          <InputText
            id='nom'
            name='nom'
            value={formik.values.nom}
            onChange={formik.handleChange}
            className={classNames({ 'p-invalid': isFormFieldValid('nom') })}
          />
          {getFormErrorMessage('nom')}
        </div>
        <div className='field'>
          <label htmlFor='prenom'>
            Prénom <span className='asterix'>*</span>
          </label>
          <InputText
            id='prenom'
            name='prenom'
            value={formik.values.prenom}
            onChange={formik.handleChange}
            className={classNames({
              'p-invalid': isFormFieldValid('prenom'),
            })}
          />
          {getFormErrorMessage('prenom')}
        </div>
        <div className='field'>
          <label htmlFor='telephone'>Téléphone</label>
          <InputMask
            id='telephone'
            name='telephone'
            value={formik.values.telephone}
            onChange={formik.handleChange}
            mask='99.99.99.99.99'
            placeholder='99.99.99.99.99'
          ></InputMask>
          {getFormErrorMessage('telephone')}
        </div>
        <div className='field'>
          <label htmlFor='email'>
            Email <span className='asterix'>*</span>
          </label>
          <InputText
            id='email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            className={classNames({ 'p-invalid': isFormFieldValid('email') })}
          />
          {getFormErrorMessage('email')}
        </div>
        <div className='field'>
          <label htmlFor='message'>
            Message <span className='asterix'>*</span>
          </label>
          <InputTextarea
            id='message'
            rows={5}
            cols={30}
            value={formik.values.message}
            onChange={formik.handleChange}
            className={classNames({
              'p-invalid': isFormFieldValid('message'),
            })}
          />
          {getFormErrorMessage('message')}
        </div>
        <div className='form-footer'>
          <Button type='submit' label='Envoyer' />
        </div>
      </form>
    </article>
  );
};

export default Contact;
