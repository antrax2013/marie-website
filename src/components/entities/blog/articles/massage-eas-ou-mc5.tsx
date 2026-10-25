import { iBlog } from '../../../fragments/Blog/IBlog';

import thumbnail from '../../../../assets/Actualites/EASouM5C/article-EAS-ou-M5C.jpg';
import ParagraphSeparator from '../../../fragments/Tools/Paragraph-Separator';
// import JsonLd from '../../../fragments/JsonLd/JsonLd';

import McLinkReikiUsui from '../../../fragments/McLinks/McLink-Reiki-Usui';
import CtaEAS from '../../../fragments/Ctas/EAS';
import CtaM5C from '../../../fragments/Ctas/M5C';
import CtaContactezMoi from '../../../fragments/Ctas/ContactezMoi';
import CtaRendezVous from '../../../fragments/Ctas/RendezVous';

export const BlogArticleEasOuM5C: iBlog = {
	h1: 'Massage du dos assis ou Massage des 5 Continents : lequel choisir ?',
	slug: 'massage-du-dos-assis-ou-massage-des-5-continents',
	date: new Date('2026-10-11'),
	tags: [
		'Massage du dos assis méth. EAS®',
		'M5C',
		'Massage des 5 Continents',
		'Massage bien-être',
	],
	images: [
		{
			path: thumbnail,
			className: 'img',
			alt: 'Marie lors d’une séance de Massage des 5 Continents',
		},
	],
	content: (
		<>
			{/* <JsonLd data={ArticleLd} /> */}
			<p>
				Vous souhaitez vous accorder un moment de détente, mais vous hésitez
				entre le massage du dos assis méthode EAS® et le Massage des 5
				Continents ?
			</p>
			<p>
				Ces deux massages proposent des expériences différentes. L’installation,
				les gestes, l’utilisation d’huiles et les zones massées peuvent vous
				aider à choisir selon vos envies et votre disponibilité.
			</p>
			<div className='cta-container'>
				<div className='cta-container-row'>
					<CtaRendezVous />
					<CtaContactezMoi className='cta-secondary' />
				</div>
			</div>
			<ParagraphSeparator />
			<h2>Le massage du dos assis, une pause en restant habillé</h2>
			<p>
				Le massage du dos assis méthode EAS® se reçoit sur une chaise
				ergonomique, en restant habillé et sans utilisation d’huile.
			</p>
			<p>
				Son format court convient aux personnes qui souhaitent s’accorder une
				pause sans prévoir une longue séance. Il peut aussi être une première
				découverte du massage pour celles qui préfèrent rester habillées.
			</p>
			<p>
				Les gestes peuvent être doux ou plus toniques. Vous pouvez me signaler
				vos préférences et votre ressenti pendant la séance.
			</p>
			<blockquote>
				Quelques instants pour vous, une parenthèse dans votre journée.
			</blockquote>
			<div className='cta-container'>
				<div className='cta-container-row'>
					<CtaEAS className='cta-secondary' />
				</div>
			</div>
			<ParagraphSeparator />
			<h2>Le Massage des 5 Continents, un moment pour l’ensemble du corps</h2>
			<p>
				Le Massage des 5 Continents se reçoit allongé sur une table, avec des
				huiles végétales et essentielles.
			</p>
			<p>
				Il associe différentes techniques de massage et une dimension
				énergétique comprenant le <McLinkReikiUsui text='Reiki Usui' />. La
				séance permet de parcourir plusieurs zones du corps dans un moment plus
				long que le massage du dos assis.
			</p>
			<p>
				Ce massage peut vous correspondre si vous appréciez le contact des
				huiles et souhaitez prendre le temps de recevoir un massage global.
			</p>
			<p>
				Avant la séance, nous échangeons notamment sur les précautions liées à
				votre situation et à l’utilisation des huiles essentielles.
			</p>
			<blockquote>
				Laissez le quotidien de côté, le temps de ce moment qui vous appartient.
			</blockquote>
			<div className='cta-container'>
				<div className='cta-container-row'>
					<CtaM5C className='cta-secondary' />
				</div>
			</div>
			<ParagraphSeparator />
			<h2>Deux façons de vivre un moment de détente</h2>
			<p>
				Pour vous orienter, vous pouvez commencer par quelques questions
				simples.
			</p>
			<h3>Souhaitez-vous rester habillé ?</h3>
			<p>
				Le massage du dos assis permet de recevoir un massage sans vous
				déshabiller.
			</p>
			<h3>Préférez-vous un massage sans huile ?</h3>
			<p>
				Le massage du dos assis se pratique sans huile. Le Massage des 5
				Continents utilise des huiles végétales et essentielles, dont
				l’utilisation nécessite de vérifier les précautions et
				contre-indications.
			</p>
			<h3>
				Disposez-vous d’un moment court ou souhaitez-vous une séance plus longue
				?
			</h3>
			<p>
				Le massage du dos assis se prête à une pause courte. Le Massage des 5
				Continents invite à réserver davantage de temps.
			</p>
			<h3>
				Recherchez-vous un massage centré sur le haut du corps ou une expérience
				plus globale ?
			</h3>
			<p>
				Le massage du dos assis se concentre sur le dos, les épaules et la
				nuque. Le Massage des 5 Continents concerne plusieurs zones du corps.
			</p>
			<p>
				Il n’y a pas de meilleur choix dans l’absolu. Vous pouvez préférer une
				expérience à un moment donné et avoir envie d’en découvrir une autre
				plus tard.
			</p>
			<ParagraphSeparator />
			<h2>Votre situation compte aussi dans le choix</h2>
			<p>
				Vos envies sont importantes, mais elles ne sont pas le seul élément à
				prendre en compte.
			</p>
			<p>
				Une douleur, une pathologie connue, une grossesse ou une sensibilité aux
				huiles sont des informations à me signaler avant de réserver. Certaines
				situations peuvent conduire à déconseiller le massage envisagé ou à
				demander un avis médical.
			</p>
			<p>
				Par exemple, un problème de dos ne signifie pas automatiquement qu’un
				massage du dos assis est adapté. Le choix d’un autre massage n’est pas
				non plus systématique.
			</p>
			<p>
				Notre échange permet de prendre en compte les précautions nécessaires
				avant de préparer votre séance.
			</p>
			<blockquote>
				Le premier pas, c’est parfois simplement de prendre le temps d’en
				parler.
			</blockquote>
			<ParagraphSeparator />
			<h2>Vous pouvez venir avec une idée, ou avec des questions</h2>
			<p>
				Vous savez déjà quel massage vous souhaitez recevoir ? Nous pouvons
				échanger pour préparer votre rendez-vous.
			</p>
			<p>
				Vous hésitez encore ? Vous pouvez me parler de vos préférences, du temps
				dont vous disposez et de ce que vous recherchez dans ce moment pour
				vous.
			</p>
			<p>
				Par téléphone, par SMS ou par mail via mon formulaire de contact, je
				prendrai le temps de vous répondre.
			</p>
			<p>
				Je vous accueille sur rendez-vous en cabinet à Élancourt et à
				Guyancourt. Je me déplace également à domicile sur
				Saint-Quentin-en-Yvelines et ses environs.
			</p>
			<div className='cta-container'>
				<div className='cta-container-row'>
					<CtaRendezVous />
					<CtaContactezMoi className='cta-secondary' />
				</div>
			</div>
		</>
	),
	type: 'Article',
};
