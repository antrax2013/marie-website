import { Button } from 'primereact/button';
import openInNewTab from '../../modules/OpenInNewTab';
import '../../scss/fragments/SocialNetworks.scss';

const SocialNetworks = () => {
	return (
		<>
			{import.meta.env.VITE_ACTIVEFB == '1' && (
				<div className='social-networks-container'>
					<div className='social-networks'>
						<Button
							className='instagram p-0'
							title='Retrouvez-moi sur Instagram'
							onClick={() => {
								openInNewTab(import.meta.env.VITE_URLInstagram || '');
							}}
						>
							<i className='pi pi-instagram px-2'></i>
						</Button>
						<Button
							className='facebook p-0'
							onClick={() => {
								openInNewTab(import.meta.env.VITE_URLFB || '');
							}}
							title='Retrouvez-moi sur Facebook'
						>
							<i className='pi pi-facebook px-2'></i>
						</Button>
						<Button
							className='linkedin p-0'
							onClick={() => {
								openInNewTab(import.meta.env.VITE_URLLinkedIn || '');
							}}
							title='Retrouvez-moi sur Linkedin'
						>
							<i className='pi pi-linkedin px-2'></i>
						</Button>
						<Button
							className='twitter p-0'
							onClick={() => {
								openInNewTab(import.meta.env.VITE_URLTwitter || '');
							}}
							title='Retrouvez-moi sur Twitter'
						>
							<i className='pi pi-twitter px-2'></i>
						</Button>
					</div>
				</div>
			)}
		</>
	);
};

export default SocialNetworks;
