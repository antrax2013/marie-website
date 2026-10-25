import MetaTag from '../tools/MetaTag';
import ParagraphSeparator from '../tools/Paragraph-Separator';
import '../../scss/routes/Consultations.scss';
import { Adresse } from '../tools/Adresse';
import { useEffect } from 'react';

const Consultations = () => {
	const head = () => {
		return (
			<MetaTag
				title={'Consultations'}
				description='Pour mes consultations, je vous accueille en cabinet, tous les lundis au cabinet à Elancourt et les jeudis à Guyancourt. Les autres jours de la semaine, je me déplace à votre domicile sur Saint Quentin en Yvelines.'
				resume='Organisation de mes consultations.'
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
									<a href='#elancourt'>Elancourt</a>.
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
					<section className='paragraphe-2-2' id='elancourt'>
						<Adresse
							title='Consultation au cabinet des Nouveaux Horizons à Elancourt'
							descprition='Le cabinet se trouve à l&rsquo;adresse suivante :'
							floor='au rez-de-chaussée'
							streetAddress='6, résidence Les Nouveaux Horizons'
							postalCode='78990'
							addressLocality='Elancourt'
							map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5259.333417438771!2d1.9490288128986093!3d48.76916077120053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e68371362865c9%3A0xa6281787cf5df1d!2s6%20R%C3%A9s%20les%20Nouveaux%20Horizons%2C%2078990%20%C3%89lancourt%2C%20France!5e0!3m2!1sfr!2snl!4v1717231208343!5m2!1sfr!2snl'
							latitude='48.769486'
							longitude='1.951657'
						/>
					</section>
					<section className='paragraphe-2-1' id='guyancourt'>
						<Adresse
							title='Consultation au cabinet Blowball de Guyancourt'
							descprition='Le cabinet Blowball se trouve à l&rsquo;adresse suivante :'
							floor='au rez-de-chaussée'
							streetAddress='1, rue Le Corbusier'
							postalCode='78280'
							addressLocality='Guyancourt'
							map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d657.4474125145919!2d2.0711613275401377!3d48.76681317927859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e680b8df551913%3A0x4c47046451eeaf2f!2s1%20Rue%20le%20Corbusier%2C%2078280%20Guyancourt!5e0!3m2!1sfr!2sfr!4v1647003179533!5m2!1sfr!2sfr'
							latitude='48.766979'
							longitude='2.071681'
						/>
					</section>

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
										'Elancourt',
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
					<section className='paragraphe-2-4'>
						<Adresse
							title='Consultation au siège'
							descprition='Exceptionnellement, je peux vous recevoir au siège de
              l&rsquo;entreprise qui se trouve à l&rsquo;adresse suivante :'
							streetAddress='14, place des Ardennes résidence la Villeparc'
							postalCode='78310'
							addressLocality='Maurepas'
							map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.546307818326!2d1.9400818128986803!3d48.771459771200966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6836f3dee7473%3A0x7e1a20a8e00e22a4!2s14%20Pl.%20des%20Ardennes%2C%2078310%20Maurepas%2C%20France!5e0!3m2!1sfr!2snl!4v1717231741310!5m2!1sfr!2snl'
							latitude='48.771601'
							longitude='1.942598'
						/>
					</section>
				</div>
			</div>
		</>
	);
};

export default Consultations;
