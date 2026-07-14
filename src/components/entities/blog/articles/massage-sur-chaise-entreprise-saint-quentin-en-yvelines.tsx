import { iBlog } from '../../../fragments/Blog/IBlog';
import CtaContactezMoi from '../../../fragments/Ctas/ContactezMoi';
import CtaDevis from '../../../fragments/Ctas/Devis';
import thumbnail from '../../../../assets/Actualites/massage-en-entreprise/massage-du-dos-assis-en-entreprise.jpg';
import McLinkEnEntreprise from '../../../fragments/McLinks/McLink-En-Entreprise';
import McLinkMEAS from '../../../fragments/McLinks/McLink-Massage-EAS';

export const BlogArticleMassageSurChiseSQY: iBlog = {
	h1: 'Massage sur chaise en entreprise sur Saint Quentin-en-Yvelines : pourquoi les entreprises l’adoptent ?',
	slug: 'massage-sur-chaise-entreprise-saint-quentin-en-yvelines',
	date: new Date('2026-04-03'),
	tags: [
		'Massage du dos assis méth. EAS®',
		'Massage sur chaise',
		'Massage en entreprise',
		'St Quentin-en-Yvelines',
		'QVT',
	],
	images: [
		{
			path: thumbnail,
			className: 'img',
			alt: 'Praticienne bien-être effectuant un massage du dos assis, méthode EAS®, sur chaise, en entreprise',
		},
	],
	content: (
		<>
			<p>
				Le
				<McLinkEnEntreprise text='massage sur chaise en entreprise' />
				connaît un véritable essor dans les Yvelines (78). De plus en plus
				d’organisations cherchent des solutions simples et efficaces pour
				améliorer la qualité de vie au travail (QVT), réduire le stress et
				renforcer la cohésion d’équipe.
			</p>
			<h2>Qu’est‑ce que le massage sur chaise ?</h2>
			<p>
				Le massage sur chaise, que je propose, est le{' '}
				<McLinkMEAS text='Massage du dos assis méthode EAS®' noWrap={true} />.
				Il est issu des techniques énegertiques de la médecine traditionnelle
				chinoise des méridiens et des points shiatsu et apporte une relaxation
				rapide, efficace et accessible à tous. Il se pratique habillé, sur une
				chaise ergonomique, et dure 15 minutes environ.
			</p>
			<p>
				Il cible principalement : le dos, la nuque, les épaules et les bras.
				C’est un format idéal pour les entreprises, car il ne nécessite aucun
				aménagement particulier.
			</p>
			<h2>Pourquoi les entreprises des Yvelines y ont recours ?</h2>
			<ul>
				<li>
					Réduction du stress : <br />
					<i>
						Quelques minutes suffisent pour relâcher les tensions accumulées au
						travail.
					</i>
				</li>
				<li>
					Amélioration de la concentration :<br />
					<i>Les collaborateurs repartent plus détendus et plus efficaces.</i>
				</li>
				<li>
					Prévention des troubles musculo‑squelettiques (TMS) :<br />
					<i>Un enjeu majeur dans les métiers de bureau.</i>
				</li>
				<li>
					Renforcement de la cohésion :<br />
					<i>Une pause bien‑être partagée crée une dynamique positive.</i>
				</li>
				<li>
					Une solution simple à mettre en place :<br />
					<i>
						Je me déplace autour de Saint Quentin-en-Yvelines, avec tout le
						matériel nécessaire.
					</i>
				</li>
			</ul>
			<div className='cta-container'>
				<div className='cta-container-row'>
					<CtaContactezMoi />
					<CtaDevis />
				</div>
			</div>
			<h2>Quel est mon secteur d’intervention dans les Yvelines ?</h2>
			<ul>
				<li>Maurepas</li>
				<li>Élancourt</li>
				<li>Montigny‑le‑Bretonneux</li>
				<li>Plaisir</li>
				<li>Guyancourt</li>
			</ul>
			<p>
				Globalement sur l'ensemble des communes de l’agglomération de
				Saint‑Quentin‑en‑Yvelines. Je peux étendre mon périmètre au besoin.
			</p>
			<p>
				Les entreprises locales sont de plus en plus sensibles aux actions QVT,
				ce qui explique l’essor de cette pratique.
			</p>
			<h2>
				Comment se déroule une séance de massage du dos assis sur chaise en
				entreprise ?
			</h2>
			<ul>
				<li>Accueil du collaborateur</li>
				<li>Massage de 15 minutes environ</li>
				<li>Retour au poste de travail détendu et reboosté</li>
				<li>Aucune tenue particulière n’est nécessaire.</li>
			</ul>
			<p>
				J'ai besoin que d'un espace calme et isolé de quelques mètres carrés.
				Ensuite je m’occupe du reste.
			</p>
			<p>
				Le
				<McLinkEnEntreprise text='massage sur chaise en entreprise' />
				dans les Yvelines est une solution simple, efficace et très appréciée
				des collaborateurs. Il contribue à un environnement de travail plus
				serein, plus humain et plus productif.
			</p>
			<p>
				Vous souhaitez organiser une intervention dans votre entreprise ? Je me
				déplace sur l'ensemble des communes de l’agglomération de
				Saint‑Quentin‑en‑Yvelines, contactez-moi.
			</p>
			<div className='cta-container'>
				<div className='cta-container-row'>
					<CtaContactezMoi />
					<CtaDevis />
				</div>
			</div>
		</>
	),
	type: 'Article',
};
