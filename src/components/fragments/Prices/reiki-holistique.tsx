import '../../../scss/fragments/PricesContainer.scss';

export interface iPricesTable {
	title?: string;
	th?: string;
}

export const PricesReikiH = ({ title }: iPricesTable) => {
	return (
		<>
			<div className='prices-container'>
				{!!title && <h4 id='reiki-holistique-tarifs'>{title}</h4>}
				<table>
					<tbody>
						<tr>
							<th>&nbsp;</th>
							<th>Cabinet</th>
							<th>Domicile</th>
						</tr>
						<tr>
							<td>à l'unité</td>
							<td>70,00 €</td>
							<td>75,00 €</td>
						</tr>
						<tr>
							<td>pack 3 soins</td>
							<td>200,00 €</td>
							<td>215,00 €</td>
						</tr>
						<tr>
							<td>pack 6 soins</td>
							<td>390,00 €</td>
							<td>420,00 €</td>
						</tr>
						<tr>
							<td>pack 12 soins</td>
							<td>770,00 €</td>
							<td>830,00 €</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};
