import { Button } from 'primereact/button';

const FooterLinks = () => {
	const onClick = (path: string) => {
		window.location.pathname = '/' + path;
	};

	return (
		<div className='other-footer-container'>
			<Button
				label='Politique de confidentialité'
				className='p-button-secondary p-button-text'
				onClick={() => onClick('politique-de-confidentialite')}
			/>
			<Button
				label='Informations légales'
				className='p-button-secondary p-button-text'
				onClick={() => onClick('informations-légales')}
			/>
			<Button
				label='Plan du site'
				className='p-button-secondary p-button-text'
				onClick={() => onClick('plan-du-site')}
			/>
		</div>
	);
};
export default FooterLinks;
