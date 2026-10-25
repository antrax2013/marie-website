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
				{!!title && (
					<h4
						id='massage-assis-methode-EAS-tarifs'
						itemScope
						itemType='https://schema.org/PriceSpecification'
					>
						{title}
					</h4>
				)}
				<table>
					<tbody>
						<tr>
							<th>Durée</th>
							<th>Cabinet</th>
							<th>Domicile</th>
						</tr>
						<tr>
							<td>0h20</td>
							<td>
								<span itemProp='price'>25,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
							<td>
								<span itemProp='price'>30,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
						</tr>
						<tr>
							<td>0h35</td>
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
							<td>0h45</td>
							<td>
								<span itemProp='price'>50,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
							<td>
								<span itemProp='price'>55,00</span>{' '}
								<span itemProp='priceCurrency'>€</span>
							</td>
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
