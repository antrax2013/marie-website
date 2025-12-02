export interface iFaqItem {
	question: string;
	response: string | JSX.Element;
}

const FaqItemComponent = (item: iFaqItem) => {
	return (
		<div className='faq-item'>
			{' '}
			<h3 className='faq-question' itemProp='category' content='question'>
				{item.question}
			</h3>
			<div className='faq-response' itemProp='category' content='answer'>
				{item.response}
			</div>
		</div>
	);
};
export default FaqItemComponent;
