import JsonLd from './JsonLd';
import * as BreadcrumbLd from '../../entities/json-ld/breadCrum.json';
import * as BusinessLd from '../../entities/json-ld/localBusiness.json';

const MainJsonLd = () => {
	return (
		<>
			<JsonLd data={BreadcrumbLd} />
			<JsonLd data={BusinessLd} />
		</>
	);
};

export default MainJsonLd;
