import '../../scss/routes/Actues-et-News.scss';
import BlogCardsContainer from '../fragments/Blog/BlogCards-Container';
import McImage from '../fragments/McImage/McImage';
import MetaTag from '../fragments/Tools/MetaTag';
import ParagraphSeparator from '../fragments/Tools/Paragraph-Separator';
import ImgCocon from '../../assets/Actualites/serviette-pierres-et-bougies-xs.jpg';

const ActusEtNews = () => {
	const head = () => {
		return (
			<>
				<MetaTag
					title='Blog Bien‑être — Reiki, Massage, Actualités, Évènements'
					description='Blog ##main-web-site-url## : articles et actualités bien-être à propos de mes massages et soins énergétiques sur Saint-Quentin en Yvelines, à Élancourt et Guyancourt, à domicile ou en entreprise. Votre bien‑être commence ici.'
				/>
				{/* <script type='application/ld+json'>
				{
					"@context": "https://schema.org",
					"@type": "BlogPosting",
					"headline": "Nouvelle salle pluridisciplinaire de massage et Reiki à Guyancourt",
					"description": "Découvrez la nouvelle salle pluridisciplinaire disponible chaque jeudi au cabinet Blowball à Guyancourt : massages, Reiki Usui, Massage des 5 Continents. Massages à domicile sur Saint-Quentin-en-Yvelines et séances le lundi à Élancourt.",
					"author": {
						"@type": "Person",
						"name": "Ton Nom"
					},
					"publisher": {
						"@type": "Organization",
						"name": "Cabinet Blowball",
						"logo": {
							"@type": "ImageObject",
							"url": "https://ton-site.fr/logo.png"
						}
					},
					"mainEntityOfPage": {
						"@type": "WebPage",
						"@id": "https://ton-site.fr/salle-pluridisciplinaire-massage-reiki-guyancourt"
					},
					"image": "https://ton-site.fr/images/nouvelle-salle-guyancourt.jpg",
					"datePublished": "2024-01-01",
					"dateModified": "2024-01-01"
				}
				</script> */}
			</>
		);
	};

	return (
		<>
			{head()}
			<div className='article ActusEtNews'>
				<div className='first-header-2'>
					<div className='first-header-2-container'>
						<div className='header-2-container'>
							<div className='header-2-content'>
								<h1>Articles et actualités</h1>
								<p className='header-2-sub-title size-l-hidden'>
									Un espace au cœur de votre bien‑être
								</p>
								<div className='header-2-description'>
									<p>
										Bienvenue la partie blog du site ##main-web-site-url##,
										l’espace dédié au bien‑être sur Saint‑Quentin‑en‑Yvelines,
										Élancourt et Guyancourt.
									</p>
									<div className='img-cocon-l-container size-l-hidden'>
										<McImage
											path={ImgCocon}
											className='img-cocon'
											alt='Image bien-être avec serviettes enroulées, bougies allumées, quartz rose et améthyste — ambiance spa cocoon à Saint-Quentin-en-Yvelines, Élancourt et Guyancourt'
										/>
									</div>
									<p>
										Je publie régulièrement des contenus autour du{' '}
										<a href='/reiki-usui'>Reiki Usui</a>, des massages relaxants
										(
										<a href='/massage-assis-methode-eas'>
											massage du dos assis, méthode EAS®
										</a>
										,{' '}
										<a href='/massage-des-5-continents'>
											massage des 5 continents
										</a>
										) et de pratiques naturelles pour améliorer votre bien‑être.
										Ces articles vous guident pour réduire le stress, retrouver
										énergie et sérénité, au quotidien, autoursdes différentes
										approches que je propose.
									</p>
									<p>
										Retrouvez aussi les dernières informations sur mes ateliers
										bien‑être, mes événements locaux et mes offres de soins, que
										ce soit en cabinet, à domicile ou en entreprise.
									</p>
								</div>
								<blockquote>
									Aidez‑moi à veiller sur ce qui vous est le plus précieux :
									vous
								</blockquote>
							</div>
							<div className='header-2-image-container hidden md:inline-block'>
								<McImage
									className='img-cocon'
									path={ImgCocon}
									alt='Image bien-être avec serviettes enroulées, bougies allumées, quartz rose et améthyste — ambiance spa cocoon à Saint-Quentin-en-Yvelines, Élancourt et Guyancourt'
								/>
							</div>
						</div>
					</div>
				</div>
				<ParagraphSeparator />
				<BlogCardsContainer />
			</div>
		</>
	);
};
export default ActusEtNews;
