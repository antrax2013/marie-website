import { Card } from 'primereact/card';
import { iBlog } from './IBlog';
import McImage from '../McImage/McImage';

import '../../../scss/fragments/BlogCard.scss';
import Metas from '../MetaTags/metas.json';
import { iMetaTag } from '../MetaTags/IMetaTag';

const BlogMiniCard = ({ slug, date, images, type, h1: title }: iBlog) => {
	const thumbnail = images[0];
	const meta: iMetaTag = Metas.metas.find((m) => m.key === slug) || {
		title: '',
		description: '',
	};
	const header = <h3>{title ?? meta.title}</h3>;
	const footer = (
		<a
			href={`${slug}`}
			title={`Lire le post sur l’${type} : ${title ?? meta.title}`}
		>
			Lire la suite...
		</a>
	);

	const key = Math.random() * 1000000;

	return (
		<div className='BlogMiniCard'>
			<Card
				footer={footer}
				header={header}
				className='blog-card-main-container md:w-33rem'
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
					<div className='description'>
						<p>
							<b>{type}</b> - <i>{date.toLocaleDateString()}</i>
						</p>
						<p>{meta.description}</p>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default BlogMiniCard;
