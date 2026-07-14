export interface LinkPorps {
	href: string;
	text: string;
	target?: string;
	title?: string;
	className?: string;
	noWrap?: boolean;
}

const McLink = ({
	href,
	text,
	target,
	title,
	className,
	noWrap,
}: LinkPorps) => {
	return (
		<>
			{!noWrap && ' '}
			<a
				href={href}
				target={target ?? '_blank'}
				title={title}
				className={className ?? 'underline'}
			>
				{text}
			</a>
			{!noWrap && ' '}
		</>
	);
};

export default McLink;
