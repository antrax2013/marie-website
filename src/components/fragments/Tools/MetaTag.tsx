import { Helmet } from 'react-helmet';

export interface iMetaTag {
	title: string;
	description: string;
	forceTitle?: boolean;
}

interface iMeta {
	name?: string;
	content: string;
	property?: string;
	itemprop?: string;
}

const MetaTag = ({ title, description }: iMetaTag) => {
	const meta = [
		// {
		// 	name: `description`,
		// 	content: description,
		// 	key: `description`,
		// },
		{
			//Open tags pour Faceboock et messenger
			property: `og:title`,
			content: title,
			key: `og:title`,
		},
		{
			property: `og:description`,
			content: description,
			key: `og:description`,
		},
		{
			property: `twitter:card`,
			content: description,
			key: `twitter:card`,
		},
		{
			property: `twitter:title`,
			content: title,
			key: `twitter:title`,
		},
		{
			property: `twitter:description`,
			content: description,
			key: `twitter:description`,
		},
		{
			itemprop: `description`,
			content: description,
		},
	] as iMeta[];

	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />

			{meta.map((m: iMeta, i: number) => {
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
