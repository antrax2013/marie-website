export interface iFaqItem {
	question: string;
	response: any; //JSX.Element;
}

const FaqItemComponent = (item: iFaqItem) => {
	return (
		<div
			className='faq-item'
			itemProp='mainEntity'
			itemScope
			itemType='https://schema.org/Question'
		>
			{' '}
			<h3 className='faq-question' itemProp='text' content='question'>
				{item.question}
			</h3>
			<div
				className='faq-response'
				itemProp='acceptedAnswer'
				itemScope
				itemType='https://schema.org/Answer'
				content='answer'
			>
				<span itemProp='text'>{item.response}</span>
			</div>
		</div>
	);
};
export default FaqItemComponent;
