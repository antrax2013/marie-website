import McLink from '../McLink';

export interface McLinkPorps {
	noWrap?: boolean;
	text: string;
	className?: string;
}

const McLinkMEAS = ({ noWrap, text, className }: McLinkPorps) => {
	return (
		<McLink
			href='/massage-assis-methode-eas'
			text={text}
			title='En savoir plus sur le massage du dos assis la méthode EAS®'
			noWrap={noWrap}
			className={className}
		/>
	);
};
export default McLinkMEAS;
