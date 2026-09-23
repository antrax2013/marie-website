import { iBlog } from '../../../fragments/Blog/IBlog';

import CtaRendezVous from '../../../fragments/Ctas/RendezVous';

import thumbnail from '../../../../assets/Actualites/massage-tambour/soin-duo-massage-eas-tambour-unite-marie-floriane-en-cours.jpg';
import img1 from '../../../../assets/Actualites/massage-tambour/soin-duo-massage-eas-tambour-unite-marie-floriane.jpg';
import Cta from '../../../fragments/Ctas/Cta';
import ParagraphSeparator from '../../../fragments/Tools/Paragraph-Separator';
import JsonLd from '../../../fragments/JsonLd/JsonLd';
import * as ArticleLd from '../../../entities/json-ld/blog/soin-eas-tambour.json';

export const BlogArticleNaissanceSoinDuoMassageTambour: iBlog = {
	h1: 'Comment est né le Soin duo massage du dos assis - Tambour Unité ?',
	slug: 'soin-massage-eas-tambour-sqy-plaisir-yvelines',
	date: new Date('2026-09-23'),
	tags: [
		'Duo Massage - Tambour Unité',
		'Flofa Art & Vibration',
		'Massage du dos assis méth. EAS®',
		'Plaisir',
	],
	images: [
		{
			path: thumbnail,
			className: 'img',
			alt: 'Marie et Floriane posant en compagnie de la chaise de massage et du Tambour unité.',
		},
		{
			path: img1,
			className: 'img',
			alt: 'Marie et Floriane en train de faire un soin duo massage du dos assis - Tambour Unité',
		},
	],
	content: (
		<>
			<JsonLd data={ArticleLd} />
			<b>
				Une idée née presque spontanément, portée par deux pratiques et une
				complicité déjà bien installée.
			</b>
			<p>
				Tout commence pendant un massage du dos assis, méthode EAS®, que Marie
				réalise sur Floriane. Au fil de la séance, une idée lui vient : et si le
				massage rencontrait le Tambour Unité ?
			</p>
			<p>
				L’idée séduit immédiatement Floriane. Elles en parlent, imaginent
				comment leurs deux pratiques pourraient se répondre et, presque
				naturellement, les premiers contours du soin prennent forme.
			</p>
			<blockquote>
				La précision du geste rencontre alors la spontanéité du battement, la
				maîtrise du mouvement la force brute de la vibration.
			</blockquote>
			<h2>Deux pratiques qui évoluent ensemble</h2>
			<p>
				Dès le départ, elles ne veulent pas simplement juxtaposer un massage et
				du tambour. Le rythme du Tambour Unité doit suivre celui du massage,
				varier avec les gestes de Marie et évoluer avec ce qui se passe pendant
				la séance.
			</p>
			<p>
				La précision structurée du massage du dos assis, héritée d’une approche
				d’origine asiatique, rencontre alors quelque chose de plus instinctif :
				le rythme, la vibration et la force brute du Tambour Unité, avec toute
				l’évocation d’un instrument ancestral venu des grands espaces du Nord.
			</p>
			<blockquote>Quand la complicité devient soin.</blockquote>
			<p>
				Rien n’est écrit à l’avance. Floriane adapte instinctivement son jeu,
				son rythme et l’intensité de ses frappes, tandis que Marie poursuit
				l’évolution du massage. Leur complicité et la confiance qu’elles ont
				l’une envers l’autre leur permettent de s’ajuster naturellement.
			</p>
			<p>
				De cette rencontre entre précision et instinct est né un soin différent
				de ce qu’elles proposent chacune séparément : le{' '}
				<b>Soin duo massage du dos assis - Tambour Unité</b>.
			</p>

			<div className='cta-container'>
				<div className='cta-container-row'>
					<CtaRendezVous />
					<Cta
						link={'/duo-massage-du-dos-assis-tambour-unite'}
						title={
							'En savoir plus sur le soin assage du dos assis - Tambour Unité'
						}
					/>
				</div>
			</div>
			<ParagraphSeparator />
			<h2>Un voyage intérieur à deux voix</h2>
			<p>
				Fermez les yeux. Vous êtes confortablement installé(e), le dos soutenu,
				le corps relâché sur une chaise de massage enveloppante. L’air est doux,
				le silence habité. Autour de vous, le temps ralentit.
			</p>
			<p>
				Marie pose ses mains avec justesse. Par le massage du dos assis méthode
				EAS®, elle invite votre corps à se délester de ses tensions, à se
				réancrer, à respirer à nouveau. Chaque pression, chaque mouvement est
				une clé qui ouvre une porte vers plus de présence.
			</p>
			<p>
				Derrière vous, un souffle ancien s’élève. Le Tambour Unité, immense et
				vibrant, résonne sous les mains de Floriane. Venu du Canada et fabriqué
				en peau de wapiti, il repose sur un chevalet comme un totem. Ses
				vibrations profondes traversent l’espacese mêlent aux sensations du
				massage, enveloppant peu à peu toute l’expérience..
			</p>
			<blockquote>
				Deux pratiques, deux sensibilités, un soin créé ensemble.
			</blockquote>
			<p>
				Les gestes de Marie et les battements de Floriane s’entrelacent. C’est
				un dialogue sans mots, une danse subtile entre le corps et l’âme. Vous
				êtes là, au centre de ce soin, bercé(e) par la pulsation du vivant,
				entre ciel et terre.
			</p>
			<p>
				Un soin, deux présences, une seule intention : vous ramener à vous-même.
			</p>
			<ParagraphSeparator />
			<h2>Découvrir le Soin duo massage du dos assis - Tambour Unité</h2>
			<p>
				Aujourd’hui, elles proposent de faire découvrir cette expérience à
				l'atelier <b>Flofa Art & Vibration à Plaisir</b> de Floriane.
			</p>
			<p>
				Découvrir le Soin duo massage du dos assis - Tambour Unité, son
				déroulement, ses formats et ses tarifs.
			</p>
			<div className='cta-container'>
				<div className='cta-container-row'>
					<CtaRendezVous />
					<Cta
						link={'/massage-des-5-continents'}
						title={
							'En savoir plus sur le soin assage du dos assis - Tambour Unité'
						}
					/>
				</div>
			</div>
		</>
	),
	type: 'Article',
};
