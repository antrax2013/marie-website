import { Button } from 'primereact/button';
import openInNewTab from '../tools/OpenInNewTab';

const Adresse = () => {
	return (
		<div
			className='adresse'
			itemProp='address'
			itemScope
			itemType='https://schema.org/PostalAddress'
		>
			<h2>Horaires d'ouverture</h2>
			<p>Du lundi au vendredi 09h00-19h00</p>
			<p>
				<b>Sur rendez-vous uniquement</b>
			</p>
			<p>
				Consultations au{' '}
				<a
					target={'_blank'}
					href={process.env.REACT_APP_LINK_CABINET_CAROLE}
					rel='external'
				>
					cabinet
				</a>{' '}
				le jeudi :
			</p>
			<ul>
				<ol>
					<span itemProp='streetAddress'>1 rue le Corbusier</span>
				</ol>
				<ol>
					<span itemProp='postalCode'>78280</span>{' '}
					<span itemProp='addressLocality'>Guyancourt</span>
				</ol>
				<ol>
					<span itemProp='telephone'>
						<a href={`tel:${process.env.REACT_APP_META_NUMTEL}`}>
							Tél: {process.env.REACT_APP_META_NUMTEL}
						</a>
					</span>
				</ol>
			</ul>
			<p>
				Les autres jours de la semaine, je consulte à domicile sur{' '}
				<span itemProp='addressRegion'>Saint Quentin-en-Yvelines</span> et ses
				environs{' '}
			</p>
			{process.env.REACT_APP_ACTIVEFB == '1' && (
				<p className='social-networks'>
					<Button
						className='facebook p-0'
						onClick={() => {
							openInNewTab(process.env.REACT_APP_URLFB || '');
						}}
					>
						<i className='pi pi-facebook px-2'></i>
						<span className='facebook'>Facebook&nbsp;</span>
					</Button>
					<Button
						className='twitter p-0'
						onClick={() => {
							openInNewTab(process.env.REACT_APP_URLTwitter || '');
						}}
					>
						<i className='pi pi-twitter px-2'></i>
						<span className='Twitter'>Twitter&nbsp;&nbsp;&nbsp;&nbsp;</span>
					</Button>
					<Button
						className='instagram p-0'
						onClick={() => {
							openInNewTab(process.env.REACT_APP_URLInstagram || '');
						}}
					>
						<i className='pi pi-instagram px-2'></i>
						<span className='Instagram'>Instagram</span>
					</Button>
					<Button
						className='linkedin p-0'
						onClick={() => {
							openInNewTab(process.env.REACT_APP_URLLinkedIn || '');
						}}
					>
						<i className='pi pi-linkedin px-2'></i>
						<span className='LinkedIn'>LinkedIn</span>
					</Button>
				</p>
			)}
		</div>
	);
};

export default Adresse;
