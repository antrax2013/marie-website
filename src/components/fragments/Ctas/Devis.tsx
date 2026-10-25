import Cta from '../Cta';

const CtaDevis = () => {
	return (
		<>
			<Cta
				link='/contact?sujet=demande-de-devis'
				title={'CLiquez ici pour me contacter pour un devis.'}
				ctaLinkClassName='cta-tertiary devis'
				ctaText='Demander un devis'
			/>
		</>
	);
};

export default CtaDevis;
