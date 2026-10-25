import McLink from '../McLink';

export interface McLinkPorps {
	noWrap?: boolean;
	text: string;
	className?: string;
}

const McLinkSoinDomicile = ({ noWrap, text, className }: McLinkPorps) => {
	return (
		<McLink
			href='/soins-a-domicile-saint-quentin-en-yvelines'
			text={text}
			title='En savoir plus sur mes soins à domicile sur Saint-Quentin-en-Yvelines'
			noWrap={noWrap}
			className={className}
		/>
	);
};

export default McLinkSoinDomicile;
