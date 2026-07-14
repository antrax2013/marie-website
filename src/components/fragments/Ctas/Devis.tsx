import Cta, { CtaClassNameProps } from './Cta';

const CtaDevis = ({ className }: CtaClassNameProps) => {
	return (
		<>
			<Cta
				link='/contact?sujet=demande-de-devis'
				title={'CLiquez ici pour me contacter pour un devis.'}
				ctaLinkClassName={`${className ?? 'cta-tertiary'} devis`}
				ctaText='Demander un devis'
			/>
		</>
	);
};

export default CtaDevis;
