const Footer = () => {
	return (
		<section className='footer-overlay-container'>
			<span className='hidden md:inline-flex m-1'>
				sur rendez-vous uniquement
			</span>
			<span className='hidden md:inline-flex m-1'> - </span>
			<span className='m-1'>
				<a
					className='footer-phone'
					type='tel'
					href={`tel:${import.meta.env.VITE_META_NUMTEL}`}
				>
					{import.meta.env.VITE_META_NUMTEL}
				</a>
			</span>
		</section>
	);
};

export default Footer;
