interface iAddress {
	title?: string;
	descprition?: string;
	floor?: string;
	streetAddress?: string;
	postalCode?: string;
	addressLocality?: string;
	map?: string;
	mapWidth?: number;
	latitude?: string;
	longitude?: string;
	id?: string;
}

export const Adresse = ({
	title,
	descprition,
	floor,
	streetAddress,
	postalCode,
	addressLocality: locality,
	map,
	mapWidth,
}: /*...props*/
iAddress) => {
	return (
		<div className='address-container'>
			<div className='section-header'>{!!title && <h4>{title}</h4>}</div>
			<div className='section-content'>
				<address>
					{!!map && (
						<div className='section-map'>
							<div className='map'>
								<iframe
									src={map}
									width={mapWidth || 300}
									loading='lazy'
								></iframe>
							</div>
						</div>
					)}
					<div className='section-adresse'>
						{!!descprition && <p>{descprition}</p>}
						<span className='paragraphe-content'>
							<ul>
								<ol>
									{!!floor && (
										<>
											{floor} <br />
										</>
									)}
									{streetAddress}
								</ol>
								<ol>
									{postalCode} {locality}
								</ol>
							</ul>
						</span>
					</div>
				</address>
			</div>
		</div>
	);
};
