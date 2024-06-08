const Footer = () => {
	return (
		<section className='flex flex-column md:flex-row'>
			<span className='hidden md:inline-flex m-1'>
				uniquements sur rendez-vous
			</span>
			<span className='hidden md:inline-flex m-1'> - </span>
			<span className='m-1'>
				Rdv{' '}
				<span itemProp='telephone'>
					<a type='tel' href={`tel:${import.meta.env.VITE_META_NUMTEL}`}>
						{import.meta.env.VITE_META_NUMTEL}
					</a>
				</span>
				{import.meta.env.VITE_ACTIVERDV == '1' && (
					<>
						ou en ligne{' '}
						<a
							href={import.meta.env.VITE_URLRDV}
							rel={'external'}
							target={'_blank'}
						>
							cliquez ici
						</a>
					</>
				)}
			</span>
		</section>
	);
};

export default Footer;
