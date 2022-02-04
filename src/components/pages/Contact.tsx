import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { useFormik } from 'formik';
import { useState } from 'react';
import '../../scss/elements/pages/Contact.scss';
import { Email, IMail } from '../../modules/email';
import { Dropdown } from 'primereact/dropdown';

interface ierror {
  nom?: string;
  email?: string;
  prenom?: string;
  telephone?: string;
  message?: string;
  sujet?: string;
}

const Contact = () => {
  const [enableSendButton, setEnableSendButton] = useState(true);

  const sujets = [
    { label: 'Prise de rendez-vous', value: 'Prise de rendez-vous' },
    { label: 'Demande de renseignements', value: 'Demande de renseignements' },
  ];

  const formik = useFormik({
    initialValues: {
      nom: '',
      email: '',
      prenom: '',
      telephone: '',
      message: '',
      sujet: sujets[0].value,
    },
    validate: (data) => {
      let errors: ierror = {};

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

      // if (data.telephone.length !== 0) {
      //   // if (
      //   //   !/^(0|\+33 )[1-9]([-. ]?[0-9]{2} ){3}([-. ]?[0-9]{2})$/i.test(
      //   //     data.telephone
      //   //   )
      //   // ) {
      //   errors.telephone = "Votre numéro de téléphone n'est pas valide.";
      //   //}
      // }
      return errors;
    },
    onSubmit: (data) => {
      const message: IMail = {
        from_email: formik.values.email,
        to_name: formik.values.nom + ' ' + formik.values.prenom,
        message: formik.values.message,
        subject: formik.values.sujet ?? '',
        tel: formik.values.telephone,
      };

      Email.sendEmail(message)
        .then(() => {
          formik.resetForm();
          //anti flood
          setEnableSendButton(false);
          setTimeout(() => setEnableSendButton(true), 10000);
        })
        .catch((error: any) => console.error(error));
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
          <label htmlFor='sujet'>
            Sujet <span className='asterix'>*</span>
          </label>
          <Dropdown
            id='sujet'
            name='sujet'
            value={formik.values.sujet}
            onChange={formik.handleChange}
            options={sujets}
          />
          {/* {getFormErrorMessage('sujet')} */}
          <br />
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
          <Button type='submit' label='Envoyer' disabled={!enableSendButton} />
        </div>
      </form>
    </article>
  );
};

export default Contact;
