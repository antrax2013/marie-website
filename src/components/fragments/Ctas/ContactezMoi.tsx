import Cta, { CtaClassNameProps } from './Cta';

const CtaContactezMoi = ({ className }: CtaClassNameProps) => {
	return (
		<>
			<Cta
				linkType='tel'
				link='tel:07.73.55.27.70'
				title={'Contactez-moi pour tous renseignements.'}
				ctaLinkClassName={`${className ?? 'cta-primary'} phone md:hidden`}
				ctaText='☏ Contactez-moi'
				meta={`itemProp='telephone'`}
			/>
			<Cta
				link='/contact?sujet=prise-rendez-vous'
				title={'Contactez-moi pour tous renseignements.'}
				ctaLinkClassName={`${className ?? 'cta-primary'} pc hidden md:flex`}
				ctaText='Contactez-moi'
			/>
		</>
	);
};

export default CtaContactezMoi;
