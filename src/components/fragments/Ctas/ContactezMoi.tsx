import Cta, { CtaClassNameProps } from './Cta';

const CtaContactezMoi = ({ className, ctaText, title }: CtaClassNameProps) => {
	return (
		<>
			<Cta
				linkType='tel'
				link='tel:07.73.55.27.70'
				title={`${title ?? 'Contactez-moi pour tous renseignements ou réserver une séance.'}`}
				ctaLinkClassName={`${className ?? 'cta-primary'} phone md:hidden`}
				ctaText={`${ctaText ?? '☏ Contactez-moi'}`}
			/>
			<Cta
				link='/contact?sujet=prise-rendez-vous'
				title={`${title ?? 'Contactez-moi pour tous renseignements ou réserver une séance.'}`}
				ctaLinkClassName={`${className ?? 'cta-primary'} pc hidden md:flex`}
				ctaText={`${ctaText ?? 'Contactez-moi'}`}
			/>
		</>
	);
};

export default CtaContactezMoi;
