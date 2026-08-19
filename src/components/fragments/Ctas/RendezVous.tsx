import Cta from './Cta';

const CtaRendezVous = () => {
	return (
		<>
			<Cta
				linkType='tel'
				link='tel:07.73.55.27.70'
				title={'Contactez-moi pour prendre rendez-vous.'}
				ctaLinkClassName='cta-primary phone md:hidden'
				ctaText='☏ Prendre rendez-vous'
			/>
			<Cta
				link='/contact?sujet=prise-rendez-vous'
				title={'Contactez-moi pour prendre rendez-vous.'}
				ctaLinkClassName='cta-primary pc hidden md:flex'
				ctaText='Prendre rendez-vous'
			/>
		</>
	);
};

export default CtaRendezVous;
