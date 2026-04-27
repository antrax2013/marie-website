import { Card } from 'primereact/card';
import { iBlog } from './IBlog';
import McImage from '../McImage/McImage';
import Cta from '../Ctas/Cta';
import { Badge } from 'primereact/badge';
import { getBadgeSeverityFromTag } from '../../../modules/helpers';

import '../../../scss/fragments/BlogCard.scss';
import Metas from '../../fragments/MetaTags/metas.json';
import { iMetaTag } from '../MetaTags/IMetaTag';

const BlogCard = ({ slug, date, tags, images, type, h1 }: iBlog) => {
	const thumbnail = images[0];
	const meta: iMetaTag = Metas.metas.find((m) => m.key === slug) || {
		title: '',
		description: '',
	};
	const header = <h2>{h1 ?? meta.title}</h2>;
	const footer = (
		<Cta
			link={`/articles/${slug}`}
			title={`Lire le post sur l’${type} : ${h1 ?? meta.title}`}
			ctaText='Lire la suite'
			ctaLinkClassName='cta-secondary'
		/>
	);

	const key = Math.random() * 1000000;

	return (
		<div className='BlogCard'>
			<Card
				footer={footer}
				header={header}
				className='blog-card-main-container md:w-25rem'
				key={`card-${key}`}
			>
				<div className='blog-card-first-container'>
					<div className='blog-card-img-container'>
						<McImage
							path={thumbnail.path}
							className={'blog-card-thumbnail'}
							alt={thumbnail.alt}
							key={`img-${key}`}
						/>
					</div>
					<p>
						<b>{type}</b> - <i>{date.toLocaleDateString()}</i>
					</p>
				</div>
				<p>{meta.description}</p>
				<div className='blog-card-tags'>
					{tags.map((tag: string, i: number) => (
						<span className='blog-card-tag' key={`tag-${key}-${i}`}>
							<Badge value={tag} severity={getBadgeSeverityFromTag(tag)} />
						</span>
					))}
				</div>
			</Card>
		</div>
	);
};

export default BlogCard;
