import { iBlog } from '../../../fragments/Blog/IBlog';
import Cta from '../../../fragments/Ctas/Cta';
import thumbnail from '../../../../assets/Actualites/20260502-retour-initiation-test-musculaire-kinesio/livret-initiation-test-musculaire-kinesio.jpg';
import ParagraphSeparator from '../../../fragments/Tools/Paragraph-Separator';

export const BlogEvent20260430RetourInitTestMuscu: iBlog = {
	h1: 'Retour sur ma journée d’initiation au test musculaire',
	slug: '20260430-retour-initiation-test-musculaire-kinesio',
	date: new Date('2026-05-02'),
	tags: [
		'Test musculaire kinésio',
		'Initiation',
		'Nouzonville',
		'École des arts du souffle',
	],
	images: [
		{
			/*640-426*/
			path: thumbnail,
			className: 'img',
			alt: 'Couverture du livret remis lors de l’initiation au test musculaire à l’École des Arts du Souffle, présentant le titre et l’identité visuelle de l’école.',
		},
	],
	content: (
		<>
			<div>
				<h2>Même en vacances, je me forme.</h2>
				<p>
					Une belle journée, de belles rencontres, une formatrice au top. Je me
					suis formée ce jeudi 30 avril au test musculaire, l’outil des kinésio
					!!!
				</p>
				<blockquote>Trop contente d’avoir apprise cette technique.</blockquote>
				<p>
					Merci Sonia, de l’École des Arts du Souffle (EAS®) de Nouzonville
					(08), pour cette belle journée.
				</p>
				<p>
					Le jeudi 30 avril, j’ai suivi une initiation au test musculaire de
					kinésiologie, une technique que je souhaitais découvrir afin d’affiner
					ma compréhension du corps et des informations subtiles qu’il révèle.
				</p>
				<p>
					J’ai eu la chance de suivre cette initiation à l’École des Arts du
					Souffle, guidée par Sonia Jenno, dont l’approche structurée, précise
					et attentive offre un apprentissage sérieux, clair et parfaitement
					maîtrisé.
				</p>
				<div className='cta-container'>
					<div className='cta-container-row'>
						<Cta
							link={
								'https://ecoledesartsdusouffle.com/nos-formations/initiation-art-test-musculaire/'
							}
							title={
								'En savoir plus sur l’initiation à l’art du test musculaire'
							}
							ctaText={'Découvrir l’initiation'}
						/>
					</div>
				</div>
			</div>
			<ParagraphSeparator />
			<div>
				<p>
					Cette initiation m’a permis de ressentir à quel point le corps sait,
					répond, oriente. Une pratique simple en apparence, mais d’une richesse
					incroyable dès qu’on y met de la conscience.
				</p>
				<p>
					Je repars avec une compréhension plus fine, un protocole simple, une
					envie d’aller plus loin, et la joie d’intégrer progressivement cet
					outil dans ma pratique.
				</p>
			</div>
		</>
	),
	type: 'Evénement',
};
