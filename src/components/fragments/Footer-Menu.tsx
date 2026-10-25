import Logo from '../../assets/logo512.png';
import PanneauLateral from './Panneau-lateral';
import { Adresse } from './Adresse';

const FooterMenu = (/*{ ...props }*/) => {
	return (
		<>
			<div className='main-footer-container'>
				<div className='main-footer-flex-container'>
					<div className='entreprise-container'>
						<div className='entreprise-flex-container'>
							<div className='logo-container'>
								<img
									alt='Fleur de vie utilisée comme logo pour illustrer le bien-être et l’harmonisation énergétique'
									loading='lazy'
									src={Logo}
								/>
							</div>
							<div className='main-address-container'>
								<Adresse
									title='Marie COPHIGNON - Massothérapeute énergétique'
									streetAddress='14, place des Ardennes résidence la Villeparc'
									postalCode='78310'
									addressLocality='Maurepas'
									latitude='48.771601'
									longitude='1.942598'
								/>
								<div className='phone-container'>
									Tél :{' '}
									<a href={`tel:${import.meta.env.VITE_META_NUMTEL}`}>
										{import.meta.env.VITE_META_NUMTEL}
									</a>
								</div>
								<div className='siret-container'>
									<i className='siret'>N° Siret : 910 427 988 00019</i>
								</div>
							</div>
						</div>
					</div>
					<div className='lateral-pane-container'>
						<PanneauLateral />
					</div>
				</div>
			</div>

			<div className='disclaimers-container'>
				<p className='text-third'>
					<span className='asterix' id='disclaimers'>
						*
					</span>{' '}
					Les soins Reiki Usui et massages énergétiques ne se substitutent à pas
					un traitement médical ou thérapeutique. Les soins et massages ne sont
					pas à caractère sexuel. Pour les mineurs la présence d’un adulte
					accompagnant durant toute la séance est obligatoire.
				</p>
			</div>
		</>
	);
};

export default FooterMenu;
