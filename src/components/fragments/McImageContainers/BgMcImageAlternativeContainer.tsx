import McImage, { iImage } from '../McImage';
import '../../../scss/fragments/McImageContainers/BgMcImageAlternativeContainer.scss';

const BgMcImageAlternativeContainer = ({
	path,
	className,
	alt,
	title,
}: iImage) => {
	return (
		<div
			className={`bg-image-alternative-container bg-image-alternative-container-${className} size-l-hidden`}
		>
			<McImage path={path} className={className} alt={alt} title={title} />
		</div>
	);
};
export default BgMcImageAlternativeContainer;
