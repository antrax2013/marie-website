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
	latitude,
	longitude,
}: /*...props*/
iAddress) => {
	return (
		<div className='address-container'>
			<div className='section-header'>{!!title && <h4>{title}</h4>}</div>
			<div
				className='section-content'
				itemScope
				itemType='https://schema.org/HealthClub'
			>
				<address>
					{!!map && (
						<div className='section-map'>
							<div className='map' itemProp='hasMap'>
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
						<span
							className='paragraphe-content'
							itemProp='address'
							itemScope
							itemType='https://schema.org/PostalAddress'
						>
							<ul>
								<ol>
									{!!floor && (
										<>
											{floor} <br />
										</>
									)}
									<span itemProp='streetAddress'>{streetAddress}</span>
								</ol>
								<ol>
									<span itemProp='postalCode'>{postalCode}</span>{' '}
									<span itemProp='addressLocality'>{locality}</span>
								</ol>
							</ul>
						</span>
					</div>
					{!!latitude && !!longitude && (
						<span
							itemProp='geo'
							itemScope
							itemType='https://schema.org/GeoCoordinates'
						>
							<meta itemProp='latitude' content={latitude} />
							<meta itemProp='longitude' content={longitude} />
						</span>
					)}
				</address>
			</div>
		</div>
	);
};
