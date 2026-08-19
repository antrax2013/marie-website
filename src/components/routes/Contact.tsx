import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { useFormik } from 'formik';
import { useRef, useState } from 'react';
import '../../scss/routes/Contact.scss';
import { Email, iMail } from '../../modules/email';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';

interface iError {
	nom?: string;
	email?: string;
	prenom?: string;
	telephone?: string;
	message?: string;
	sujet?: string;
}

const Contact = () => {
	const [enableSendButton, setEnableSendButton] = useState(true);
	const toast = useRef<Toast>(null);

	const tag =
		new URLSearchParams(window.location.search).get('sujet') ??
		'prise-rendez-vous';

	const sujets = [
		{
			label: 'Prendre rendez-vous',
			value: 'Prendre rendez-vous',
			tag: 'prise-rendez-vous',
		},
		{
			label: 'Renseignements / Question générale',
			value: 'Renseignements / Question générale',
			tag: 'demande-de-renseignements',
		},
		{
			label: 'Demander un devis',
			value: 'Demander un devis',
			tag: 'demande-de-devis',
		},
		{
			label: 'Autre demande',
			value: 'Autre demande',
			tag: 'autre',
		},
	];

	const formik = useFormik({
		initialValues: {
			nom: '',
			email: '',
			prenom: '',
			telephone: '',
			message: '',
			sujet: sujets.filter((s) => s.tag === tag)[0]?.value ?? sujets[0].value,
		},
		validate: (data) => {
			const errors: iError = {};

			if (data.nom.length === 0) {
				errors.nom = 'Vos nom et prénom sont obligatoires.';
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

			return errors;
		},
		onSubmit: () => {
			const message: iMail = {
				from_email: formik.values.email,
				to_name: formik.values.nom,
				message: formik.values.message,
				subject: formik.values.sujet ?? '',
				tel: formik.values.telephone,
			};

			Email.sendEmail(message)
				.then(() => {
					formik.resetForm();
					if (toast.current) {
						toast.current.show({
							severity: 'success',
							summary: "Envoi d'email",
							detail: 'Votre email a été envoyé avec succès',
							life: 3000,
						});
					}
					//anti flood
					setEnableSendButton(false);
					setTimeout(() => setEnableSendButton(true), 10000);
				})
				.catch((error: Error) => {
					if (toast.current) {
						toast.current.show({
							severity: 'error',
							summary: "Envoi d'email",
							detail: "Une erreur est survenue lors de l'envoi de votre email",
							life: 13000,
						});
					}
					console.error(error);
				});
		},
	});

	const isFormFieldValid = (name: string) =>
		!!(Reflect.get(formik.touched, name) && Reflect.get(formik.errors, name));

	const getFormErrorMessage = (name: string) => {
		return (
			isFormFieldValid(name) && (
				<small className='p-error'>{Reflect.get(formik.errors, name)}</small>
			)
		);
	};

	return (
		<>
			<div className='article contact'>
				<h1>Prendre rendez-vous ou me contacter</h1>
				<Toast ref={toast} />
				<section className='paragraphe-1'>
					<section className='paragraphe-content'>
						<p>
							Vous souhaitez en savoir plus sur mes soins et massages
							énergétiques, poser une question ou partager votre retour
							d'expérience ? Vous pouvez me contacter directement via le
							formulaire ci-dessous.
						</p>
						<p>
							<b>Validation du rendez-vous : </b>Je vous recontacte rapidement
							(sous 24 à 48 h) après votre demande afin de faire le point sur
							vos besoins, échanger sur vos attentes, vérifier l'absence de
							contre-indications et vous proposer le soin le plus adapté.
						</p>
					</section>
				</section>
				<form onSubmit={formik.handleSubmit}>
					<div className='field'>
						<label htmlFor='nom'>
							Nom & Prénom<span className='asterix'>*</span>
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
						<label htmlFor='email'>
							Email <span className='asterix'>*</span>
						</label>
						<InputText
							id='email'
							name='email'
							value={formik.values.email}
							onChange={formik.handleChange}
							className={classNames({
								'p-invalid': isFormFieldValid('email'),
							})}
						/>
						{getFormErrorMessage('email')}
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
						<label htmlFor='sujet'>
							Sélectionner un motif... <span className='asterix'>*</span>
						</label>
						<Dropdown
							id='sujet'
							name='sujet'
							value={formik.values.sujet}
							onChange={formik.handleChange}
							options={sujets}
						/>
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
						<p>
							<b>
								Soins exclusivement professionnels et non sexuels. Tout
								comportement inapproprié interrompt immédiatement la séance
								(prestation due).
							</b>
						</p>
						<Button
							type='submit'
							label='Envoyer'
							disabled={!enableSendButton}
						/>
					</div>
				</form>
			</div>
		</>
	);
};

export default Contact;
