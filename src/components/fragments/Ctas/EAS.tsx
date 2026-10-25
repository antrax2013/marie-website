import Cta, { CtaClassNameProps } from './Cta';

const CtaEAS = ({ className }: CtaClassNameProps) => {
	return (
		<>
			<Cta
				link='/massage-assis-methode-eas'
				title={
					'Cliquez pour en apprendre d’avantage sur le massage du dos assis méthode EAS®'
				}
				ctaLinkClassName={`${className ?? 'cta-tertiary'} devis`}
				ctaText='Découvrir le massage du dos assis EAS®'
			/>
		</>
	);
};

export default CtaEAS;
