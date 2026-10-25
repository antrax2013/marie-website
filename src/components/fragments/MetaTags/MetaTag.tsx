import { Helmet } from 'react-helmet';
import Metas from './metas.json';
import { iMetaTag } from './IMetaTag';

interface iMeta {
	name?: string;
	content: string;
	property?: string;
	itemprop?: string;
}

interface MetaTagProps {
	tag: string;
}

const MetaTag = ({ tag }: MetaTagProps) => {
	const meta: iMetaTag = Metas.metas.find((m) => m.key === tag) || {
		title: '',
		description: '',
	};

	if (meta.title === '' || meta.description === '') {
		console.error(
			`MetaTag: No meta found for tag "${tag}". Please check the Metas file.`,
		);
	} else {
		console.log(`MetaTag: Found meta for tag "${tag}":`, meta);
	}

	const metas = [
		{
			//Open tags pour Faceboock et messenger
			property: `og:title`,
			content: meta.title,
			key: `og:title`,
		},
		{
			property: `og:description`,
			content: meta.description,
			key: `og:description`,
		},
		{
			property: `twitter:card`,
			content: meta.description,
			key: `twitter:card`,
		},
		{
			property: `twitter:title`,
			content: meta.title,
			key: `twitter:title`,
		},
		{
			property: `twitter:description`,
			content: meta.description,
			key: `twitter:description`,
		},
		{
			itemprop: `description`,
			content: meta.description,
		},
	] as iMeta[];

	return (
		<Helmet>
			<title>{meta.title}</title>
			<meta name='description' content={meta.description} />

			{metas.map((m: iMeta, i: number) => {
				if (m.name) {
					return <meta name={m.name} content={m.content} key={`meta-${i}`} />;
				} else if (m.property) {
					return (
						<meta property={m.property} content={m.content} key={`meta-${i}`} />
					);
				} else if (m.itemprop) {
					return (
						<meta itemProp={m.itemprop} content={m.content} key={`meta-${i}`} />
					);
				}
				return null;
			})}
		</Helmet>
	);
};

export default MetaTag;
