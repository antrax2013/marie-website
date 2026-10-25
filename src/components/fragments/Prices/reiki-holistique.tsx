import '../../../scss/fragments/PricesContainer.scss';

export interface iPricesTable {
	title?: string;
	th?: string;
}

export const PricesReikiH = ({ title }: iPricesTable) => {
	return (
		<>
			<div className='prices-container'>
				{!!title && (
					<h4
						id='reiki-holistique-tarifs'
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
								<span itemProp='price'>70,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
							<td>
								<span itemProp='price'>75,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
						</tr>
						<tr>
							<td>pack 3 soins</td>
							<td>
								<span itemProp='price'>200,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
							<td>
								<span itemProp='price'>215,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
						</tr>
						<tr>
							<td>pack 6 soins</td>
							<td>
								<span itemProp='price'>390,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
							<td>
								<span itemProp='price'>420,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
						</tr>
						<tr>
							<td>pack 12 soins</td>
							<td>
								<span itemProp='price'>770,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
							<td>
								<span itemProp='price'>830,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};
