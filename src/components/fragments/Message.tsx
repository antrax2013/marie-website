interface iMessage {
	content: string;
	link: string;
	alt: string;
}

const Message = ({ content, link, alt }: iMessage) => {
	const MaxLenght = 100;
	const isTruncated = content.length > MaxLenght;
	const _content = isTruncated
		? content.substring(0, MaxLenght - 3) + '...'
		: content;
	const _overlay = isTruncated ? content : '';

	return (
		<div className='message-container'>
			<p>
				<a href={link} title={alt} target='_blank'>
					✨{' '}
					<span className='message-content' title={_overlay}>
						{_content}
					</span>{' '}
					✨
				</a>
			</p>
		</div>
	);
};

export default Message;
