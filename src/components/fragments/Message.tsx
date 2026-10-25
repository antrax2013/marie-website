interface iMessage {
	content: string;
	link: string;
	alt: string;
}

const Message = ({ content, link, alt }: iMessage) => {
	return (
		<div className='message-container'>
			<p>
				<a href={link} title={alt} target='_blank'>
					✨{' '}
					<span className='message-content' title={content}>
						{content}
					</span>{' '}
					✨
				</a>
			</p>
		</div>
	);
};

export default Message;
