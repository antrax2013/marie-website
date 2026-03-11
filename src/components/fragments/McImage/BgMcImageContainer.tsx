import McImage, { iImage } from './McImage';
import '../../../scss/fragments/McImageContainers/BgMcImageContainer.scss';

const BgMcImageContainer = ({ path, className, alt, title }: iImage) => {
	return (
		<div
			className={`bg-image-container bg-image-container-${className} hidden md:inline-block`}
		>
			<div className='bg-image-container-content'>
				<McImage path={path} className={className} alt={alt} title={title} />
			</div>
		</div>
	);
};
export default BgMcImageContainer;
