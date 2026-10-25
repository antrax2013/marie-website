import JsonLd from './JsonLd';
import * as BusinessLd from '../../entities/json-ld/localBusiness.json';

const MainJsonLd = () => {
	return (
		<>
			<JsonLd data={BusinessLd} />
		</>
	);
};

export default MainJsonLd;
