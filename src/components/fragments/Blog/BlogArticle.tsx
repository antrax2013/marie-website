import { useParams } from 'react-router-dom';
import { iBlog } from './IBlog';
import { events } from '../../entities/blog/events/events';
import { Badge } from 'primereact/badge';
import { useEffect, useState } from 'react';
import { Galleria } from 'primereact/galleria';
import { iImage } from '../McImage/McImage';
import { getBadgeSeverityFromTag } from '../../../modules/helpers';

import '../../../scss/fragments/BlogArticle.scss';
import MetaTag from '../Tools/MetaTag';

const BlogArticle = () => {
	const { slug } = useParams<{ slug: string }>();
	const data: iBlog = events.filter((e) => e.slug === slug)[0];
	const tmp: iImage[] = [];
	const [images, setImages] = useState(tmp);

	useEffect(() => {
		setImages(data.images);
	}, []);

	const itemTemplate = (item: iImage) => {
		return <img src={item.path} alt={item.alt} style={{ width: '300px' }} />;
	};

	const thumbnailTemplate = (item: iImage) => {
		return <img src={item.path} alt={item.alt} style={{ width: '50px' }} />;
	};

	const head = () => {
		return (
			<MetaTag title={data.metas.title} description={data.metas.description} />
		);
	};

	return (
		<>
			{head()}
			<article className='article BlogArticle'>
				<div className='article-container'>
					<h1>{data.h1 ?? data.metas.title}</h1>
					<div className='article-main-container'>
						<div className='article-content-container'>
							<p>
								<b>{data.type}</b> -{' '}
								<i>publié le : {data.date.toLocaleDateString()}</i>
							</p>
							<div className='blog-card-tags'>
								{data.tags.map((tag: string, i: number) => (
									<span className='blog-card-tag' key={`span-tag-${i}`}>
										<Badge
											value={tag}
											severity={getBadgeSeverityFromTag(tag)}
										/>
									</span>
								))}
							</div>
							{data.content}
						</div>
						<div className='gallery-container'>
							{images.length > 0 && (
								<div className='gallery-content-container'>
									<Galleria
										value={images}
										numVisible={3}
										item={itemTemplate}
										thumbnail={thumbnailTemplate}
									/>
								</div>
							)}
						</div>
					</div>
				</div>
			</article>
		</>
	);
};

export default BlogArticle;
