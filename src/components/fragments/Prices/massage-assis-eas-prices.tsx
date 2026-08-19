import CtaDevis from '../Ctas/Devis';
import '../../../scss/fragments/PricesContainer.scss';

export interface iPricesTable {
	title?: string;
	th?: string;
}

export const PricesMassageEAS = ({ title }: iPricesTable) => {
	return (
		<>
			<div className='prices-container'>
				{!!title && <h4 id='massage-assis-methode-EAS-tarifs'>{title}</h4>}
				<table>
					<tbody>
						<tr>
							<th>Durée</th>
							<th>Cabinet</th>
							<th>Domicile</th>
						</tr>
						<tr>
							<td>0h20</td>
							<td>25,00 €</td>
							<td>30,00 €</td>
						</tr>
						<tr>
							<td>0h35</td>
							<td>40,00 €</td>
							<td>45,00 €</td>
						</tr>
						<tr>
							<td>0h45</td>
							<td>50,00 €</td>
							<td>55,00 €</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p className='price-devis-cta'>
				<span className='asterix' id='asterix'>
					*
				</span>{' '}
				Entreprise sur devis :<CtaDevis />
			</p>
		</>
	);
};
