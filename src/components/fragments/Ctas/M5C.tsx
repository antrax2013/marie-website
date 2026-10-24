import Cta, { CtaClassNameProps } from './Cta';

const CtaM5C = ({ className }: CtaClassNameProps) => {
	return (
		<>
			<Cta
				link='/massage-des-5-continents'
				title={
					'Cliquez pour en apprendre d’avantage sur le Massage des 5 Continents'
				}
				ctaLinkClassName={`${className ?? 'cta-tertiary'} devis`}
				ctaText='Découvrir le Massage des 5 Continents'
			/>
		</>
	);
};

export default CtaM5C;
