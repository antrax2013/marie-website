import FaqItemComponent, { iFaqItem } from './Faq-Item';

export interface iFaq {
	items: iFaqItem[];
}

const Faq = ({ items }: iFaq) => {
	return (
		<>
			{items.map((item: iFaqItem, i: number) => (
				<FaqItemComponent
					key={`iFaqItem-${i}`}
					question={item.question}
					response={item.response}
				/>
			))}
		</>
	);
};
export default Faq;
