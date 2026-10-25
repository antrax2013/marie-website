import Cta from '../Cta';

const CtaOffres = () => {
	return (
		<>
			<Cta
				link='offres-et-tarifs'
				title={
					'Cliquez ici pour découvrir mes offres de soins, cartes cadeaux, packs et coffrets.'
				}
				ctaLinkClassName='cta-secondary hidden size-l-visible'
				ctaText='Découvrir mes offres de soins, cartes cadeaux, packs et coffrets'
			/>
			<Cta
				link='offres-et-tarifs'
				title={
					'Cliquez ici pour découvrir mes offres de soins, cartes cadeaux, packs et coffrets.'
				}
				ctaLinkClassName='cta-secondary size-l-hidden'
				ctaText='Découvrir mes offres de soins'
			/>
		</>
	);
};
export default CtaOffres;
