import McLink from '../McLink';

export interface McLinkPorps {
	noWrap?: boolean;
	text: string;
	className?: string;
}

const McLinkEnEntreprise = ({ noWrap, text, className }: McLinkPorps) => {
	return (
		<McLink
			href='/massage-en-entreprise-saint-quentin-en-yvelines'
			text={text}
			title='En savoir plus sur le massage sur chaise en entreprise sur Saint-Quentin-en-Yvelines'
			noWrap={noWrap}
			className={className}
		/>
	);
};

export default McLinkEnEntreprise;
