import McLink from '../McLink';

export interface McLinkPorps {
	noWrap?: boolean;
	text: string;
	className?: string;
}

const McLinkReikiUsui = ({ noWrap, text, className }: McLinkPorps) => {
	return (
		<McLink
			href='/reiki-usui'
			text={text}
			title='En savoir plus sur le soin énergétique Reiki Usui'
			noWrap={noWrap}
			className={className}
		/>
	);
};

export default McLinkReikiUsui;
