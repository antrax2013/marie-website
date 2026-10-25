const tel = import.meta.env.VITE_META_NUMTEL;
const name = import.meta.env.VITE_META_MAIN_TITLE_LIGTH;

const PanneauLateral = () => {
	return (
		<div
			itemProp='provider'
			itemScope
			itemType='https://schema.org/LocalBusiness'
		>
			<meta itemProp='name' content={name} />
			<meta itemProp='image' />
			<meta itemProp='telephone' content={tel} />
			<p>
				Du lundi au vendredi{' '}
				<meta itemProp='openingHours' content='Mo-Fr 09:00-19:00' />
				09h00-19h00 sur <u className='underline'>rendez-vous uniquement</u>.
			</p>
			<p>
				Je consulte en cabinet{' '}
				<span
					itemProp='address'
					itemScope
					itemType='https://schema.org/PostalAddress'
				>
					tous les lundis à{' '}
					<span itemProp='addressLocality'>
						<meta
							itemProp='streetAddress'
							content='6, résidence Les Nouveaux Horizons'
						/>
						<a
							href='/qui-suis-je#elancourt'
							title='Lien vers l’adresse du cabinet d’Élancourt'
						>
							Élancourt
						</a>{' '}
						(<span itemProp='postalCode'>78990</span>)
						<meta itemProp='addressCountry' content='France' />
					</span>
				</span>
				<span
					className='paragraphe-content'
					itemProp='address'
					itemScope
					itemType='https://schema.org/PostalAddress'
				>
					<meta itemProp='streetAddress' content='1, rue Le Corbusier' /> et
					tous les jeudis à{' '}
					<span itemProp='addressLocality'>
						<a
							href='/qui-suis-je#guyancourt'
							title='Lien vers l’adresse du cabinet de Guyancourt'
						>
							Guyancourt
						</a>{' '}
						(<span itemProp='postalCode'>78280</span>)
						<meta itemProp='addressCountry' content='France' />
					</span>
				</span>
			</p>
			<p>
				<span itemScope itemType='https://schema.org/Service'>
					Les autres jours de la semaine, je consulte à domicile sur{' '}
					<span itemProp='areaServed'>Saint Quentin-en-Yvelines</span> et ses
					environs : <em itemProp='areaServed'>Maurepas</em>,{' '}
					<em itemProp='areaServed'>Montigny-le-Bretonneux</em>,{' '}
					<em itemProp='areaServed'>Plaisir</em>,{' '}
					<em itemProp='areaServed'>Voisins-le-Bretonneux</em>,{' '}
					<em itemProp='areaServed'>Coignières</em>,{' '}
					<em itemProp='areaServed'>La Verrière</em>,{' '}
					<em itemProp='areaServed'>Trappes</em>,{' '}
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
