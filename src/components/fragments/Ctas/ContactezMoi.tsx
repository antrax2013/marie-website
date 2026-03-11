import Cta from './Cta';

const CtaContactezMoi = () => {
	return (
		<>
			<Cta
				linkType='tel'
				link='tel:07.73.55.27.70'
				title={'Contactez-moi pour tous renseignements.'}
				ctaLinkClassName='cta-primary phone md:hidden'
				ctaText='☏ Contactez-moi'
				meta={`itemProp='telephone'`}
			/>
			<Cta
				link='/contact?sujet=prise-rendez-vous'
				title={'Contactez-moi pour tous renseignements.'}
				ctaLinkClassName='cta-primary pc hidden md:flex'
				ctaText='Contactez-moi'
			/>
		</>
	);
};

export default CtaContactezMoi;
