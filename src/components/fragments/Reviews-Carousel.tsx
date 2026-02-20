import { Carousel } from 'primereact/carousel';
import * as avis from '../../assets/avis.json';
import { useState } from 'react';
import google from '../../assets/icon-google.svg';
import { iReviewsCarousel } from './Reviews-Container';

const ReviewsCarousel = ({ filter }: iReviewsCarousel) => {
	const data = { ...avis };
	const [products, _] = useState(
		!!filter ? data.avis.filter((a) => a.tags == filter) : data.avis,
	);

	//https://ceciletrias.fr/
	const productTemplate = (item: any) => {
		return (
			<div
				className='carousel-item-main-container'
				itemProp='review'
				itemScope
				itemType='https://schema.org/Review'
			>
				<a
					href={item.url}
					target='_blank'
					title={`Consulter l'avis laissé par ${item.auteur} sur Google `}
					className='carousel-social-network-icon'
				>
					<div className='author-review-container'>
						<p
							className='author-review'
							itemProp='author'
							itemScope
							itemType='https://schema.org/Person'
						>
							{item.auteur}
						</p>
						<img
							className='carousel-social-network-icon'
							alt={`Logo Google utilisé pour illustrer les avis clients`}
							src={google}
						/>
					</div>

					<div className='carousel-item-header-container'>
						<p
							className='date-review'
							itemProp='datePublished'
							content={item.date}
						>
							{item.date}
						</p>
						<p
							className='rank-review'
							itemProp='reviewRating'
							itemScope
							itemType='https://schema.org/Rating'
						>
							<meta itemProp='worstRating' content='1' />
							<meta itemProp='bestRating' content='5' />
							<span itemProp='ratingValue' content={item.note.length}>
								{item.note}
							</span>
						</p>
					</div>
					<p className='content-review' itemProp='reviewBody'>
						{item.commentaire}
					</p>
				</a>
			</div>
		);
	};

	return (
		<Carousel
			value={products}
			numScroll={1}
			numVisible={3}
			itemTemplate={productTemplate}
			circular
		/>
	);
};

export default ReviewsCarousel;
