import McLink from '../McLink';

export interface McLinkPorps {
	noWrap?: boolean;
	text: string;
	className?: string;
}

const McLinkM5C = ({ noWrap, text, className }: McLinkPorps) => {
	return (
		<McLink
			href='/massage-des-5-continents'
			text={text}
			title='En savoir plus sur le Massage des 5 Continents (M5C)'
			noWrap={noWrap}
			className={className}
		/>
	);
};

export default McLinkM5C;
