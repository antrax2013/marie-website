import { iBlog } from '../../../fragments/Blog/IBlog';
import CtaContactezMoi from '../../../fragments/Ctas/ContactezMoi';
import thumbnail from '../../../../assets/M5C/massage-5-continents.png';
import img1 from '../../../../assets/Actualites/massage-domicile/massage-domicile-1.png';
import ParagraphSeparator from '../../../fragments/Tools/Paragraph-Separator';
import Cta from '../../../fragments/Ctas/Cta';
import McLinkM5C from '../../../fragments/McLinks/McLink-5-Continents';
import JsonLd from '../../../fragments/JsonLd/JsonLd';

import * as ArticleLd from '../../../entities/json-ld/blog/m5c-contre-indications.json';
import McLinkReikiUsui from '../../../fragments/McLinks/McLink-Reiki-Usui';

export const BlogArticleM5cContreIndications: iBlog = {
	h1: 'Quelles sont les contre-indications du Massage des 5 Continents ?',
	slug: 'contre-indications-massage-5-continents',
	date: new Date('2026-08-15'),
	tags: ['M5C', 'Massage des 5 Continents', 'Contre-indications'],
	images: [
		{
			path: thumbnail,
			className: 'img',
			alt: 'Le logo de la fédération du massage des 5 continents dont je suis adhérante',
		},
		{
			path: img1,
			className: 'img',
			alt: 'raticienne bien-être effectuant un massage des 5 continents, sur une table de massage, à domicile',
		},
	],
	content: (
		<>
			<JsonLd data={ArticleLd} />
			<p>
				Le
				<McLinkM5C text='Massage des 5 Continents (M5C)' />
				fait partie de mes services proposés sur est un soin holistique reconnu
				pour sa puissance. En combinant des techniques de massage du monde
				entier (Lomi-Lomi, Californien, Suédois, Tuina, Ayurvédique), un soin
				énergétique <McLinkReikiUsui text='Reiki Usui' /> et un complexe
				d'huiles essentielles ciblées, il offre un lâcher-prise profond.
			</p>
			<p>
				Cependant, en raison de son action biodynamique et de la présence
				d'extraits végétaux concentrés, ce soin ne convient pas à tout le monde.
				Pour profiter de votre séance en toute sérénité, voici le guide complet
				des contre-indications et des adaptations possibles.
			</p>
			<blockquote>
				L'alliance subtile du massage et de l'énergie pour un apaisement profond
				et durable.
			</blockquote>
			<ParagraphSeparator />
			<h2>Les contre-indications absolues</h2>
			<p>
				Pour des raisons de sécurité et de santé, le Massage des 5 Continents ne
				peut pas être dispensé dans les cas suivants :
			</p>
			<ul>
				<li>
					<b>Les femmes enceintes</b> : Les huiles essentielles utilisées
					contiennent des molécules actives lipophiles qui traversent la
					barrière placentaire. De plus, les manœuvres de massage et le travail
					énergétique sont trop stimulants pendant la grossesse.
				</li>
				<li>
					<b>Les personnes atteintes de cancer en cours de traitement</b> : Le
					M5C stimulant fortement la circulation sanguine, lymphatique et les
					processus de détoxification, il est contre-indiqué sans accord médical
					strict.
				</li>
				<li>
					<b>Les personnes souffrant de troubles psychiatriques graves</b> : En
					cas de troubles psychotiques, de schizophrénie ou de dissociation de
					la personnalité, l'intégration des sensations corporelles et le
					travail énergétique intense du <McLinkReikiUsui text='Reiki Usui' />{' '}
					peuvent s'avérer déstabilisants.
				</li>
				<li>
					<b>Les personnes mineures</b> : Par choix d'éthique professionnelle
					dans ma pratique, ce soin complet est réservé exclusivement aux
					adultes majeurs.
				</li>
			</ul>
			<blockquote className='disclaimer'>
				« Un doute sur une condition médicale ?{' '}
				<a
					className='disclaimer-link'
					href='/contact?sujet=demande-de-renseignements'
					target='blank'
				>
					Contactez-moi.
				</a>
				. »
			</blockquote>

			<h2>
				Les contre-indications relatives : l'alternative aux huiles végétales
				pures
			</h2>
			<p>
				L’utilisation d'huiles essentielles (comme la menthe poivrée, le
				ravintsara, l'ylang-ylang ou le géranium) demande une vigilance
				particulière. Dans certaines situations,{' '}
				<b>le massage reste tout à fait possible</b> sans l’ajout des huiles
				essentielles. Dans ce cas je n’utilise que le complexe pure des 5 huiles
				végétales (avocat, amande douce, macadamia, argan, noyau d'abricot) :
			</p>
			<ul>
				<li>
					<b>Les femmes allaitantes</b> : Pour éviter le passage des actifs
					aromatiques dans le lait maternel.
				</li>
				<li>
					<b>Les personnes asthmatiques ou épileptiques</b> : Certaines
					molécules aromatiques peuvent déclencher des crises chez les personnes
					sujettes.
				</li>
				<li>
					<b>Les personnes hypersensibles ou allergiques</b> : En cas de
					réactivité connue aux parfums ou composés aromatiques.
				</li>
				<li>
					<b>
						Les personnes sous traitements médicaux lourds ou homéopathiques
						forts
					</b>{' '}
					: Pour éviter toute interraction avec le trairement en cours.
				</li>
			</ul>
			<p>
				<b>À noter</b>
				<i>
					{' '}
					: Lors de chaque rendez-vous, un temps d'échange préalable permet de
					faire le point sur votre état de santé et d'ajuster immédiatement la
					formule d'huiles utilisée.
				</i>
			</p>
			<div className='cta-container'>
				<div className='cta-container-row'>
					<CtaContactezMoi
						title={'Contactez-moi pour réserver une séance.'}
						ctaText={'Réserver une séance'}
					/>
					<Cta
						link={'/massage-des-5-continents'}
						title={'En savoir plus sur le massage'}
						ctaText={'En savoir plus sur le massage'}
					/>
				</div>
			</div>
			<ParagraphSeparator />
			<h2>Précautions et conseils avant/après le soin</h2>
			<p>
				Pour profiter pleinement des bienfaits du Massage des 5 Continents :
			</p>
			<ul>
				<li>
					<b>Avant le soin</b> : <br />
					Mangez léger avant votre venue et retirez vos bijoux et piercings pour
					faciliter les manœuvres fluides et agréables sur tout le corps.
				</li>
				<li>
					<b>Après le soin</b> :
					<ul>
						<li>
							<b>Photosensibilité</b> : Certaines huiles utilisées dans le
							complexe sont photosensibilisantes. Il convient de ne pas
							s'exposer directement au soleil ou aux UV dans les heures qui
							suivent le soin.
						</li>
						<li>
							Pensez à bien vous hydrater pour accompagner l'élimination
							naturelle des toxines libérées pendant le massage.
						</li>
					</ul>
				</li>
			</ul>
			<h2>Réservation et informations pratiques</h2>
			<p>
				Chaque séance est une bulle sur-mesure ajustée à vos besoins du moment,
				dans le respect strict de votre santé et du cadre professionnel.
			</p>
			<p>
				Je vous accueille en cabinet le lundi à Élancourt et le jeudi
				Guyancourt, ou à domicile sur Saint-Quentin-en-Yvelines et ses environs
				(Maurepas, Plaisir, Montigny-le-Bretonneux...).
			</p>
			<div className='cta-container'>
				<div className='cta-container-row'>
					<CtaContactezMoi
						title={'Contactez-moi pour réserver une séance.'}
						ctaText={'Réserver une séance'}
					/>
					<Cta
						link={'/massage-des-5-continents'}
						title={'En savoir plus sur le massage'}
						ctaText={'En savoir plus sur le massage'}
					/>
				</div>
			</div>
		</>
	),
	type: 'Article',
};
