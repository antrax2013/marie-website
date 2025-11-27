import { Button } from 'primereact/button';
import openInNewTab from './tools/OpenInNewTab';

const PanneauLateral = () => {
	return (
		<>
			<div>
				<p className='text-third'>
					Les soins sur mineurs sont réalisés uniquement en présence d’un
					adulte.
				</p>
			</div>
			<div
				itemProp='provider'
				itemScope
				itemType='https://schema.org/HealthClub'
			>
				<h2>Horaires d'ouverture</h2>
				<p>
					Du lundi au vendredi{' '}
					<meta itemProp='openingHours' content='Mo-Fr 09:00-19:00' />
					09h00-19h00
				</p>
				<p>
					<b>Sur rendez-vous uniquement</b>
				</p>
				<p>
					<span itemProp='telephone'>
						Tél :{' '}
						<a href={`tel:${import.meta.env.VITE_META_NUMTEL}`}>
							{import.meta.env.VITE_META_NUMTEL}
						</a>
					</span>
				</p>
				<h3>Consultations aux cabinets :</h3>
				<div>
					<p
						className='paragraphe-content'
						itemProp='address'
						itemScope
						itemType='https://schema.org/PostalAddress'
					>
						Le lundi à{' '}
						<span itemProp='addressLocality'>
							<a
								href='/consultations#elancourt'
								title='Lien vers l’adresse du cabinet d’Elancourt'
							>
								Elancourt
							</a>{' '}
							(<span itemProp='postalCode'>78990</span>)
						</span>
					</p>
				</div>
				<div>
					<p
						className='paragraphe-content'
						itemProp='address'
						itemScope
						itemType='https://schema.org/PostalAddress'
					>
						Le jeudi à{' '}
						<span itemProp='addressLocality'>
							<a
								href='/consultations#guyancourt'
								title='Lien vers l’adresse du cabinet de Guyancourt'
							>
								Guyancourt
							</a>{' '}
							(<span itemProp='postalCode'>78280</span>)
						</span>
					</p>
				</div>
			</div>
			<div>
				<p itemScope itemType='https://schema.org/Service'>
					Les autres jours de la semaine, je consulte à domicile sur{' '}
					<span itemProp='areaServed'>Saint Quentin-en-Yvelines</span> et ses
					environs <meta itemProp='providerMobility' content='dynamic' />
				</p>
			</div>
			<div>
				{import.meta.env.VITE_ACTIVEFB == '1' && (
					<p className='social-networks'>
						<Button
							className='facebook p-0'
							onClick={() => {
								openInNewTab(import.meta.env.VITE_URLFB || '');
							}}
						>
							<i className='pi pi-facebook px-2'></i>
							<span className='facebook'>Facebook&nbsp;</span>
						</Button>
						<Button
							className='twitter p-0'
							onClick={() => {
								openInNewTab(import.meta.env.VITE_URLTwitter || '');
							}}
						>
							<i className='pi pi-twitter px-2'></i>
							<span className='Twitter'>Twitter&nbsp;&nbsp;&nbsp;&nbsp;</span>
						</Button>
						<Button
							className='instagram p-0'
							onClick={() => {
								openInNewTab(import.meta.env.VITE_URLInstagram || '');
							}}
						>
							<i className='pi pi-instagram px-2'></i>
							<span className='Instagram'>Instagram</span>
						</Button>
						<Button
							className='linkedin p-0'
							onClick={() => {
								openInNewTab(import.meta.env.VITE_URLLinkedIn || '');
							}}
						>
							<i className='pi pi-linkedin px-2'></i>
							<span className='LinkedIn'>LinkedIn</span>
						</Button>
					</p>
				)}
			</div>
		</>
	);
};

export default PanneauLateral;
