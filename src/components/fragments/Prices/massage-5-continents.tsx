import '../../../scss/fragments/PricesContainer.scss';

export interface iPricesTable {
	title?: string;
	th?: string;
}

export const PricesM5C = ({ title }: iPricesTable) => {
	return (
		<>
			<div className='prices-container'>
				{!!title && (
					<h4
						id='massage-cinq-continents-tarifs'
						itemScope
						itemType='https://schema.org/PriceSpecification'
					>
						{title}
					</h4>
				)}
				<table>
					<tbody>
						<tr>
							<th>&nbsp;</th>
							<th>Cabinet</th>
							<th>Domicile</th>
						</tr>
						<tr>
							<td>à l'unité</td>
							<td>
								<span itemProp='price'>90,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
							<td>
								<span itemProp='price'>95,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
						</tr>
						<tr>
							<td>pack 3 soins</td>
							<td>
								<span itemProp='price'>260,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
							<td>
								<span itemProp='price'>275,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
						</tr>
						<tr>
							<td>pack 6 soins</td>
							<td>
								<span itemProp='price'>500,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
							<td>
								<span itemProp='price'>530,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
						</tr>
						<tr>
							<td>pack 12 soins</td>
							<td>
								<span itemProp='price'>900,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
							<td>
								<span itemProp='price'>1050,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};
