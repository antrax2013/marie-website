import '../../../scss/fragments/PricesContainer.scss';

export interface iPricesTable {
	title?: string;
	th?: string;
}

export const PricesReikiC = ({ title }: iPricesTable) => {
	return (
		<>
			<div className='prices-container'>
				{!!title && (
					<h4
						id='reiki-cible-tarifs'
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
								<span itemProp='price'>40,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
							<td>
								<span itemProp='price'>45,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
						</tr>
						<tr>
							<td>pack 3 soins</td>
							<td>
								<span itemProp='price'>115,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
							<td>
								<span itemProp='price'>130,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
						</tr>
						<tr>
							<td>pack 6 soins</td>
							<td>
								<span itemProp='price'>225,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
							<td>
								<span itemProp='price'>255,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
						</tr>
						<tr>
							<td>pack 12 soins</td>
							<td>
								<span itemProp='price'>440,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
							<td>
								<span itemProp='price'>500,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};
