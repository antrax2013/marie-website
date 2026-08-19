import '../../../scss/fragments/PricesContainer.scss';

export interface iPricesTable {
	title?: string;
	th?: string;
}

export const PricesM5C = ({ title }: iPricesTable) => {
	return (
		<>
			<div className='prices-container'>
				{!!title && <h4 id='massage-cinq-continents-tarifs'>{title}</h4>}
				<table>
					<tbody>
						<tr>
							<th>&nbsp;</th>
							<th>Cabinet</th>
							<th>Domicile</th>
						</tr>
						<tr>
							<td>à l'unité</td>
							<td>90,00 €</td>
							<td>95,00 €</td>
						</tr>
						<tr>
							<td>pack 3 soins</td>
							<td>260,00 €</td>
							<td>275,00 €</td>
						</tr>
						<tr>
							<td>pack 6 soins</td>
							<td>500,00 €</td>
							<td>530,00 €</td>
						</tr>
						<tr>
							<td>pack 12 soins</td>
							<td>900,00 €</td>
							<td>1050,00 €</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};
