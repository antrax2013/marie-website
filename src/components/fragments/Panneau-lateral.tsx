const PanneauLateral = () => {
	return (
		<div itemProp='provider' itemScope itemType='https://schema.org/HealthClub'>
			<p>
				Du lundi au vendredi{' '}
				<meta itemProp='openingHours' content='Mo-Fr 09:00-19:00' />
				09h00-19h00 sur <u className='underline'>rendez-vous uniquement</u>.
				<br />
				Je consulte en cabinet{' '}
				<span
					itemProp='address'
					itemScope
					itemType='https://schema.org/PostalAddress'
				>
					tous les lundis à{' '}
					<span itemProp='addressLocality'>
						<a
							href='/consultations#elancourt'
							title='Lien vers l’adresse du cabinet d’Elancourt'
						>
							Elancourt
						</a>{' '}
						(<span itemProp='postalCode'>78990</span>)
					</span>
				</span>
				<span
					className='paragraphe-content'
					itemProp='address'
					itemScope
					itemType='https://schema.org/PostalAddress'
				>
					{' '}
					et tous les jeudis à{' '}
					<span itemProp='addressLocality'>
						<a
							href='/consultations#guyancourt'
							title='Lien vers l’adresse du cabinet de Guyancourt'
						>
							Guyancourt
						</a>{' '}
						(<span itemProp='postalCode'>78280</span>)
					</span>
				</span>
				<br />
				<span itemScope itemType='https://schema.org/Service'>
					Les autres jours de la semaine, je consulte à domicile sur{' '}
					<span itemProp='areaServed'>Saint Quentin-en-Yvelines</span> et ses
					environs :
					<br />
					<em itemProp='areaServed'>Maurepas</em>,{' '}
					<em itemProp='areaServed'>Montigny-le-Bretonneux</em>,{' '}
					<em itemProp='areaServed'>Plaisir</em>,{' '}
					<em itemProp='areaServed'>Voisins-le-Bretonneux</em>,{' '}
					<em itemProp='areaServed'>Coignières</em>,{' '}
					<em itemProp='areaServed'>La Verrière</em>,{' '}
					<em itemProp='areaServed'>Trappes</em>,<br />{' '}
					<em itemProp='areaServed'>Le Mesnil-Saint-Denis</em>,{' '}
					<em itemProp='areaServed'>Élancourt</em> et{' '}
					<em itemProp='areaServed'>Guyancourt</em>.
					<meta itemProp='providerMobility' content='dynamic' />
				</span>
			</p>
		</div>
	);
};

export default PanneauLateral;
