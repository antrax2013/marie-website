import McLinkSoinDomicile from './McLinks/McLink-Soins-Domicile';

const PanneauLateral = () => {
	return (
		<div>
			<p>
				Du lundi au vendredi 09h00-19h00 sur <b>rendez-vous uniquement</b>.
			</p>
			<p>
				Je consulte en cabinet tous les lundis à{' '}
				<a
					href='/qui-suis-je#elancourt'
					title='Lien vers l’adresse du cabinet d’Élancourt'
				>
					Élancourt
				</a>{' '}
				(78990) et tous les jeudis à{' '}
				<a
					href='/qui-suis-je#guyancourt'
					title='Lien vers l’adresse du cabinet de Guyancourt'
				>
					Guyancourt
				</a>{' '}
				(78280)
			</p>
			<p>
				Les autres jours de la semaine, je consulte à
				<McLinkSoinDomicile text='domicile' />
				sur Saint Quentin-en-Yvelines et ses environs : <em>Maurepas</em>,{' '}
				<em>Montigny-le-Bretonneux</em>, <em>Plaisir</em>,{' '}
				<em>Voisins-le-Bretonneux</em>, <em>Coignières</em>,{' '}
				<em>La Verrière</em>, <em>Trappes</em>, <em>Le Mesnil-Saint-Denis</em>,{' '}
				<em>Élancourt</em> et <em>Guyancourt</em>.
			</p>
			<p>
				Pour les soins en entreprise,{' '}
				<a
					href='/contact'
					className='underline'
					title='Contactez-moi pour vos soins en entreprise'
				>
					contactez-moi
				</a>
				.
			</p>
		</div>
	);
};

export default PanneauLateral;
