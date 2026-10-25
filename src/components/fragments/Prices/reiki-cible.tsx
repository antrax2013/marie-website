import '../../../scss/fragments/PricesContainer.scss';

export interface iPricesTable {
	title?: string;
	th?: string;
}

export const PricesReikiC = ({ title }: iPricesTable) => {
	return (
		<>
			<div className='prices-container'>
				{!!title && <h4 id='reiki-cible-tarifs'>{title}</h4>}
				<table>
					<tbody>
						<tr>
							<th>&nbsp;</th>
							<th>Cabinet</th>
							<th>Domicile</th>
						</tr>
						<tr>
							<td>à l'unité</td>
							<td>40,00 €</td>
							<td>45,00 €</td>
						</tr>
						<tr>
							<td>pack 3 soins</td>
							<td>115,00 €</td>
							<td>130,00 €</td>
						</tr>
						<tr>
							<td>pack 6 soins</td>
							<td>225,00 €</td>
							<td>255,00 €</td>
						</tr>
						<tr>
							<td>pack 12 soins</td>
							<td>440,00 €</td>
							<td>500,00 €</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};
