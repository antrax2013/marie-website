import { iBlog } from '../../../fragments/Blog/IBlog';

import thumbnail from '../../../../assets/Actualites/seance-reiki-usui-Sanka/reiki-usui-chien-sanka-marie.jpg';
import ParagraphSeparator from '../../../fragments/Tools/Paragraph-Separator';
// import JsonLd from '../../../fragments/JsonLd/JsonLd';

import McLinkReikiUsui from '../../../fragments/McLinks/McLink-Reiki-Usui';

export const BlogArticleReikiUsuiChien: iBlog = {
	h1: 'Reiki Usui et animaux : ma première séance avec Sanka',
	slug: 'reiki-usui-chien-premiere-seance',
	date: new Date('2026-09-01'),
	tags: ['Reiki Usui', 'Chien', 'Maurepas'],
	images: [
		{
			path: thumbnail,
			className: 'img',
			alt: 'Marie lors de sa première séance de Reiki avec Sanka, une chienne',
		},
	],
	content: (
		<>
			{/* <JsonLd data={ArticleLd} /> */}
			<p>
				Il y a des expériences qui arrivent sans avoir été prévues. Ma première
				séance de <McLinkReikiUsui text='Reiki Usui' /> avec un animal en fait
				partie.
			</p>
			<blockquote>
				« Je venais simplement me faire couper les cheveux. Ce jour-là, Sanka
				m’attendait sans le savoir pour une rencontre silencieuse,
				<br />
				où la confiance se donne sans un mot et laisse un souvenir qui ne
				s’efface pas. »
			</blockquote>
			<p>
				C'était à la fin du mois de mai 2023, au salon de coiffure de mon amie
				Eva, à Maurepas. J'étais venue pour une coupe de cheveux, pas pour une
				séance Reiki Usui. Mais ce jour-là, j'ai remarqué que sa chienne Sanka
				avait une démarche inhabituelle.
			</p>
			<ParagraphSeparator />
			<h2>Une rencontre imprévue avec le Reiki Usui animal</h2>
			<p>
				Eva m'a expliqué que Sanka avait eu un accident domestique. Elle avait
				été prise en charge et avait reçu les soins nécessaires, mais elle
				continuait à boiter.
			</p>
			<p>
				Je lui ai alors proposé, simplement, d'essayer une séance de Reiki avec
				Sanka, en complément des soins qu'elle avait déjà reçus, pour voir
				comment elle l'accueillerait.
			</p>
			<p>
				C'était une première pour moi : jusque-là, j'avais toujours pratiqué le
				Reiki avec des personnes.
			</p>

			<h2>Une séance de Reiki au rythme de Sanka</h2>
			<p>
				Je me suis installée à côté d'elle, directement sur son tapis, à
				l'endroit où elle avait l'habitude de se coucher dans le salon.
			</p>
			<p>
				Je voulais avant tout la laisser dans son environnement, sans la
				contraindre.
			</p>
			<p>
				J'ai posé mes mains sur elle et Sanka s'est laissée faire. Elle n'a pas
				cherché à partir et est restée tranquillement à mes côtés pendant la
				séance. À plusieurs reprises, elle a même léché mes mains.
			</p>
			<p>
				Ce qui m'a particulièrement touchée, c'est sa confiance. Sanka ne me
				connaissait pas vraiment et pourtant, elle a accepté ma présence et le
				contact de mes mains avec beaucoup de naturel.
			</p>
			<ParagraphSeparator />
			<h2>
				Reiki avec un chien ou avec une personne : des ressentis différents ?
			</h2>
			<p>
				De mon côté, j'ai retrouvé des ressentis très proches de ceux que je
				connaissais lors de mes séances de Reiki avec des personnes.
			</p>
			<p>Ce qui changeait surtout, c'était la relation.</p>
			<p>
				Avec Sanka, il n'y avait évidemment pas de mots. Il fallait simplement
				être présente, attentive à ses réactions et respecter ce qu'elle
				acceptait.
			</p>
			<p>
				Cette première expérience m'a permis de découvrir une autre manière de
				vivre une séance de Reiki, dans une relation beaucoup plus silencieuse.
			</p>
			<h2>Une expérience pleine de douceur et de tendresse</h2>
			<p>
				Je ne suis pas devenue praticienne Reiki pour animaux à la suite de
				cette rencontre, et ce n'était d'ailleurs pas l'objectif.
			</p>
			<p>
				Je garde simplement le souvenir d'une chouette expérience, pleine de
				douceur et de tendresse, et de la confiance étonnante que Sanka m'a
				accordée ce jour-là.
			</p>
			<p>
				Le <McLinkReikiUsui text='Reiki Usui' /> ne se substitue évidemment pas
				aux soins vétérinaires dont un animal peut avoir besoin. Cette
				expérience avec Sanka s'est déroulée alors qu'elle avait déjà été prise
				en charge pour son accident et reste avant tout le récit d'une rencontre
				particulière.
			</p>
			<p>
				Quelques jours plus tard, le 1er juin 2023, je partageais cette première
				expérience en écrivant simplement :
			</p>
			<blockquote>
				« Aujourd'hui, j'ai fait pour la première fois un soin Reiki à cette
				jolie demoiselle. Un soin énergétique à un animal, une première pour
				moi. »
			</blockquote>
			<p>
				Trois ans plus tard, c'est toujours cette simplicité que je retiens de
				ma rencontre avec Sanka.
			</p>
		</>
	),
	type: 'Article',
};
