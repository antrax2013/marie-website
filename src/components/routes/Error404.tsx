import MetaTag from '../fragments/MetaTags/MetaTag';

const Error404 = () => {
	return (
		<>
			<MetaTag tag='erreur-404' />
			<div className='article erreur-404'>
				<h1>Erreur 404</h1>
				<h2>Oups !!!</h2>
				<p>La page demandée n'esxiste pas ou n'est plus disponible.</p>
			</div>
		</>
	);
};
export default Error404;
