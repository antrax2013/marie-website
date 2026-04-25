import MetaTag from '../fragments/Tools/MetaTag';
import ParagraphSeparator from '../fragments/Tools/Paragraph-Separator';
import '../../scss/routes/Consultations.scss';
import { useEffect } from 'react';

const Consultations = () => {
	const head = () => {
		return (
			<MetaTag
				title={'Consultations'}
				description='Pour mes consultations, je vous accueille en cabinet, tous les lundis au cabinet à Élancourt et les jeudis à Guyancourt. Les autres jours de la semaine, je me déplace à votre domicile sur Saint Quentin en Yvelines.'
			/>
		);
	};

	const scrollToLocation = () => {
		const { hash } = window.location;
		if (hash !== '') {
			let retries = 0;
			const id = hash.replace('#', '');
			const scroll = () => {
				retries += 0;
				if (retries > 50) return;
				const element = document.getElementById(id);
				if (element) {
					setTimeout(() => element.scrollIntoView(), 0);
				} else {
					setTimeout(scroll, 100);
				}
			};
			scroll();
		}
	};

	useEffect(() => {
		scrollToLocation();
	});

	return (
		<>
			{head()}
			<div className='Consultations'>
				<div className='article'>
					<h1>Consultations</h1>
					<section className='paragraphe-1-1'>
						<h2>Organisations de mes consultations</h2>
						<section className='paragraphe-content'>
							<span
								itemProp='provider'
								itemScope
								itemType='https://schema.org/HealthClub'
							>
								<meta itemProp='openingHours' content='Mo-Fr 09:00-19:00' />
							</span>
							<p>
								Je consulte, uniquement sur <b>rendez-vous</b> du lundi au
								vendredi de 09h00 à 19h00. Pour prendre rendez-vous, je suis
								joignable par téléphone au{' '}
								<span itemProp='telephone'>
									<a href={`tel:${import.meta.env.VITE_META_NUMTEL}`}>
										{import.meta.env.VITE_META_NUMTEL}
									</a>
								</span>
							</p>
							<p>J'aurais le plaisir de vous recevoir en cabinet :</p>
							<ul>
								<li>
									Le lundi, au cabinet des Nouveaux Horizons à{' '}
									<a href='#elancourt'>Élancourt</a>.
								</li>
								<li>
									Le jeudi, au cabinet Blowball que je partage avec{' '}
									<a
										href='https://www.reflexologie-carolejacob.fr'
										target='_blank'
									>
										Carole Jacob
									</a>{' '}
									à <a href='#guyancourt'>Guyancourt</a>.
								</li>
								<li>
									Les autres jours de la semaine, je me déplace et consulte à
									domicile.
								</li>
							</ul>
						</section>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-2-2' id='elancourt'></section>
					<section className='paragraphe-2-1' id='guyancourt'></section>

					<section className='paragraphe-2-3'>
						<section className='paragraphe-content perimetre'>
							<h3>Consultation à domicile</h3>
							<p>
								Je me déplace à votre domicile sur Saint-Quentin-en-Yvelines et
								ses environs :
							</p>
							<section itemScope itemType='https://schema.org/Service'>
								<meta itemProp='providerMobility' content='dynamic' />
								<ul className='ul-perimetre'>
									{[
										'Maurepas',
										'Élancourt',
										'Coignières',
										'La Verrière',
										'Le Mesnil-Saint-Denis',
										'Trappes',
										'Guyancourt',
										'Montigny-le-Bretonneux',
										'Voisins-le-Bretonneux',
										'Plaisir',
									].map((city) => (
										<li itemProp='areaServed' key={`li-${city}`}>
											{city}
										</li>
									))}
								</ul>
							</section>
							<p>
								{' '}
								Je peux, ponctuellement, consulter en dehors de ce périmètre.
								Appelez moi pour que l'on voit ce qu'il est possible de faire.
							</p>
							<p>
								Pour travailler dans des conditions optimales, j'ai besoin d'un
								espace calme et dégagé d'environ 2m&nbsp;x&nbsp;1.5m pour que je
								puisse installer ma table de massage et disposer d'assez de
								place pour circuler autour.
							</p>
						</section>
					</section>
					<section className='paragraphe-2-4'></section>
				</div>
			</div>
		</>
	);
};

export default Consultations;
