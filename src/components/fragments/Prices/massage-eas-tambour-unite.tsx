import '../../../scss/fragments/PricesContainer.scss';
import { iPricesTable } from './iPricesTable';

export const PricesMEASTambourUnite = ({ title }: iPricesTable) => {
	return (
		<>
			<div className='prices-container'>
				{!!title && <h4 id='massage-eas-tambour-unite-tarifs'>{title}</h4>}
				<table>
					<tbody>
						<tr>
							<th>Durée</th>
							<th>Tarif</th>
						</tr>
						<tr>
							<td>0h30</td>
							<td>50,00 €</td>
						</tr>
						<tr>
							<td>0h45</td>
							<td>90,00 €</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};
