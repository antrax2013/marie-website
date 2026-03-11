import { iImage } from '../McImage/McImage';
import { iMetaTag } from '../Tools/MetaTag';

export interface iBlog {
	slug: string;
	metas: iMetaTag;
	date: Date;
	tags: string[];
	images: iImage[];
	content?: string | JSX.Element;
	type: 'Evénement' | 'Article';
	h1?: string;
}

export interface iBlogCradsPanel {
	filter?: string;
	sort: string;
	desc: boolean;
}
