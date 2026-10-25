import { Carousel } from 'primereact/carousel';
import * as avis from '../../../assets/avis.json';
import { useState } from 'react';
import { iReviewsCarousel } from './Reviews-Container';
import { Badge } from 'primereact/badge';
import { toISODate } from '../../../modules/helpers';

const ReviewsCarousel = ({ filter }: iReviewsCarousel) => {
	const data = { ...avis };
	const [products, _] = useState(
		!!filter ? data.avis.filter((a) => a.tags == filter) : data.avis,
	);

	const responsiveOptions = [
		{
			breakpoint: '1400px',
			numVisible: 2,
			numScroll: 1,
		},
		{
			breakpoint: '1199px',
			numVisible: 3,
			numScroll: 1,
		},
		{
			breakpoint: '767px',
			numVisible: 2,
			numScroll: 1,
		},
		{
			breakpoint: '575px',
			numVisible: 1,
			numScroll: 1,
		},
	];

	const productTemplate = (item: any) => {
		return (
			<section itemScope itemType='https://schema.org/Review'>
				<span
					itemProp='itemReviewed'
					itemScope
					itemType='https://schema.org/LocalBusiness'
					itemID='https://massage-reiki.fr/#business'
				>
					<meta itemProp='name' content='Massage Reiki - Marie Cophignon' />
				</span>
				<div className='carousel-item-main-container'>
					<a
						href={item.url}
						target='_blank'
						title={`Consulter l'avis laissé par ${item.auteur} sur ${item.reseau}`}
						className='carousel-social-network-icon'
					>
						<div className='author-review-container'>
							<p
								className='author-review'
								itemProp='author'
								itemScope
								itemType='https://schema.org/Person'
							>
								<span itemProp='name'>{item.auteur}</span>
							</p>

							<i className={`pi px-2 pi-${item.reseau}`}></i>
						</div>

						<div className='carousel-item-header-container'>
							<p
								className='date-review'
								itemProp='datePublished'
								content={toISODate(item.date)}
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
						<p>
							<span itemProp='name'>
								{item.tags.toUpperCase() == 'M5C' && (
									<>
										<meta
											itemProp='reviewAspect'
											content='Massage des 5 continents'
										/>
										<Badge value='Massage des 5 continents' severity='danger' />
									</>
								)}
								{item.tags.toUpperCase() == 'EAS' && (
									<>
										<meta
											itemProp='reviewAspect'
											content='Massage assis méthd. EAS®'
										/>
										<Badge value='Massage assis méthd. EAS®' severity='info' />
									</>
								)}
								{item.tags.toUpperCase() == 'REIKI' && (
									<>
										<meta itemProp='reviewAspect' content='Soin Reiki Usui' />
										<Badge value='Reiki Usui' severity='success' />
									</>
								)}
							</span>
						</p>
					</a>
				</div>
			</section>
		);
	};

	return (
		<Carousel
			value={products}
			numScroll={1}
			numVisible={3}
			itemTemplate={productTemplate}
			responsiveOptions={responsiveOptions}
			circular
		/>
	);
};

export default ReviewsCarousel;
