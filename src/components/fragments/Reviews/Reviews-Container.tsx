import Cta from '../Ctas/Cta';
import ReviewsCarousel from './Reviews-Carousel';
import '../../../scss/fragments/ReviewContainer.scss';

export interface iReviewsCarousel {
	filter?: string;
}

const ReviewContainer = ({ filter }: iReviewsCarousel) => {
	return (
		<div className='review-main-container'>
			<h2 className='center-secondary-title'>Témoignages clients</h2>
			<div className='review-carousel-container'>
				<div className='review-carousel-internal-container'>
					<ReviewsCarousel filter={filter} />
				</div>
			</div>
			<div className='review-cta'>
				<div className='review-cta-container'>
					<Cta
						link='https://g.page/r/CRSCLVPhWGkwEAE/review'
						title='Cliquez pour ajouter un nouvel avis sur ma fiche Google My Business'
						ctaLinkClassName='cta-secondary'
						ctaText='Ajouter un avis'
					/>
				</div>
			</div>
		</div>
	);
};
export default ReviewContainer;
