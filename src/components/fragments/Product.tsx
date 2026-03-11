import Cta, { iCta } from './Ctas/Cta';
import McImage, { iImage } from './McImage/McImage';

export interface iProduct {
	header: string | JSX.Element;
	description: string;
	image: iImage;
	content: string | JSX.Element;
	cta: iCta;
	bloquoteContent: string;
	category: string;
}

const Product = ({
	header,
	description,
	image,
	content,
	cta,
	bloquoteContent,
	category,
}: iProduct) => {
	return (
		<div
			className='products-header-container'
			itemScope
			itemType='https://schema.org/Offer'
		>
			<div className='product-content'>
				<meta itemProp='category' content={category} />
				<h3 itemProp='name'>{header}</h3>
				<div className='product-description'>
					<p>{description}</p>
				</div>
				<div className='product-image-container'>
					<McImage
						alt={image.alt}
						className={image.className}
						path={image.path}
						title={image.title}
					/>
				</div>
				<div className='product-description-2'>
					<p itemProp='description'>{content}</p>
				</div>
				<div className='product-cta cta-container-column'>
					<Cta
						link={cta.link}
						title={cta.title}
						ctaLinkClassName={cta.ctaLinkClassName}
					/>
					<blockquote className='cta-blockquote'>{bloquoteContent}</blockquote>
				</div>
			</div>
		</div>
	);
};
export default Product;
