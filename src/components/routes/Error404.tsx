import MetaTag from '../fragments/Tools/MetaTag';

const Error404 = () => {
	const head = () => {
		return (
			<MetaTag
				title='Erreur 404'
				description="La page demandée n'existe pas ou plus."
			/>
		);
	};

	return (
		<>
			{head()}
			<div className='article erreur-404'>
				<h1>Erreur 404</h1>
				<h2>Oups !!!</h2>
				<p>La page demandée n'esxiste pas ou n'est plus disponible.</p>
			</div>
		</>
	);
};
export default Error404;
